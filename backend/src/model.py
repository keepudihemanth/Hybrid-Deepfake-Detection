import torch
import torch.nn as nn
import timm


class FrequencyCNN(nn.Module):

    def __init__(self):
        super().__init__()

        self.features = nn.Sequential(

            nn.Conv2d(3, 32, kernel_size=3, padding=1),
            nn.BatchNorm2d(32),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2),

            nn.Conv2d(32, 64, kernel_size=3, padding=1),
            nn.BatchNorm2d(64),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2),

            nn.Conv2d(64, 128, kernel_size=3, padding=1),
            nn.BatchNorm2d(128),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2),

            nn.Conv2d(128, 256, kernel_size=3, padding=1),
            nn.BatchNorm2d(256),
            nn.ReLU(inplace=True),

            nn.AdaptiveAvgPool2d((1, 1))
        )

    def forward(self, x):

        x = self.features(x)

        x = torch.flatten(x, 1)

        return x


class HybridDeepfakeDetector(nn.Module):

    def __init__(
        self,
        freeze_backbone=True,
        pretrained=True
    ):

        super().__init__()

        self.rgb_backbone = timm.create_model(
            "efficientnet_b0",
            pretrained=pretrained,
            num_classes=0,
            global_pool="avg"
        )

        if freeze_backbone:

            for param in self.rgb_backbone.parameters():
                param.requires_grad = False

        self.frequency_branch = FrequencyCNN()

        self.rgb_projection = nn.Linear(1280, 256)

        self.attention = nn.Sequential(

            nn.Linear(512, 512),

            nn.ReLU(inplace=True),

            nn.Linear(512, 512),

            nn.Sigmoid()

        )

        self.fusion = nn.Sequential(

            nn.Linear(512, 256),

            nn.ReLU(inplace=True),

            nn.Dropout(0.4),

            nn.Linear(256, 128),

            nn.ReLU(inplace=True),

            nn.Dropout(0.3)

        )

        self.classifier = nn.Linear(128, 2)

    def forward(self, rgb, frequency):

        rgb_features = self.rgb_backbone(rgb)

        rgb_features = self.rgb_projection(rgb_features)

        freq_features = self.frequency_branch(frequency)

        features = torch.cat(
            [rgb_features, freq_features],
            dim=1
        )

        attention = self.attention(features)

        features = features * attention

        features = self.fusion(features)

        output = self.classifier(features)

        return output