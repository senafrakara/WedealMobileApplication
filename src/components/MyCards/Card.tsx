import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from './../../../assets/theme/ThemeProvider';
import LinearGradient from 'react-native-linear-gradient';

export default function Card() {
  const theme = useTheme();

  return (
    <View style={styles.card}>
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.backgroundWhite]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.headerGradient}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text
            style={{
              fontSize: theme.spacing.small,
              color: theme.colors.backgroundWhite,
            }}>
            Wedeal
          </Text>
          <Text
            style={{
              fontSize: theme.spacing.small,
              color: theme.colors.backgroundWhite,
              fontWeight: 500,
            }}>
            PREMIUM
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            width: '100%',
            marginTop: 60,
          }}>
          <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
            {' '}
            <Text
              style={{
                fontSize: theme.spacing.small,
                color: theme.colors.backgroundWhite,
              }}>
              Kart Bakiyesi
            </Text>
            <Text
              style={{
                fontSize: theme.spacing.medium,
                color: theme.colors.backgroundWhite,
                fontWeight: 500,
              }}>
              25.320,50₺
            </Text>
          </View>
          <Image
            source={require('./../../../assets/theme/images/mastercard.png')}
            style={{width: 40, height: 24, alignSelf: 'flex-end'}}
            resizeMode="contain"
          />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    top: 50,
    gap: 10,
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: 200,
    alignItems: 'flex-end',
    overflow: 'hidden',
  },
  headerGradient: {
    padding: 20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    zIndex: 9999,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: 200,
    alignItems: 'flex-end',
    overflow: 'hidden',
  },
});
