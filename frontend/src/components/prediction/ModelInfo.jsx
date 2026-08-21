import {
    Card,
    CardContent,
    Typography,
    Stack,
    Chip
} from "@mui/material";

import MemoryIcon from "@mui/icons-material/Memory";

export default function ModelInfo({ result }) {

    return (

        <Card

            sx={{

                mt: 2,

                background: "#0F172A",

                borderRadius: 3,

                border: "1px solid #334155"

            }}

        >

            <CardContent>

                <Stack

                    direction="row"

                    spacing={1}

                    alignItems="center"

                >

                    <MemoryIcon color="primary" />

                    <Typography variant="h6">

                        Model Information

                    </Typography>

                </Stack>

                <Typography sx={{ mt: 3 }}>

                    Architecture

                </Typography>

                <Chip

                    label={result.model}

                    color="primary"

                    sx={{ mt: 1 }}

                />

                <Typography sx={{ mt: 3 }}>

                    Framework

                </Typography>

                <Chip

                    label={result.framework}

                    color="success"

                    sx={{ mt: 1 }}

                />

                <Typography sx={{ mt: 3 }}>

                    Version

                </Typography>

                <Chip

                    label={result.version}

                    color="warning"

                    sx={{ mt: 1 }}

                />

            </CardContent>

        </Card>

    );

}