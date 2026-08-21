import torch
import torchvision.transforms as transforms

from config import MODEL_PATH, IMAGE_SIZE

from src.model import HybridDeepfakeDetector
from src.transforms import FrequencyTransform

from core.image_loader import ImageLoader
from core.face_validator import face_validator


class Predictor:

    def __init__(self):

        # -------------------------
        # Device
        # -------------------------

        self.device = torch.device(
            "cuda" if torch.cuda.is_available() else "cpu"
        )

        print(f"[INFO] Using Device : {self.device}")

        # -------------------------
        # RGB Transform
        # -------------------------

        self.rgb_transform = transforms.Compose([
            transforms.Resize((IMAGE_SIZE, IMAGE_SIZE)),
            transforms.ToTensor()
        ])

        # -------------------------
        # Frequency Transform
        # -------------------------

        self.frequency_transform = transforms.Compose([
            FrequencyTransform(),
            transforms.Resize((IMAGE_SIZE, IMAGE_SIZE)),
            transforms.ToTensor()
        ])

        # -------------------------
        # Load Model
        # -------------------------

        self.model = HybridDeepfakeDetector(
            pretrained=False
        ).to(self.device)

        checkpoint = torch.load(
            MODEL_PATH,
            map_location=self.device
        )

        self.model.load_state_dict(checkpoint)

        self.model.eval()

        print("[INFO] Model Loaded Successfully")

    # ----------------------------------------

    def predict(self, source):

        try:

            # -------------------------
            # Load Image
            # -------------------------

            image = ImageLoader.load(source)

            # -------------------------
            # Face Validation
            # -------------------------

            validation = face_validator.validate(image)

            if not validation["valid"]:

                return {
                    "success": False,
                    "message": validation["message"]
                }

            # -------------------------
            # RGB Input
            # -------------------------

            rgb = self.rgb_transform(
                image
            ).unsqueeze(0).to(self.device)

            # -------------------------
            # Frequency Input
            # -------------------------

            freq = self.frequency_transform(
                image
            ).unsqueeze(0).to(self.device)

            # -------------------------
            # Prediction
            # -------------------------

            with torch.no_grad():

                outputs = self.model(
                    rgb,
                    freq
                )

                probabilities = torch.softmax(
                    outputs,
                    dim=1
                )

                prediction = outputs.argmax(
                    1
                ).item()

            # -------------------------
            # Probabilities
            # -------------------------

            real_probability = probabilities[0][0].item()

            fake_probability = probabilities[0][1].item()

            confidence = max(
                real_probability,
                fake_probability
            )

            # -------------------------
            # Label
            # -------------------------

            label = (
                "Real"
                if prediction == 0
                else "Fake"
            )

            # -------------------------
            # Response
            # -------------------------

            return {

                "success": True,

                "prediction": label,

                "confidence": round(
                    confidence * 100,
                    2
                ),

                "real_probability": round(
                    real_probability * 100,
                    2
                ),

                "fake_probability": round(
                    fake_probability * 100,
                    2
                ),

                "model":
                    "Hybrid EfficientNet + Frequency CNN",

                "framework":
                    "PyTorch",

                "version":
                    "1.0"
            }

        except Exception as e:

            print(
                f"[ERROR] Prediction failed: {e}"
            )

            return {
                "success": False,
                "message": "Unable to process the image."
            }