import React, {createContext, useContext, ReactNode} from 'react';

interface Theme {
  dark: boolean;
  colors: {
    primary: string;
    secondary: string;
    backgroundWhite: string;
    backgroundDark: string;
    gray: string;
  };
  fonts: {
    regular: string;
    bold: string;
    medium: string;
  };
  spacing: {
    small: number;
    medium: number;
    large: number;
  };
}

interface ThemeProviderProps {
  children: ReactNode;
  theme: Theme;
}

const ThemeContext = createContext<Theme | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme,
}) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
