import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useTheme} from './../../../assets/theme/ThemeProvider';

export default function CardButtons() {
  const theme = useTheme();

  return (
    <View style={styles.cardButtons}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: theme.colors.cardBackgorund,
          margin: 10,
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
        }}>
        <Image
          source={require('./../../../assets/theme/images/qr-code-logo.png')}
          style={{width: 18, height: 18, marginRight: 10}}
          resizeMode="contain"
        />
        <Text
          style={{
            color: theme.colors.backgroundWhite,
            fontSize: 14,
            lineHeight: 20,
            alignContent: 'center',
            fontFamily: theme.fonts.regular,
          }}>
          QR ile öde
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: theme.colors.cardBackgorund,
          margin: 10,
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
        }}>
        <Image
          source={require('./../../../assets/theme/images/load-money.png')}
          style={{width: 18, height: 18, marginRight: 10}}
          resizeMode="contain"
        />
        <Text
          style={{
            color: theme.colors.backgroundWhite,
            fontSize: 14,
            lineHeight: 20,
            alignContent: 'center',
            fontFamily: theme.fonts.regular,
          }}>
          Para yükle
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  cardButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
});
