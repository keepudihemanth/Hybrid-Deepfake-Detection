from PIL import Image
import requests
from io import BytesIO


class ImageLoader:

    @staticmethod
    def load(source):

        # URL
        if isinstance(source, str) and source.startswith("http"):

            response = requests.get(source, timeout=20)
            response.raise_for_status()

            image = Image.open(
                BytesIO(response.content)
            ).convert("RGB")

            return image

        # Local Path
        elif isinstance(source, str):

            return Image.open(source).convert("RGB")

        # Uploaded File
        else:

            return Image.open(source).convert("RGB")