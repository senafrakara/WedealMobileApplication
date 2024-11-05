import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from './../../assets/theme/ThemeProvider';
import Cards from '../my-card/Cards';

const CardScreen = () => {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Cards />
    </View>
  );
};

export default CardScreen;
