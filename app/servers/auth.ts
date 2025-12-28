import { BASE_URL } from "./data";

export const login = async (credentials: any) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
            credentials: 'include',
        });
        return await response.json();
    } catch (error) {
        console.error("Login error:", error);
        return { success: false, message: "Login failed" };
    }
};

export const logout = async () => {
    try {
        const response = await fetch(`${BASE_URL}/auth/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return await response.json();
    } catch (error) {
        console.error("Logout error:", error);
        return { success: false, message: "Logout failed" };
    }
};

export const refreshToken = async () => {
    try {
        const response = await fetch(`${BASE_URL}/auth/refresh-token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return await response.json();
    } catch (error) {
        console.error("Refresh token error:", error);
        return { success: false, message: "Refresh token failed" };
    }
};