import { create } from 'zustand';

const useStore = create((set) => ({
  language: localStorage.getItem('language') || 'ua',
  setLanguage: (lang) => {
    localStorage.setItem('language', lang); // Сохраняем в localStorage
    set({ language: lang }); // Обновляем состояние в Zustand
  },
}));

export default useStore;
