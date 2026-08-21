import {
    Container,
    Typography,
    Box
} from "@mui/material";

import SecurityIcon from "@mui/icons-material/Security";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import UploadBox from "../components/upload/UploadBox";
import ImagePreview from "../components/upload/ImagePreview";
import PredictionCard from "../components/prediction/PredictionCard";
import Loader from "../components/common/Loader";

import { usePrediction } from "../context/PredictionContext";

export default function Deepfake() {

    const {
        file,
        selectFile,
        loading,
        result,
        predict
    } = usePrediction();

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

                    <SecurityIcon
                        sx={{
                            fontSize: 52,
                            color: "#3B82F6"
                        }}
                    />

                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        sx={{
                            mt: 1
                        }}
                    >
                        Deepfake Detection
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
                        Upload a facial image and our hybrid deep
                        learning model will analyze it for signs
                        of AI manipulation.
                    </Typography>

                </Box>

                {/* Main Workspace */}

                <Box
                    sx={{
                        width: "100%",
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "1fr 1fr"
                        },
                        gap: 4,
                        alignItems: "stretch"
                    }}
                >

                    {/* Upload Section */}

                    <Box
                        sx={{
                            width: "100%"
                        }}
                    >

                        <UploadBox
                            file={file}
                            onSelect={selectFile}
                            onDetect={predict}
                        />

                        <Box sx={{ mt: 3 }}>
                            <ImagePreview
                                file={file}
                            />
                        </Box>

                    </Box>

                    {/* Prediction Section */}

                    <Box
                        sx={{
                            width: "100%",
                            minWidth: 0
                        }}
                    >

                        {loading ? (

                            <Box
                                sx={{
                                    width: "100%",
                                    minHeight: 350,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <Loader />
                            </Box>

                        ) : (

                            <PredictionCard
                                result={result}
                            />

                        )}

                    </Box>

                </Box>

            </Container>

            <Footer />
        </>
    );
}