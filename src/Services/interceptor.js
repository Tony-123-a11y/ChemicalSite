import axios from "axios";

// Create Axios instance
const apiClient = axios.create({
  // baseURL: "http://localhost:3040/api",
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Attach token to every request
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      if (import.meta.env.DEV) {
        console.log("✅ Token attached to request");
      }
    }
    return config;
  },
  (error) => {
    console.error("❌ Request error:", error);
    return Promise.reject(error);
  }
);

// ✅ Handle global errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;

      // Token expired or unauthorized
      if (status === 401) {
        if (import.meta.env.DEV) {
          console.warn("⚠️ Unauthorized - Redirecting to login...");
        }
        localStorage.clear();
        window.location.replace("/login");
      }
    } else {
      console.error("❌ Network or server error:", error);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
