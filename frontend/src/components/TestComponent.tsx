import { useState, useEffect } from "react";
import axios from "../api/axios";

const TestComponent = () => {
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        const fetchTestMessage = async () => {
            try {
                const response = await axios.get("/auth/test/");
                setMessage(response.data.message);
            } catch (error) {
                console.error("Error fetching the test endpoint:", error);
                setMessage("Failed to fetch test message.");
            }
        };

        fetchTestMessage();
    }, []);

    return (
        <div>
            <h1>Test Endpoint</h1>
            <p>{message || "Loading..."}</p>
        </div>
    );
};

export default TestComponent;
