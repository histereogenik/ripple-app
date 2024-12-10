import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../services/apiSlice";
import * as S from "./styles";
import { InputField, Button, Form } from "../../ui";
import logoImg from "../../assets/ripplelogoorange-removebg.png";

interface RegistrationError {
    data?: {
        username?: string[];
        email?: string[];
        password?: string[];
    };
}

const Registration = () => {
    const navigate = useNavigate()
    const [register, { isLoading }] = useRegisterMutation();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        password_confirm: "",
    });
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (formData.password !== formData.password_confirm) {
            setError("Passwords do not match.");
            return;
        }

        try {
            await register({
                username: formData.username,
                email: formData.email,
                password: formData.password,
                password_confirm: formData.password_confirm,
            }).unwrap();

            setSuccessMessage("Registration successful! Please, proceed to login.");
            setTimeout(() => navigate("/login"), 3000)
        } catch (err) {
            const errorResponse = err as RegistrationError;

            if (errorResponse?.data?.username?.[0]) {
                setError(errorResponse.data.username[0]);
            } else if (errorResponse?.data?.email?.[0]) {
                setError(errorResponse.data.email[0]);
            } else {
                setError("Registration failed. Please try again.");
            }
        }
    };

    return (
        <S.PageContainer>
            <S.Logo src={logoImg} alt="Ripple Logo" />
            {successMessage ? (
                <S.SuccessMessage>{successMessage}</S.SuccessMessage>
            ) : (
                <Form onSubmit={handleSubmit}>
                    <S.Title>Create Your Account</S.Title>
                    <InputField
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                    />
                    <InputField
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <InputField
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                    <InputField
                        type="password"
                        name="password_confirm"
                        placeholder="Confirm Password"
                        value={formData.password_confirm}
                        onChange={handleInputChange}
                        required
                    />
                    {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? "Registering..." : "Register"}
                    </Button>
                    <S.LoginLink onClick={() => navigate("/login")}>
                        Already have an account? Login here!
                    </S.LoginLink>
                </Form>
            )}
        </S.PageContainer>
    );
};

export default Registration;
