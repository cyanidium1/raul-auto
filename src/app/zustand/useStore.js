import create from 'zustand';

const useStore = create((set) => ({
  language: 'ru',
  setLanguage: (lang) => set({ language: lang }),
}));

export default useStore;
