import { useState } from "react";
import { useLoginMutation } from "../../services/apiSlice";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const Login = () => {
    const navigate = useNavigate();
    const [login, { isLoading }] = useLoginMutation();
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            await login(formData).unwrap();
            navigate("/newsfeed");
        } catch (error) {
            console.error("Login error:", error)
            setError("Invalid username or password. Please try again.");
        }
    };

    return (
        <S.LoginContainer>
            <S.LoginForm onSubmit={handleSubmit}>
                <S.LoginTitle>Welcome Back!</S.LoginTitle>
                <S.InputField
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                />
                <S.InputField
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
                {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
                <S.SubmitButton type="submit" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                </S.SubmitButton>
                <S.RegisterLink onClick={() => navigate("/register")}>
                    Don’t have an account? Register now!
                </S.RegisterLink>
            </S.LoginForm>
        </S.LoginContainer>
    );
};

export default Login;
