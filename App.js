/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import IndexScreen from "./app/pages/index";
import DetailsScreen from "./app/pages/Details";


const AppNavigator = createStackNavigator({
    IndexScreen: {
        screen: IndexScreen,
        navigationOptions: ({ navigation }) => {
            return {
                header : null,
            };
        }
    },
    Details: DetailsScreen
},
{
    initialRouteName: "IndexScreen",
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerRight: <View />,
        headerTitleStyle: {
            fontWeight: 'bold',
            display: 'flex',
            flex: 1,
            textAlign: 'center'
        },
        mode: 'modal',
        headerMode: 'none',
    }
});

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}