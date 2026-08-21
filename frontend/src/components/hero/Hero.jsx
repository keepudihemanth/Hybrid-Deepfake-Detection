import { Box, Typography, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { motion } from "framer-motion";

export default function Hero() {

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 60
            }}

            animate={{
                opacity: 1,
                y: 0
            }}

            transition={{
                duration: 0.8
            }}

        >

            <Box

                sx={{

                    textAlign: "center",

                    mt: 5,

                    px: 2

                }}

            >

                <Typography

                    variant="h3"

                    sx={{
                        fontWeight: "bold"
                    }}

                >

                    Detect AI Manipulated

                    <br />

                    Facial Images

                </Typography>

                <Typography

                    sx={{

                        mt: 3,

                        color: "#94A3B8",

                        maxWidth: 700,

                        mx: "auto",

                        fontSize: 18

                    }}

                >

                    DeepShield AI combines EfficientNet with
                    Frequency Domain Analysis to accurately classify
                    facial images as <b>Real</b> or <b>Fake</b>.

                </Typography>

                <Button

                    variant="contained"

                    size="large"

                    startIcon={<CloudUploadIcon />}

                    sx={{

                        mt: 5,

                        px: 5,

                        py: 1.5,

                        borderRadius: 3,

                        fontSize: 18

                    }}

                >

                    Upload Image

                </Button>

            </Box>

        </motion.div>

    );

}