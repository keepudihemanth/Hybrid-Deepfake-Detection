from sklearn.metrics.pairwise import cosine_similarity

from core.face_engine import face_engine


class FaceVerifier:

    def verify(self, image1, image2):

        faces1 = face_engine.get_faces(image1)
        faces2 = face_engine.get_faces(image2)

        if len(faces1) == 0:

            return {
                "success": False,
                "message": "No face detected in the first image."
            }

        if len(faces2) == 0:

            return {
                "success": False,
                "message": "No face detected in the second image."
            }

        if len(faces1) > 1:

            return {
                "success": False,
                "message": (
                    "Multiple faces detected in the first image. "
                    "Please upload an image containing one face."
                )
            }

        if len(faces2) > 1:

            return {
                "success": False,
                "message": (
                    "Multiple faces detected in the second image. "
                    "Please upload an image containing one face."
                )
            }

        emb1 = faces1[0].embedding.reshape(1, -1)

        emb2 = faces2[0].embedding.reshape(1, -1)

        similarity = cosine_similarity(
            emb1,
            emb2
        )[0][0]

        similarity = float(similarity)

        similarity_score = round(
            similarity * 100,
            2
        )

        return {
            "success": True,
            "similarity": similarity_score,
            "same_person": similarity > 0.55
        }