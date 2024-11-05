import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cards from './cards';
import home from './home';
import profile from './profile';
import {useTheme} from './../../assets/theme/ThemeProvider';

const Tab = createBottomTabNavigator();

const TabBarLabel = ({
  label,
  icon,
  focused,
}: {
  label: string;
  focused: boolean;
  icon: string;
}) => {
  const theme = useTheme();

  return (
    <View style={{alignItems: 'center', top: -10}}>
      {focused && (
        <View
          style={{
            height: 2,
            width: '50%',
            backgroundColor: theme.colors.primary,
            position: 'absolute',
            top: -20,
            borderTopLeftRadius: 2,
            borderTopRightRadius: 2,
          }}
        />
      )}
      <Ionicons
        name={icon}
        size={20}
        color={focused ? theme.colors.primary : theme.colors.gray}
      />
      <Text
        style={{
          color: focused ? theme.colors.primary : theme.colors.gray,
        }}>
        {label}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Cards"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.backgroundWhite,
          borderTopWidth: 1,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          borderColor: theme.colors.backgroundWhite,
          paddingVertical: 8,
          height: 88,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabBarLabel label="Ana Sayfa" icon="home" focused={focused} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Cards"
        component={Cards}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabBarLabel label="Kartlar" icon="card" focused={focused} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabBarLabel label="Profil" icon="person" focused={focused} />
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabLayout;
