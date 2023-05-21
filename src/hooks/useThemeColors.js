import Colors from '../constants/colors';
import { useCustomTheme } from './useCustomTheme';

export const useThemeColors = () => {
  const customTheme = useCustomTheme();

  return {
    theme: customTheme.theme,
    colors: Colors[customTheme.theme],
  };
}