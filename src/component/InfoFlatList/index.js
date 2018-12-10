/**
 * @description 首页
 * @author 王小龙
 * @date 2018-12-03
 */

import React, { Component } from "react";
import { View, Text, Button, Image, StyleSheet, FlatList, TouchableHighlight, alert} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator, createAppContainer, SafeAreaView } from "react-navigation";
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';

export default class InfoFlatList extends Component {

    render() {
        let {InfoList, refreshing, onRefresh, onPress} = this.props;
        return <FlatList
            data = {InfoList}
            refreshing={refreshing}
            onRefresh={onRefresh}
            renderItem = {({item}, index) => {
                return (
                <TouchableHighlight onPress = {() => {onPress()}}>
                    <View key={index} style = {styles.container}>
                        <Image source = {{ uri: item.posters.thumbnail }}  style = {styles.thumbnail} />
                        <View style = {styles.rightContainer}>
                            <Text style = {styles.title}>{item.title}</Text>
                            <Text style = {styles.year}>{item.year}{index}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                )
            }}
        />
    }
}
       
const styles = StyleSheet.create({
    FlatContainer: {
        
    },
    movieTitleListContainer: {
        fontSize: 20,
    },
    movieTitleListTitle: {
        fontSize: 20,
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 4,
       // paddingButtom: 4
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "#ffffff",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        borderBottomColor:'#f2f2f2',
        borderBottomWidth: 1,
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 6,
        paddingRight: 6,
        alignContent: 'space-between',
    },
    title: {
        fontSize: 16,
        marginBottom: 8,
        textAlign: 'left',
        color: '#333333'
    },
    year: {
        fontSize: 12,
        textAlign: 'right',
        color: '#888888'
    },
    thumbnail: {
        width: 120,
        height: 80,
        borderRadius: 3,
    }
});