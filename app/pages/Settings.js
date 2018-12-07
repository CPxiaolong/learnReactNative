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
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

export default class SettingsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: null,
    });
    render() {
        return <ScrollableTabView
            style={{marginTop: 20, }}
            initialPage={1}
            renderTabBar={() => <DefaultTabBar />}
        >
            <Text tabLabel='Tab #1'>My</Text>
            <Text tabLabel='Tab #2'>favorite</Text>
            <Text tabLabel='Tab #3'>project</Text>
        </ScrollableTabView>;
    }
}
