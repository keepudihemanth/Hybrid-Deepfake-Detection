import {

Box,

CircularProgress,

Typography

} from "@mui/material";

export default function Loader(){

    return(

        <Box

            sx={{

                textAlign:"center",

                mt:5

            }}

        >

            <CircularProgress size={60}/>

            <Typography

                sx={{

                    mt:3

                }}

            >

                AI is analyzing the image...

            </Typography>

            <Typography

                color="gray"

            >

                Extracting frequency-domain features

            </Typography>

        </Box>

    )

}