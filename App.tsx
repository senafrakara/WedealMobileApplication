import React, {createContext, useState, useEffect} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {ThemeProvider} from './assets/theme/ThemeProvider';
import TabLayout from './app/(tabs)/_layout';
import {foundations as theme} from './assets/theme/foundations';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cards from './app/my-card/Cards';
import {Text} from 'react-native';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <TabLayout />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
