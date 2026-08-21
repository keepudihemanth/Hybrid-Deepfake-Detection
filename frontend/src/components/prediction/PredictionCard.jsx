import {
    Card,
    CardContent,
    Typography,
    LinearProgress,
    Divider,
    Stack,
    Chip,
    Box
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

import ConfidenceCircle from "./ConfidenceCircle";
import ModelInfo from "./ModelInfo";

export default function PredictionCard({ result }) {

    if (!result) {

        return (

            <Card
                sx={{
                    height: "100%",
                    minHeight: 550,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#1E293B",
                    borderRadius: 4
                }}
            >

                <Typography
                    color="gray"
                    variant="h6"
                >
                    Upload an image to begin AI analysis
                </Typography>

            </Card>

        );

    }

    // ----------------------------------------
    // Validation / Error Result
    // ----------------------------------------

    if (!result.success) {

        return (

            <Card
                sx={{
                    height: "100%",
                    minHeight: 550,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#1E293B",
                    borderRadius: 4,
                    border: "1px solid #334155"
                }}
            >

                <CardContent
                    sx={{
                        textAlign: "center",
                        maxWidth: 500
                    }}
                >

                    <WarningAmberIcon
                        sx={{
                            fontSize: 65,
                            color: "warning.main",
                            mb: 2
                        }}
                    />

                    <Typography
                        variant="h5"
                        fontWeight="bold"
                    >
                        Unable to Analyze Image
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{
                            mt: 2,
                            lineHeight: 1.7
                        }}
                    >
                        {result.message}
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{
                            mt: 3,
                            fontSize: 14
                        }}
                    >
                        Please upload an image containing one
                        clear human face.
                    </Typography>

                </CardContent>

            </Card>

        );

    }

    // ----------------------------------------
    // Successful Prediction
    // ----------------------------------------

    const isReal = result.prediction === "Real";

    return (

        <Card
            sx={{
                background: "#1E293B",
                borderRadius: 4,
                border: "1px solid #334155",
                height: "100%"
            }}
        >

            <CardContent>

                <Typography
                    variant="h4"
                    fontWeight="bold"
                >
                    AI Analysis
                </Typography>

                <Divider
                    sx={{
                        my: 3
                    }}
                />

                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                >

                    {isReal ? (

                        <CheckCircleIcon
                            color="success"
                            fontSize="large"
                        />

                    ) : (

                        <ErrorIcon
                            color="error"
                            fontSize="large"
                        />

                    )}

                    <Typography
                        variant="h4"
                        fontWeight="bold"
                    >
                        {result.prediction}
                    </Typography>

                    <Chip
                        label={
                            isReal
                                ? "Authentic"
                                : "Manipulated"
                        }
                        color={
                            isReal
                                ? "success"
                                : "error"
                        }
                    />

                </Stack>

                {/* Confidence */}

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 5
                    }}
                >

                    <ConfidenceCircle
                        confidence={result.confidence}
                    />

                </Box>

                <Divider
                    sx={{
                        my: 4
                    }}
                />

                <Typography variant="h6">
                    Probability Analysis
                </Typography>

                <Typography
                    sx={{
                        mt: 3
                    }}
                >
                    Real Probability
                </Typography>

                <LinearProgress
                    variant="determinate"
                    value={result.real_probability}
                    color="success"
                    sx={{
                        mt: 1,
                        height: 10,
                        borderRadius: 5
                    }}
                />

                <Typography
                    sx={{
                        mt: 1
                    }}
                >
                    {result.real_probability}%
                </Typography>

                <Typography
                    sx={{
                        mt: 3
                    }}
                >
                    Fake Probability
                </Typography>

                <LinearProgress
                    variant="determinate"
                    value={result.fake_probability}
                    color="error"
                    sx={{
                        mt: 1,
                        height: 10,
                        borderRadius: 5
                    }}
                />

                <Typography
                    sx={{
                        mt: 1
                    }}
                >
                    {result.fake_probability}%
                </Typography>

                <Divider
                    sx={{
                        my: 4
                    }}
                />

                <ModelInfo
                    result={result}
                />

            </CardContent>

        </Card>

    );

}