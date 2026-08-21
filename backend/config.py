from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent


# -------------------------
# Model
# -------------------------

MODEL_PATH = BASE_DIR / "models" / "best_model.pth"


# -------------------------
# Uploads
# -------------------------

UPLOAD_FOLDER = BASE_DIR / "uploads"

UPLOAD_FOLDER.mkdir(
    parents=True,
    exist_ok=True
)


# -------------------------
# Image Settings
# -------------------------

IMAGE_SIZE = 224

ALLOWED_EXTENSIONS = {
    "jpg",
    "jpeg",
    "png"
}