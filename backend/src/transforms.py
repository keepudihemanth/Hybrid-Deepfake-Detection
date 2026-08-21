import cv2
import numpy as np
from PIL import Image


class FrequencyTransform:

    def __call__(self, image):

        image = np.array(image)

        gray = cv2.cvtColor(
            image,
            cv2.COLOR_RGB2GRAY
        )

        gray = np.float32(gray) / 255.0

        fft = np.fft.fftshift(np.fft.fft2(gray))
        fft = np.log1p(np.abs(fft))
        fft = cv2.normalize(
            fft,
            None,
            0,
            1,
            cv2.NORM_MINMAX
        )

        dct = cv2.dct(gray)
        dct = np.log1p(np.abs(dct))
        dct = cv2.normalize(
            dct,
            None,
            0,
            1,
            cv2.NORM_MINMAX
        )

        sobel = cv2.Sobel(
            gray,
            cv2.CV_32F,
            1,
            1
        )

        sobel = np.abs(sobel)

        sobel = cv2.normalize(
            sobel,
            None,
            0,
            1,
            cv2.NORM_MINMAX
        )

        frequency = np.stack(
            [fft, dct, sobel],
            axis=-1
        )

        return Image.fromarray(
            (frequency * 255).astype(np.uint8)
        )