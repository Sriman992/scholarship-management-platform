import API from "./api";
import { jwtDecode } from "jwt-decode";

export const loginUser = (data) =>
  API.post("/auth/login", data);

export const registerUser = (data) =>
  API.post("/auth/register", data);

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("email");
};

export const getAuthSession = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  try {
    const decoded = jwtDecode(token);
    const nowInSeconds = Date.now() / 1000;

    if (!decoded?.sub || !decoded?.role || !decoded?.exp || decoded.exp <= nowInSeconds) {
      logoutUser();
      return null;
    }

    const role = decoded.role;
    const email = decoded.sub;

    localStorage.setItem("role", role);
    localStorage.setItem("email", email);

    return { token, role, email };
  } catch {
    logoutUser();
    return null;
  }
};

export const isAuthenticated = () => {
  return !!getAuthSession();
};

export const getUserRole = () => {
  return getAuthSession()?.role ?? null;
};

export const getUserEmail = () => {
  return getAuthSession()?.email ?? null;
};
