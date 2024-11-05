import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useTheme} from './../../../assets/theme/ThemeProvider';

export default function CardTransactions() {
  const theme = useTheme();

  return (
    <View style={{width: '100%'}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 5,
        }}>
        <Text
          style={{
            fontWeight: 500,
            fontFamily: theme.fonts.medium,
            fontSize: theme.spacing.medium,
            color: theme.colors.textSecondary,
            marginLeft: 25,
          }}>
          Kart Hareketleri{' '}
        </Text>

        <TouchableOpacity
          style={{
            borderRadius: 15,
            borderColor: theme.colors.gray,
            borderWidth: 1,
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20,
            alignItems: 'center',
            marginRight: 25,
            alignSelf: 'flex-end',
            bottom: 15,
            backgroundColor: theme.colors.backgroundWhite,
          }}>
          <Text
            style={{
              fontWeight: 500,
              fontFamily: theme.fonts.medium,
              fontSize: 14,
              color: theme.colors.textSecondary,
            }}>
            Tümü
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          borderWidth: 1,
          borderColor: theme.colors.gray,
          gap: 5,
          margin: 25,
          height: 150,
          backgroundColor: theme.colors.backgroundWhite,
          top: -30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.gray,
            padding: 20,
            width: '100%',
            gap: 15,
            top: 5,
          }}>
          <View
            style={{
              backgroundColor: theme.colors.iconBackground,
              width: 45,
              height: 45,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {' '}
            <Image
              source={require('./../../../assets/theme/images/panth.png')}
              style={{width: 24, height: 24}}
              resizeMode="contain"
            />
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 5,
              width: '55%',
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 500,
                lineHeight: 18,
                color: theme.colors.textSecondary,
                marginLeft: 20,
              }}
              numberOfLines={1}
              ellipsizeMode="tail">
              LC Waikiki Mağazacılık H.
            </Text>
            <Text
              style={{
                fontWeight: 400,
                fontSize: 12,
                lineHeight: 15,
                color: theme.colors.subText,
                marginLeft: 20,
              }}>
              30.03.2024
            </Text>
          </View>

          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              lineHeight: 18,
              color: theme.colors.textSecondary,
              width: '25%',
              marginRight: 20,
            }}>
            -1304.43₺
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: 20,
            width: '100%',
            gap: 15,
            bottom: 10,
          }}>
          <View
            style={{
              backgroundColor: theme.colors.iconBackground,
              width: 45,
              height: 45,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {' '}
            <Image
              source={require('./../../../assets/theme/images/drink.png')}
              style={{width: 24, height: 24}}
              resizeMode="contain"
            />
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 5,
              width: '55%',
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 500,
                lineHeight: 18,
                color: theme.colors.textSecondary,
                marginLeft: 20,
              }}
              numberOfLines={1}
              ellipsizeMode="tail">
              Happy Moon's Grup Happy Moon's Grup Happy Moon's GrupHappy Moon's
              Grup
            </Text>
            <Text
              style={{
                fontWeight: 400,
                fontSize: 12,
                lineHeight: 15,
                color: theme.colors.subText,
                marginLeft: 20,
              }}>
              30.03.2024
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              lineHeight: 18,
              color: theme.colors.textSecondary,
              alignSelf: 'flex-start',
              width: '25%',
              marginRight: 20,
            }}>
            -310.00₺
          </Text>
        </View>
      </View>
    </View>
  );
}
