import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useTheme} from './../../../assets/theme/ThemeProvider';

export default function CardInfo() {
  const theme = useTheme();

  return (
    <View style={{width: '100%'}}>
      <Text
        style={{
          fontWeight: 500,
          fontFamily: theme.fonts.medium,
          fontSize: theme.spacing.medium,
          color: theme.colors.textSecondary,
          top: 15,
          height: 30,
          marginLeft: 25,
        }}>
        Kart Bilgileri
      </Text>
      <View
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          height: 150,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: theme.colors.gray,
          gap: 5,
          margin: 25,
          backgroundColor: theme.colors.backgroundWhite,
          top: -5,
        }}>
        {/*   Card Number Area    */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.gray,
            padding: 20,
            width: '100%',
            height: '50%',
          }}>
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <View
              style={{
                backgroundColor: theme.colors.iconBackground,
                width: 40,
                height: 40,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                top: 10,
              }}>
              <Image
                source={require('./../../../assets/theme/images/card-number.png')}
                style={{width: 16, height: 16}}
                resizeMode="contain"
              />
            </View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 500,
                lineHeight: 18,
                color: theme.colors.textSecondary,
                marginLeft: 60,
                top: -20,
              }}>
              4310 1030 3000 9530
            </Text>
          </View>
          <Image
            source={require('./../../../assets/theme/images/copy.png')}
            style={{
              width: 24,
              height: 24,
              marginRight: 50,
            }}
            resizeMode="contain"
          />
        </View>
        {/*   Calendar-CVV Area    */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            width: '100%',
            height: '50%',
            gap: 5,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 15,
            }}>
            <View
              style={{
                backgroundColor: theme.colors.iconBackground,
                width: 40,
                height: 40,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('./../../../assets/theme/images/calendar.png')}
                style={{width: 16, height: 16}}
                resizeMode="contain"
              />
            </View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 500,
                lineHeight: 18,
                color: theme.colors.textSecondary,
                marginTop: 10,
              }}>
              10 / 26
            </Text>

            <View
              style={{
                backgroundColor: theme.colors.iconBackground,
                width: 40,
                height: 40,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('./../../../assets/theme/images/card-cvv.png')}
                style={{width: 16, height: 16}}
                resizeMode="contain"
              />
            </View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 500,
                lineHeight: 18,
                color: theme.colors.textSecondary,
                marginTop: 10,
              }}>
              430
            </Text>
          </View>

          <Image
            source={require('./../../../assets/theme/images/copy.png')}
            style={{
              width: 24,
              height: 24,
              marginRight: 50,
            }}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
}
