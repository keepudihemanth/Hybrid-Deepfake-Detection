import {
    Container,
    Grid,
    Typography,
    Box
} from "@mui/material";

import SecurityIcon from "@mui/icons-material/Security";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FeatureCard from "../components/common/FeatureCard";

export default function Home() {

    return (
        <>
            <Navbar />

            <Box
                sx={{
                    minHeight: "70vh",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    px: 2
                }}
            >

                <Container maxWidth="md">

                    <SecurityIcon
                        sx={{
                            fontSize: 65,
                            color: "#3B82F6",
                            mb: 2
                        }}
                    />

                    <Typography
                        variant="h2"
                        fontWeight="bold"
                        sx={{
                            fontSize: {
                                xs: "2.5rem",
                                md: "4rem"
                            }
                        }}
                    >
                        DeepShield AI
                    </Typography>

                    <Typography
                        variant="h5"
                        color="text.secondary"
                        sx={{
                            mt: 2
                        }}
                    >
                        AI-Powered Facial Analysis Platform
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{
                            mt: 3,
                            maxWidth: 700,
                            mx: "auto",
                            lineHeight: 1.8
                        }}
                    >
                        Detect AI-generated facial images and verify
                        whether two images belong to the same person
                        using deep learning and facial embeddings.
                    </Typography>

                </Container>

            </Box>

            <Container
                maxWidth="lg"
                sx={{
                    pb: 10
                }}
            >

                <Typography
                    variant="h4"
                    fontWeight="bold"
                    textAlign="center"
                >
                    Choose an AI Capability
                </Typography>

                <Typography
                    textAlign="center"
                    color="text.secondary"
                    sx={{
                        mt: 1,
                        mb: 5
                    }}
                >
                    Select a tool to begin your analysis.
                </Typography>

                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                >

                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            display: "flex"
                        }}
                    >

                        <FeatureCard
                            title="Deepfake Detection"
                            description="Analyze an image using our hybrid deep learning model and determine whether it is real or AI-manipulated."
                            buttonText="Detect Deepfake"
                            path="/deepfake"
                        />

                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            display: "flex"
                        }}
                    >

                        <FeatureCard
                            title="Face Verification"
                            description="Compare two facial images using ArcFace embeddings and determine whether they belong to the same person."
                            buttonText="Compare Faces"
                            path="/compare"
                        />

                    </Grid>

                </Grid>

                <Box
                    sx={{
                        mt: 10,
                        textAlign: "center"
                    }}
                >

                    <VerifiedUserIcon
                        sx={{
                            fontSize: 45,
                            color: "#3B82F6"
                        }}
                    />

                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{
                            mt: 1
                        }}
                    >
                        Two AI Models. One Platform.
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{
                            mt: 2,
                            maxWidth: 700,
                            mx: "auto",
                            lineHeight: 1.8
                        }}
                    >
                        DeepShield AI combines a hybrid deepfake
                        detection model with ArcFace-based face
                        verification to provide complementary
                        facial analysis capabilities.
                    </Typography>

                </Box>

            </Container>

            <Footer />
        </>
    );
}