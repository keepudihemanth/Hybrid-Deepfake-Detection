from flask import Blueprint, jsonify, request

from services.predictor_service import predictor_service

predict_bp = Blueprint("predict", __name__)


@predict_bp.route("/predict", methods=["POST"])
def predict():

    print("\n========== Incoming Request ==========")
    print("Content-Type:", request.content_type)
    print("Files:", request.files.keys())
    print("Form:", request.form)
    print("======================================\n")

    if "image" not in request.files:

        return jsonify({
            "success": False,
            "message": "No image uploaded"
        }), 400

    image = request.files["image"]

    result = predictor_service.predict(image)

    return jsonify({
    "success": True,
    **result
}), 200