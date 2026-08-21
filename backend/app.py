from flask import Flask
from flask_cors import CORS

from routes.health import health_bp
from routes.predict import predict_bp
from routes.compare import compare_bp


app = Flask(__name__)


# -------------------------
# CORS
# -------------------------

CORS(
    app,
    resources={
        r"/api/*": {
            "origins": "*"
        }
    }
)


# -------------------------
# Routes
# -------------------------

app.register_blueprint(
    predict_bp,
    url_prefix="/api"
)

app.register_blueprint(
    health_bp,
    url_prefix="/api"
)

app.register_blueprint(
    compare_bp,
    url_prefix="/api"
)


# -------------------------
# Home
# -------------------------

@app.route("/")
def home():

    return {
        "message": "Hybrid Deepfake Detection API",
        "status": "Running"
    }


# -------------------------
# Run Server
# -------------------------

if __name__ == "__main__":

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )