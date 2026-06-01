import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api",
  withCredentials: true,
});

export const productsApi = {
  getProducts: async (categoryId) => {
    const response = await api.get("/products", {
      params: { categoryId },
    });
    return response.data;
  },
  getProduct: async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },
  getBestSellers: async (limit = 4) => {
    const response = await api.get("/products/best-sellers", {
      params: { limit },
    });
    return response.data;
  },
  createProduct: async (productData) => {
    const response = await api.post("/products", productData);
    return response.data;
  },
  updateProduct: async (id, productData) => {
    const response = await api.patch(`products/${id}`, productData);
    return response.data;
  },
  deleteProduct: async (id) => {
    const response = await api.delete(`products/${id}`);
    return response.data;
  },
};

export const ordersApi = {};

export const cartApi = {};

export const categoriesApi = {
  getCategories: async () => {
    const response = await api.get("/categories");
    return response.data;
  },
};

export const authApi = {
  register: async (data) => {
    const response = await api.post("/auth/register", data);
    return response.data;
  },
  signIn: async (data) => {
    const response = await api.post("/auth/sign-in", data);
    return response.data;
  },
};

export default api;
