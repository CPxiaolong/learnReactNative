/**
 * @description 首页
 * @author 王小龙
 * @date 2018-12-03
 */

import React, {Component}from "react";
import { View, Text, Button, WebView} from "react-native";
import {SafeAreaView} from "react-navigation";
export default class Details extends Component {
    static navigationOptions = {
        title: '详情',
    };
    render() {
        const navigation = this.props.navigation;
        const newsUrl = navigation.getParam('url', 'noUrl')
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <WebView
                    style={{ flex: 1 }}
                    source={{uri: newsUrl}}
                 />
            </SafeAreaView>
        );
    }
}