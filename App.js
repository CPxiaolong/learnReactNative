/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen 首页</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}