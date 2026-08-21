import { Box, Typography } from "@mui/material";

export default function Footer() {

    return (

        <Box

            sx={{

                mt: 10,

                py: 4,

                textAlign: "center",

                borderTop: "1px solid #334155"

            }}

        >

            <Typography>

                DeepShield AI

            </Typography>

            <Typography

                sx={{

                    color: "#94A3B8"

                }}

            >

                Built with React • Flask • PyTorch

            </Typography>

        </Box>

    );

}