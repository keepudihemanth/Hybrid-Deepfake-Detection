import {
    AppBar,
    Toolbar,
    Typography,
    Button
} from "@mui/material";

import SecurityIcon from "@mui/icons-material/Security";

import { Link } from "react-router-dom";

export default function Navbar() {

    return (

        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                background: "#111827"
            }}
        >

            <Toolbar>

                <SecurityIcon
                    sx={{
                        mr: 1,
                        color: "#3B82F6"
                    }}
                />

                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        fontWeight: "bold"
                    }}
                >

                    DeepShield AI

                </Typography>

                <Button
                    color="inherit"
                    component={Link}
                    to="/"
                >
                    Home
                </Button>

                <Button
                    color="inherit"
                    component={Link}
                    to="/deepfake"
                >
                    Detect Deepfake
                </Button>

                <Button
                    color="inherit"
                    component={Link}
                    to="/compare"
                >
                    Compare Faces
                </Button>

                <Button
                    color="inherit"
                    component={Link}
                    to="/about"
                >
                    About
                </Button>

            </Toolbar>

        </AppBar>

    );

}