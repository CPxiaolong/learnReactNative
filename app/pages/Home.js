/**
 * @description 首页
 * @author 王小龙
 * @date 2018-12-03
 */

import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home lala!</Text>
                <Button title='详情' onPress={() => this.props.navigation.navigate('Details', {
                    itemId: 86,
                    otherParam: 'anything you want here',
                })} />
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: null,
    });
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

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
                    return <AntDesign name = {iconName} size = {horizontal ? 20 : 25} color = {tintColor} />;
                } else if (routeName === 'Settings') {
                    iconName =  'settings';
                    return <MaterialIcons name = {iconName} size = {horizontal ? 20 : 25} color = {tintColor} />;
                }
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                // return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
)
const TabNavigatorContainer = createAppContainer(TabNavigator);


export default TabNavigator;
// export default class Home extends Component {
//     static navigationOptions = ({ navigation }) => ({
//         header: null,
//     });
//     render() {
//         return (
//             <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//                 <Text>这是 MODE首页</Text>
//                 <Button title='详情' onPress={() => this.props.navigation.navigate('Details', {
//                     itemId: 86,
//                     otherParam: 'anything you want here',
//                 })} />
//             </View>
//         );
//     }
// }