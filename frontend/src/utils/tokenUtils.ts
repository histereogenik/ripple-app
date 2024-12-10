import { jwtDecode } from "jwt-decode";

interface TokenPayload {
    exp: number
}

export const isTokenExpired = (token: string): boolean => {
    try {
        const decoded: TokenPayload = jwtDecode(token);
        return decoded.exp * 1000 < Date.now()
    } catch (error) {
        console.error("Failed to decode token:", error);
        return true
    }
};
