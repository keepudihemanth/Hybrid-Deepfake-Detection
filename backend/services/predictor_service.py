from core.predictor import Predictor


class PredictorService:

    def __init__(self):

        self.predictor = Predictor()

    def predict(self, image):

        return self.predictor.predict(image)


predictor_service = PredictorService()