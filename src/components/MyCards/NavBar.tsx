import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import React from 'react';
import {useTheme} from './../../../assets/theme/ThemeProvider';
import LinearGradient from 'react-native-linear-gradient';
import Card from './Card';

export default function () {
  const theme = useTheme();

  return (
    <ImageBackground
      source={require('./../../../assets/theme/images/noise.png')}
      style={styles.background}
      resizeMode="cover">
      <LinearGradient
        colors={[theme.colors.backgroundWhite, theme.colors.primary]}
        start={{x: 0, y: 0}}
        end={{x: 0.5, y: 1}}
        style={styles.gradient}>
        <Text
          style={{
            color: theme.colors.textPrimary,
            fontFamily: theme.fonts.regular,
            fontSize: theme.spacing.large,
            fontWeight: 800,
            top: 20,
          }}>
          Kartım
        </Text>

        <Card />
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 99,
  },
  background: {
    flex: 1,
  },
});
