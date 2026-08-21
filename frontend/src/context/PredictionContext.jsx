import { createContext, useContext, useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

const PredictionContext = createContext();

export function PredictionProvider({ children }) {

    const [file, setFile] = useState(null);

    const [loading, setLoading] = useState(false);

    const [result, setResult] = useState(null);

    const [error, setError] = useState(null);

    const predict = async () => {

        if (!file) {

            toast.error("Please select an image.");

            return;
        }

        try {

            setLoading(true);

            setError(null);

            setResult(null);

            const formData = new FormData();

            formData.append("image", file);

            const response = await api.post(
                "/predict",
                formData
            );

            const data = response.data;

            if (!data.success) {

                setError(
                    data.message ||
                    "Unable to analyze this image."
                );

                setResult({
                    success: false,
                    message:
                        data.message ||
                        "Unable to analyze this image."
                });

                toast.error(
                    data.message ||
                    "Unable to analyze this image."
                );

                return;
            }

            setResult(data);

            toast.success("Prediction Completed!");

        } catch (err) {

            console.error(err);

            const message =
                err.response?.data?.message ||
                "Prediction failed. Please try again.";

            setError(message);

            setResult({
                success: false,
                message
            });

            toast.error(message);

        } finally {

            setLoading(false);

        }
    };

    const selectFile = (selectedFile) => {

        setFile(selectedFile);

        setResult(null);

        setError(null);

        toast.success("Image Selected");

    };

    const clear = () => {

        setFile(null);

        setResult(null);

        setError(null);

    };

    return (

        <PredictionContext.Provider
            value={{
                file,
                loading,
                result,
                error,
                predict,
                selectFile,
                clear
            }}
        >

            {children}

        </PredictionContext.Provider>

    );
}

export function usePrediction() {

    return useContext(PredictionContext);

}