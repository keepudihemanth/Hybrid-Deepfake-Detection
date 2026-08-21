import {
    Box,
    CircularProgress,
    Typography
} from "@mui/material";

export default function ConfidenceCircle({ confidence }) {

    return (

        <Box

            sx={{

                position: "relative",

                display: "inline-flex",

                justifyContent: "center",

                alignItems: "center",

                mt: 3

            }}

        >

            <CircularProgress

                variant="determinate"

                value={100}

                size={150}

                thickness={4}

                sx={{

                    color: "#334155",

                    position: "absolute"

                }}

            />

            <CircularProgress

                variant="determinate"

                value={confidence}

                size={150}

                thickness={4}

                color="primary"

            />

            <Box

                sx={{

                    position: "absolute",

                    display: "flex",

                    flexDirection: "column",

                    alignItems: "center"

                }}

            >

                <Typography

                    variant="h4"

                    fontWeight="bold"

                >

                    {confidence.toFixed(1)}%

                </Typography>

                <Typography

                    variant="body2"

                    color="gray"

                >

                    Confidence

                </Typography>

            </Box>

        </Box>

    );

}