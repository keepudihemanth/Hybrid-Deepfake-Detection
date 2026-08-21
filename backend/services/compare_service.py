from core.face_verifier import FaceVerifier

verifier = FaceVerifier()


class CompareService:

    def compare(self, img1, img2):

        return verifier.verify(
            img1,
            img2
        )


compare_service = CompareService()