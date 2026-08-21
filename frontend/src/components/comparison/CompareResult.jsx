import {
    Card,
    CardContent,
    Typography,
    Chip,
    LinearProgress,
    Box
} from "@mui/material";

export default function CompareResult({ result }) {

    if (!result) {

        return (

            <Card
                sx={{
                    background: "#1E293B",
                    mt: 4,
                    minHeight: 220,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 4
                }}
            >

                <Typography color="text.secondary">
                    Compare two images to see the result.
                </Typography>

            </Card>

        );

    }

    if (!result.success) {

        return (

            <Card
                sx={{
                    background: "#1E293B",
                    mt: 4,
                    borderRadius: 4
                }}
            >

                <CardContent>

                    <Typography
                        color="error"
                        variant="h6"
                    >
                        Face Verification Failed
                    </Typography>

                    <Typography
                        sx={{
                            mt: 2
                        }}
                    >
                        {result.message}
                    </Typography>

                </CardContent>

            </Card>

        );

    }

    const similarity = Number(result.similarity);

    const samePerson = result.same_person;

    return (

        <Card
            sx={{
                background: "#1E293B",
                mt: 4,
                borderRadius: 4,
                border: "1px solid #334155"
            }}
        >

            <CardContent>

                <Typography
                    variant="h4"
                    fontWeight="bold"
                >
                    Face Verification Result
                </Typography>

                <Box sx={{ mt: 3 }}>

                    <Chip
                        label={
                            samePerson
                                ? "Same Person"
                                : "Different Person"
                        }
                        color={
                            samePerson
                                ? "success"
                                : "error"
                        }
                        sx={{
                            fontSize: 16,
                            px: 1,
                            py: 2.5
                        }}
                    />

                </Box>

                <Typography
                    variant="h6"
                    sx={{
                        mt: 4
                    }}
                >
                    Similarity Score
                </Typography>

                <LinearProgress
                    variant="determinate"
                    value={Math.max(
                        0,
                        Math.min(100, similarity)
                    )}
                    color={
                        samePerson
                            ? "success"
                            : "error"
                    }
                    sx={{
                        mt: 2,
                        height: 12,
                        borderRadius: 6
                    }}
                />

                <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{
                        mt: 2
                    }}
                >
                    {similarity.toFixed(2)}%
                </Typography>

                <Typography
                    color="text.secondary"
                    sx={{
                        mt: 1
                    }}
                >
                    ArcFace facial embedding similarity
                </Typography>

            </CardContent>

        </Card>

    );

}