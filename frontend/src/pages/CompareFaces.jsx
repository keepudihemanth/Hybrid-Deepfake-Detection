import { useState } from "react";

import {
    Container,
    Typography,
    Button,
    CircularProgress,
    Alert,
    Box
} from "@mui/material";

import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import CompareUpload from "../components/comparison/CompareUpload";
import CompareResult from "../components/comparison/CompareResult";

import api from "../services/api";

export default function CompareFaces() {

    const [original, setOriginal] = useState(null);
    const [suspected, setSuspected] = useState(null);

    const [result, setResult] = useState(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const compare = async () => {

        if (!original || !suspected) {
            setError("Please select both images.");
            return;
        }

        try {

            setLoading(true);
            setError(null);
            setResult(null);

            const formData = new FormData();

            formData.append("image1", original);
            formData.append("image2", suspected);

            const response = await api.post(
                "/compare",
                formData
            );

            if (!response.data.success) {

                setError(
                    response.data.message ||
                    "Face verification failed."
                );

                return;
            }

            setResult(response.data);

        } catch (err) {

            console.error(err);

            setError(
                err.response?.data?.message ||
                "Unable to connect to the face verification service."
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <>
            <Navbar />

            <Container
                maxWidth="lg"
                sx={{
                    py: {
                        xs: 5,
                        md: 8
                    }
                }}
            >

                {/* Header */}

                <Box
                    sx={{
                        width: "100%",
                        textAlign: "center",
                        mb: 6
                    }}
                >

                    <Typography
                        variant="h3"
                        fontWeight="bold"
                    >
                        Face Verification
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{
                            mt: 2,
                            maxWidth: 700,
                            mx: "auto",
                            lineHeight: 1.7
                        }}
                    >
                        Compare two facial images using
                        ArcFace embeddings and determine whether
                        they belong to the same person.
                    </Typography>

                </Box>

                {/* Upload Area */}

                <Box
                    sx={{
                        width: "100%",
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "1fr 1fr"
                        },
                        gap: 4
                    }}
                >

                    <Box
                        sx={{
                            width: "100%"
                        }}
                    >

                        <CompareUpload
                            title="Original Image"
                            image={original}
                            onSelect={setOriginal}
                        />

                    </Box>

                    <Box
                        sx={{
                            width: "100%"
                        }}
                    >

                        <CompareUpload
                            title="Comparison Image"
                            image={suspected}
                            onSelect={setSuspected}
                        />

                    </Box>

                </Box>

                {/* Error */}

                {error && (

                    <Alert
                        severity="error"
                        sx={{
                            mt: 4
                        }}
                    >
                        {error}
                    </Alert>

                )}

                {/* Compare Button */}

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                >

                    <Button
                        variant="contained"
                        size="large"
                        startIcon={
                            loading
                                ? null
                                : <CompareArrowsIcon />
                        }
                        disabled={
                            !original ||
                            !suspected ||
                            loading
                        }
                        onClick={compare}
                        sx={{
                            mt: 5,
                            py: 1.5,
                            px: 6,
                            borderRadius: 3
                        }}
                    >

                        {loading ? (

                            <>
                                <CircularProgress
                                    size={22}
                                    color="inherit"
                                    sx={{
                                        mr: 2
                                    }}
                                />

                                Analyzing Faces...
                            </>

                        ) : (

                            "Compare Faces"

                        )}

                    </Button>

                </Box>

                {/* Result */}

                <Box
                    sx={{
                        width: "100%"
                    }}
                >

                    <CompareResult
                        result={result}
                    />

                </Box>

            </Container>

            <Footer />
        </>
    );
}