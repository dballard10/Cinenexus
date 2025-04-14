// src/services/api.ts
import axios from "axios";
import { Media } from "@/entities/media";

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Update this with your backend URL

// Create axios instance with auth header
const api = axios.create({
  baseURL: VITE_API_BASE_URL,
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const favoritesApi = {
  getFavorites: async () => {
    const response = await api.get("/favorites");
    return response.data;
  },

  addFavorite: async (media: Media) => {
    const response = await api.post("/favorites", { media });
    return response.data;
  },

  //   // Remove from favorites
  //   removeFavorite: async (mediaId: number) => {
  //     await api.delete(`/favorites/${mediaId}`);
  //   },

  //   // Check if media is favorited
  //   isFavorited: async (mediaId: number) => {
  //     const favorites = await favoritesApi.getFavorites();
  //     return favorites.some((fav: any) => fav.media_id === mediaId);
  //   },
};

export const watchesApi = {
  getWatches: async () => {
    const response = await api.get("/watches");
    return response.data;
  },

  addWatch: async (media: Media) => {
    const response = await api.post("/watches", { media });
    return response.data;
  },
};
