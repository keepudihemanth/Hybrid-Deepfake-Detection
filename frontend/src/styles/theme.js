import { createTheme } from "@mui/material/styles";

const theme = createTheme({

    palette: {

        mode: "dark",

        primary: {

            main: "#3B82F6"

        },

        secondary: {

            main: "#06B6D4"

        },

        success: {

            main: "#22C55E"

        },

        error: {

            main: "#EF4444"

        },

        background: {

            default: "#0F172A",

            paper: "#1E293B"

        }

    },

    typography: {

        fontFamily: "Inter, sans-serif",

        h2: {

            fontWeight: 700

        },

        h4: {

            fontWeight: 600

        }

    }

});

export default theme;