import {
    Card,
    CardContent,
    Typography,
    Button,
    Box
} from "@mui/material";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function CompareUpload({
    title,
    image,
    onSelect
}) {

    const handleChange = (event) => {

        const file = event.target.files?.[0];

        if (!file) return;

        onSelect(file);

    };

    return (

        <Card
            sx={{
                width: "100%",
                background: "#1E293B",
                borderRadius: 4,
                border: "1px solid #334155",
                minHeight: 350
            }}
        >

            <CardContent>

                <Typography
                    variant="h5"
                    fontWeight="bold"
                >
                    {title}
                </Typography>

                <Box
                    sx={{
                        mt: 3,
                        height: 210,
                        border: "2px dashed #475569",
                        borderRadius: 3,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden"
                    }}
                >

                    {image ? (

                        <img
                            src={URL.createObjectURL(image)}
                            alt={title}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain"
                            }}
                        />

                    ) : (

                        <Box
                            sx={{
                                textAlign: "center"
                            }}
                        >

                            <CloudUploadIcon
                                sx={{
                                    fontSize: 50,
                                    color: "#64748B"
                                }}
                            />

                            <Typography
                                color="text.secondary"
                            >
                                Upload an image
                            </Typography>

                        </Box>

                    )}

                </Box>

                <Button
                    variant="outlined"
                    component="label"
                    fullWidth
                    startIcon={<CloudUploadIcon />}
                    sx={{
                        mt: 3,
                        py: 1.2,
                        borderRadius: 3
                    }}
                >

                    {image
                        ? "Change Image"
                        : "Browse Image"}

                    <input
                        hidden
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        onChange={handleChange}
                    />

                </Button>

                {image && (

                    <Typography
                        color="text.secondary"
                        sx={{
                            mt: 2,
                            fontSize: 13,
                            textAlign: "center"
                        }}
                    >
                        {image.name}
                    </Typography>

                )}

            </CardContent>

        </Card>

    );

}