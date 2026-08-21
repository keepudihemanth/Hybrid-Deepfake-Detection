import {
    Card,
    CardContent,
    Typography,
    Button,
    Box
} from "@mui/material";

import SecurityIcon from "@mui/icons-material/Security";
import FaceIcon from "@mui/icons-material/Face";

import { useNavigate } from "react-router-dom";

export default function FeatureCard({
    title,
    description,
    buttonText,
    path
}) {

    const navigate = useNavigate();

    const isFace = title === "Face Verification";

    return (
        <Card
            sx={{
                width: "100%",
                minHeight: 280,
                background: "#1E293B",
                border: "1px solid #334155",
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "0.25s",

                "&:hover": {
                    transform: "translateY(-5px)",
                    borderColor: "#3B82F6"
                }
            }}
        >

            <CardContent
                sx={{
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%"
                }}
            >

                <Box>

                    {isFace ? (

                        <FaceIcon
                            sx={{
                                fontSize: 45,
                                color: "#3B82F6"
                            }}
                        />

                    ) : (

                        <SecurityIcon
                            sx={{
                                fontSize: 45,
                                color: "#3B82F6"
                            }}
                        />

                    )}

                    <Typography
                        variant="h4"
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
                            mt: 2,
                            lineHeight: 1.7
                        }}
                    >
                        {description}
                    </Typography>

                </Box>

                <Button
                    variant="contained"
                    onClick={() => navigate(path)}
                    sx={{
                        mt: 4,
                        alignSelf: "flex-start",
                        borderRadius: 2
                    }}
                >
                    {buttonText}
                </Button>

            </CardContent>

        </Card>
    );
}