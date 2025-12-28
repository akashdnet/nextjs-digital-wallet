import { BASE_URL } from "./data";

export const getDashboardOverview = async () => {
    try {
        const response = await fetch(`${BASE_URL}/admin/dashboard-overview`, {
            method: "GET",
        });
        return await response.json();
    } catch (error) {
        console.error("Dashboard overview error:", error);
        return { success: false, message: "Failed to fetch dashboard data" };
    }
};

export const updateWalletStatus = async (userId: string, data: { status: string }) => {
    try {
        const response = await fetch(`${BASE_URL}/admin/update-wallet-status/${userId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error("Update wallet status error:", error);
        return { success: false, message: "Update failed" };
    }
};

export const updateUserProfileByAdmin = async (userId: string, data: any) => {
    try {
        const response = await fetch(`${BASE_URL}/admin/update-user-profile/${userId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error("Update user profile by admin error:", error);
        return { success: false, message: "Update failed" };
    }
};

export const deleteUser = async (userId: string) => {
    try {
        const response = await fetch(`${BASE_URL}/admin/delete-user/${userId}`, {
            method: "DELETE",
        });
        return await response.json();
    } catch (error) {
        console.error("Delete user error:", error);
        return { success: false, message: "Deletion failed" };
    }
};

export const getUserList = async (page = 1, limit = 10) => {
    try {
        const response = await fetch(`${BASE_URL}/admin/user-list?page=${page}&limit=${limit}`, {
            method: "GET",
        });
        return await response.json();
    } catch (error) {
        console.error("Get user list error:", error);
        return { success: false, message: "Failed to fetch users" };
    }
};

export const getAgentList = async (page = 1, limit = 10) => {
    try {
        const response = await fetch(`${BASE_URL}/admin/agent-list?page=${page}&limit=${limit}`, {
            method: "GET",
        });
        return await response.json();
    } catch (error) {
        console.error("Get agent list error:", error);
        return { success: false, message: "Failed to fetch agents" };
    }
};

export const getPendingUsers = async () => {
    try {
        const response = await fetch(`${BASE_URL}/admin/pending-users`, {
            method: "GET",
        });
        return await response.json();
    } catch (error) {
        console.error("Get pending users error:", error);
        return { success: false, message: "Failed to fetch pending users" };
    }
};

export const getPendingAgents = async () => {
    try {
        const response = await fetch(`${BASE_URL}/admin/pending-agents`, {
            method: "GET",
        });
        return await response.json();
    } catch (error) {
        console.error("Get pending agents error:", error);
        return { success: false, message: "Failed to fetch pending agents" };
    }
};
