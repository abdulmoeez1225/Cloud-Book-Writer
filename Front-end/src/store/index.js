import { create } from "zustand";


export const useGlobalStore = create((set) => ({
    user: 1,
    token: '',
    setToken: (token) => set((state) => ({ token })),
}))