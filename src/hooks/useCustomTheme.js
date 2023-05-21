import { useContext } from 'react';
import { ThemeContext } from '../context/Themes';

export const useCustomTheme = () => {
  const context = useContext(ThemeContext);

  return {
    theme: context.theme,
    colors: context.colors,
    setTheme: context.setTheme,
    loading: context.loading,
  };
};