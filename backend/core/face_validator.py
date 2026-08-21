import numpy as np

from core.face_engine import face_engine


class FaceValidator:

    def validate(self, image):

        if image is None:

            return {
                "valid": False,
                "message": "Unable to read the image."
            }

        # Convert PIL Image to NumPy array
        if not isinstance(image, np.ndarray):

            image = np.array(image)

        # Convert RGB to BGR for InsightFace/OpenCV
        if len(image.shape) == 3:

            image = image[:, :, ::-1].copy()

        faces = face_engine.get_faces(image)

        if len(faces) == 0:

            return {
                "valid": False,
                "message": (
                    "No face detected. Please upload "
                    "an image containing a clear human face."
                )
            }

        if len(faces) > 1:

            return {
                "valid": False,
                "message": (
                    "Multiple faces detected. Please "
                    "upload an image containing one face."
                )
            }

        return {
            "valid": True,
            "message": "Face detected."
        }


face_validator = FaceValidator()