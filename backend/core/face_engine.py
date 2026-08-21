from insightface.app import FaceAnalysis


class FaceEngine:

    def __init__(self):

        print("[INFO] Initializing InsightFace...")

        self.model = FaceAnalysis(
            name="buffalo_l"
        )

        self.model.prepare(
            ctx_id=-1,
            det_size=(640, 640)
        )

        print("[INFO] InsightFace Ready")

    def get_faces(self, image):

        return self.model.get(image)


face_engine = FaceEngine()