/**
 * @description 首页
 * @author 王小龙
 * @date 2018-12-03
 */

import React, {Component}from "react";
import { View, Text, Button } from "react-native";
import {SafeAreaView} from "react-navigation";
export default class Details extends Component {
    static navigationOptions = {
        title: '详情',
    };
    render() {
        const navigation = this.props.navigation;
        const itemId = navigation.getParam('itemId', 'NO-ID')
        const otherParam = navigation.getParam('otherParam', 'noOtherParam')
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text>Details Screen</Text>
                    <Text>{itemId}</Text>
                    <Text>{otherParam}</Text>
                </View>
            </SafeAreaView>
        );
    }
}