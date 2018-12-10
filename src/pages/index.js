/**
 * @description 首页
 * @author 王小龙
 * @date 2018-12-03
 */

import React, { Component } from "react";
import { View, Text, Button, Image, StyleSheet} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator, createAppContainer, SafeAreaView } from "react-navigation";
import HomeScreen from './Home'
import SettingsScreen from './Settings'

const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Settings: SettingsScreen,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                // console.warn('routeName:',routeName)
                let iconName;
                if (routeName === 'Home') {
                    iconName = `home`;
                    return <AntDesign name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
                } else if (routeName === 'Settings') {
                    iconName = 'settings';
                    return <MaterialIcons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
                }
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                // return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#55ade9',
            inactiveTintColor: '#4e4e4e',
        },
    }
)

export default TabNavigator;