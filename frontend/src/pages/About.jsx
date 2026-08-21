import {
    Container,
    Typography,
    Box,
    Grid,
    Card,
    CardContent,
    Divider,
    Chip
} from "@mui/material";

import SecurityIcon from "@mui/icons-material/Security";
import MemoryIcon from "@mui/icons-material/Memory";
import HubIcon from "@mui/icons-material/Hub";
import SpeedIcon from "@mui/icons-material/Speed";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function About() {

    return (
        <>
            <Navbar />

            <Container
                maxWidth="lg"
                sx={{
                    py: 8
                }}
            >

                {/* Header */}

                <Box
                    textAlign="center"
                    sx={{
                        mb: 8
                    }}
                >

                    <SecurityIcon
                        sx={{
                            fontSize: 60,
                            color: "#3B82F6"
                        }}
                    />

                    <Typography
                        variant="h2"
                        fontWeight="bold"
                        sx={{
                            mt: 2
                        }}
                    >
                        About DeepShield AI
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{
                            mt: 2,
                            maxWidth: 750,
                            mx: "auto",
                            lineHeight: 1.8
                        }}
                    >
                        DeepShield AI is an AI-powered facial analysis
                        platform designed to detect manipulated facial
                        images and verify facial identity using
                        deep learning.
                    </Typography>

                </Box>

                {/* What it does */}

                <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{
                        mb: 4
                    }}
                >
                    What is DeepShield AI?
                </Typography>

                <Typography
                    color="text.secondary"
                    sx={{
                        lineHeight: 1.9,
                        mb: 8
                    }}
                >
                    DeepShield AI combines two complementary computer
                    vision capabilities. The first uses a hybrid
                    deep learning architecture to classify facial
                    images as Real or Fake. The second uses
                    ArcFace-based facial embeddings to determine
                    whether two images belong to the same person.
                </Typography>

                {/* Architecture */}

                <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{
                        mb: 4
                    }}
                >
                    System Architecture
                </Typography>

                <Grid
                    container
                    spacing={3}
                    sx={{
                        mb: 8
                    }}
                >

                    <Grid item xs={12} md={4}>
                        <InfoCard
                            icon={<MemoryIcon />}
                            title="Deepfake Detection"
                            text="Hybrid EfficientNet and frequency-domain analysis for Real/Fake classification."
                        />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <InfoCard
                            icon={<HubIcon />}
                            title="Face Verification"
                            text="ArcFace generates facial embeddings that are compared using cosine similarity."
                        />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <InfoCard
                            icon={<SpeedIcon />}
                            title="REST API"
                            text="A Flask backend exposes prediction and face verification services to the React frontend."
                        />
                    </Grid>

                </Grid>

                {/* Workflow */}

                <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{
                        mb: 4
                    }}
                >
                    Workflow
                </Typography>

                <Card
                    sx={{
                        background: "#1E293B",
                        borderRadius: 4,
                        mb: 8
                    }}
                >

                    <CardContent
                        sx={{
                            p: 4
                        }}
                    >

                        <Typography>
                            User Upload
                        </Typography>

                        <Typography
                            color="text.secondary"
                            sx={{
                                my: 1
                            }}
                        >
                            ↓
                        </Typography>

                        <Typography>
                            React Frontend
                        </Typography>

                        <Typography
                            color="text.secondary"
                            sx={{
                                my: 1
                            }}
                        >
                            ↓
                        </Typography>

                        <Typography>
                            Flask REST API
                        </Typography>

                        <Typography
                            color="text.secondary"
                            sx={{
                                my: 1
                            }}
                        >
                            ↓
                        </Typography>

                        <Typography>
                            AI Model
                        </Typography>

                        <Typography
                            color="text.secondary"
                            sx={{
                                my: 1
                            }}
                        >
                            ↓
                        </Typography>

                        <Typography>
                            Prediction / Similarity Result
                        </Typography>

                    </CardContent>

                </Card>

                {/* Results */}

                <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{
                        mb: 4
                    }}
                >
                    Project Results
                </Typography>

                <Grid
                    container
                    spacing={3}
                    sx={{
                        mb: 8
                    }}
                >

                    <Grid item xs={12} sm={6} md={3}>
                        <StatCard
                            value="86.41%"
                            label="Validation Accuracy"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <StatCard
                            value="72.31%"
                            label="Test Accuracy"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <StatCard
                            value="0.7988"
                            label="ROC AUC"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <StatCard
                            value="2"
                            label="AI Capabilities"
                        />
                    </Grid>

                </Grid>

                {/* Technology */}

                <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{
                        mb: 4
                    }}
                >
                    Technology Stack
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        mb: 8
                    }}
                >

                    <Chip label="Python" />
                    <Chip label="PyTorch" />
                    <Chip label="EfficientNet" />
                    <Chip label="OpenCV" />
                    <Chip label="InsightFace" />
                    <Chip label="ArcFace" />
                    <Chip label="Flask" />
                    <Chip label="React" />
                    <Chip label="Material UI" />
                    <Chip label="ONNX Runtime" />

                </Box>

                {/* Future */}

                <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{
                        mb: 4
                    }}
                >
                    Future Scope
                </Typography>

                <Typography
                    color="text.secondary"
                    sx={{
                        lineHeight: 1.9
                    }}
                >
                    Future versions can extend DeepShield AI with
                    video deepfake detection, explainable AI using
                    techniques such as Grad-CAM, improved identity
                    verification for manipulated images, and
                    automated analysis reports.
                </Typography>

            </Container>

            <Footer />
        </>
    );
}


function InfoCard({
    icon,
    title,
    text
}) {

    return (
        <Card
            sx={{
                height: "100%",
                background: "#1E293B",
                border: "1px solid #334155",
                borderRadius: 4
            }}
        >

            <CardContent
                sx={{
                    p: 3
                }}
            >

                <Box
                    sx={{
                        color: "#3B82F6"
                    }}
                >
                    {icon}
                </Box>

                <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                        mt: 2
                    }}
                >
                    {title}
                </Typography>

                <Typography
                    color="text.secondary"
                    sx={{
                        mt: 1,
                        lineHeight: 1.7
                    }}
                >
                    {text}
                </Typography>

            </CardContent>

        </Card>
    );
}


function StatCard({
    value,
    label
}) {

    return (
        <Card
            sx={{
                background: "#1E293B",
                border: "1px solid #334155",
                borderRadius: 4,
                textAlign: "center"
            }}
        >

            <CardContent
                sx={{
                    py: 4
                }}
            >

                <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="primary"
                >
                    {value}
                </Typography>

                <Typography
                    color="text.secondary"
                    sx={{
                        mt: 1
                    }}
                >
                    {label}
                </Typography>

            </CardContent>

        </Card>
    );
}