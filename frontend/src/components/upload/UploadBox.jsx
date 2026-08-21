import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import {
  Box,
  Typography,
  Button
} from "@mui/material";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function UploadBox({
  file,
  onSelect,
  onDetect
}) {

  const onDrop = useCallback((acceptedFiles) => {

    if (acceptedFiles.length > 0) {
      onSelect(acceptedFiles[0]);
    }

  }, [onSelect]);

  const {

    getRootProps,

    getInputProps,

    isDragActive

  } = useDropzone({

    onDrop,

    accept:{

      "image/*":[]

    },

    multiple:false

  });

  return (

    <Box

      {...getRootProps()}

      sx={{

        mt:6,

        maxWidth:700,

        mx:"auto",

        border:"2px dashed #3B82F6",

        borderRadius:4,

        background:isDragActive
        ? "#172554"
        : "#1E293B",

        textAlign:"center",

        p:6,

        transition:"0.3s",

        cursor:"pointer",

        "&:hover":{

          borderColor:"#60A5FA",

          transform:"scale(1.01)"

        }

      }}

    >

      <input {...getInputProps()} />

      <CloudUploadIcon

        sx={{

          fontSize:70,

          color:"#3B82F6"

        }}

      />

      <Typography

        variant="h5"

        sx={{mt:2}}

      >

        {

          isDragActive

          ?

          "Drop image here"

          :

          "Drag & Drop Image"

        }

      </Typography>

      <Typography

        sx={{

          mt:1,

          color:"#94A3B8"

        }}

      >

        PNG • JPG • JPEG

      </Typography>

      <Button

        variant="contained"

        sx={{

          mt:4

        }}

      >

        Browse Files

      </Button>

      {

        file && (

          <Button

            color="success"

            variant="contained"

            sx={{

              mt:2,

              ml:2

            }}

            onClick={(e)=>{

              e.stopPropagation();

              onDetect();

            }}

          >

            Detect Image

          </Button>

        )

      }

    </Box>

  )

}