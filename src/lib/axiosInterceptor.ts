import api from "./api";

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve();
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then(() => api(originalRequest))
        .catch((err) => Promise.reject(err));
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      await api.post("/auth/refresh");
      processQueue();
      return api(originalRequest);
    } catch (err) {
      processQueue(err);

      // 🔥 HARD LOGOUT
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }

      return Promise.reject(err);
    } finally {
      isRefreshing = false;
    }
  }
);

export default api;
