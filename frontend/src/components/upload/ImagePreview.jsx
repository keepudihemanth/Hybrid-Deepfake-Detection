import {

    Card,

    CardContent,

    Typography,

    Box

} from "@mui/material";

export default function ImagePreview({file}){

    if(!file) return null;

    return(

        <Card

            sx={{

                mt:5,

                maxWidth:750,

                mx:"auto",

                background:"#1E293B"

            }}

        >

            <CardContent>

                <Typography

                    variant="h5"

                    gutterBottom

                >

                    Selected Image

                </Typography>

                <Box

                    sx={{

                        textAlign:"center"

                    }}

                >

                    <img

                        src={URL.createObjectURL(file)}

                        alt="preview"

                        style={{

                            width:"100%",

                            maxHeight:400,

                            objectFit:"contain",

                            borderRadius:10

                        }}

                    />

                </Box>

                <Typography sx={{mt:3}}>

                    Name :

                    <strong>

                        {file.name}

                    </strong>

                </Typography>

                <Typography>

                    Size :

                    <strong>

                        {(file.size/1024/1024).toFixed(2)} MB

                    </strong>

                </Typography>

                <Typography>

                    Type :

                    <strong>

                        {file.type}

                    </strong>

                </Typography>

            </CardContent>

        </Card>

    )

}