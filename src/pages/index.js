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
import HomeScreen from './Home';
import SettingsScreen from './Settings';
import ShowComponentScreen from './ShowComponent';

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                // tabBarPosition: 'bottom',
                tabBarLabel: '首页',
                // showLabel: false,
                tabBarIcon: ({focused, horizontal, tintColor}) => (
                    <AntDesign name={'home'} size={horizontal ? 20 : 25} color={tintColor} />
                ),
            }
        },
        Settings: {
            screen: SettingsScreen,
            navigationOptions: {
                // tabBarPosition: 'bottom',
                tabBarLabel: '视频',
                // showLabel: false,
                tabBarIcon: ({focused, horizontal, tintColor}) => (
                    <AntDesign name={'playcircleo'} size={horizontal ? 20 : 25} color={tintColor} />
                ),
            }
        },
        ShowComponent: {
            screen: ShowComponentScreen,
            navigationOptions: {
                // tabBarPosition: 'bottom',
                tabBarLabel: '组件',
                // showLabel: false,
                tabBarIcon: ({focused, horizontal, tintColor}) => (
                    <AntDesign name={'appstore-o'} size={horizontal ? 20 : 25} color={tintColor} />
                ),
            }
        },
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            // 设置默认参数
            // tabBarIcon: ({focused, horizontal, tintColor}) => {
            //     const {routeName} = navigation.state;
            //     let iconName;
            //     if (routeName === 'Settings') {
            //         iconName = 'settings';
            //         return <MaterialIcons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            //     } else if (routeName === 'ShowComponent') {
            //         iconName = 'settings';
            //         return <MaterialIcons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            //     }
            // },
        }),
        tabBarOptions: {
            activeTintColor: '#55ade9',
            inactiveTintColor: '#4e4e4e',
        },
    }
)

export default TabNavigator;