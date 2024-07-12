import create from 'zustand';

interface State {
  language: 'ru' | 'ua' | 'en';
  setLanguage: (lang: 'ru' | 'ua' | 'en') => void;
}

const useStore = create<State>((set) => ({
  language: 'ru',
  setLanguage: (lang: 'ru' | 'ua' | 'en') => set({ language: lang }),
}));

export default useStore;
