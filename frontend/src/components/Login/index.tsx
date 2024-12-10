import { useState } from "react";
import { useLoginMutation } from "../../services/apiSlice";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { InputField, Button, Form } from "../../ui";
import { setCredentials } from "../../store/reducers/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
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
            const result = await login(formData).unwrap();
            dispatch(setCredentials({ access: result.access, refresh: result.refresh }));
            navigate("/newsfeed");
        } catch (error) {
            console.error("Login error:", error);
            setError("Invalid username or password. Please try again.");
        }
    };

    return (
        <S.LoginContainer>
            <Form onSubmit={handleSubmit}>
                <S.LoginTitle>Welcome Back!</S.LoginTitle>
                <InputField
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
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
                {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                </Button>
                <S.RegisterLink onClick={() => navigate("/register")}>
                    Don’t have an account? Register now!
                </S.RegisterLink>
            </Form>
        </S.LoginContainer>
    );
};

export default Login;
