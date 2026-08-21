from flask import Blueprint, request, jsonify

from services.compare_service import compare_service

import cv2
import numpy as np


compare_bp = Blueprint(
    "compare",
    __name__
)


@compare_bp.route(
    "/compare",
    methods=["POST"]
)
def compare():

    if "image1" not in request.files:

        return jsonify({
            "success": False,
            "message": "First image is missing."
        }), 400

    if "image2" not in request.files:

        return jsonify({
            "success": False,
            "message": "Second image is missing."
        }), 400

    file1 = request.files["image1"]
    file2 = request.files["image2"]

    if file1.filename == "":
        return jsonify({
            "success": False,
            "message": "First image was not selected."
        }), 400

    if file2.filename == "":
        return jsonify({
            "success": False,
            "message": "Second image was not selected."
        }), 400

    try:

        image1 = cv2.imdecode(
            np.frombuffer(
                file1.read(),
                np.uint8
            ),
            cv2.IMREAD_COLOR
        )

        image2 = cv2.imdecode(
            np.frombuffer(
                file2.read(),
                np.uint8
            ),
            cv2.IMREAD_COLOR
        )

        if image1 is None:

            return jsonify({
                "success": False,
                "message": "Unable to read the first image."
            }), 400

        if image2 is None:

            return jsonify({
                "success": False,
                "message": "Unable to read the second image."
            }), 400

        result = compare_service.compare(
            image1,
            image2
        )

        return jsonify(result)

    except Exception as e:

        print("[ERROR] Face comparison:", e)

        return jsonify({
            "success": False,
            "message": "Face comparison failed."
        }), 500