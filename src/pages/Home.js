/**
 * @description 首页
 * @author 王小龙
 * @date 2018-12-03
 */

import React, { Component } from "react";
import { View, Text, Button, Image, StyleSheet, FlatList} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator, createAppContainer, SafeAreaView } from "react-navigation";
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import InfoFlatList from '../component/InfoFlatList/index'
import axios from "axios";

export default class SettingsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: null,
    });

    constructor(props) {
        super(props)
        this.state = {
            movieList: [],
            refreshing: false,
            titleList: ['动作', '喜剧', '古装', '剧情', '纪录片']
        }

        this._onRefresh = this._onRefresh.bind(this);
        this.renderNewsPages = this.renderNewsPages.bind(this);
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';
        axios.get(REQUEST_URL).then(resp => {
            this.setState({ movieList: resp.data.movies});
        })
    }

    _onRefresh() {
        this.setState({ refreshing: true});
        setTimeout(() => {
            this.setState({ refreshing: false});
        }, 1000);
    }

    renderNewsPages(title, data, refreshing, onRefresh) {
        return (
            <View
                key = {title} 
                tabLabel = {title} 
                style = {styles.FlatContainer}
            >
                <InfoFlatList
                    InfoList = {data}
                    refreshing = {refreshing}
                    onRefresh = {onRefresh}
                    onPress = {() => this.props.navigation.navigate('Details')}
                />
            </View>
        )
    }

    render() {
        let moviesHadKey = this.state.movieList.map(movies => {
            movies.key = movies.id
            return movies
        })
        return(
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollableTabView
                style = {{}}
                tabBarUnderlineStyle = '#67afdb'
                tabBarActiveTextColor = '#2d2d2d'
                tabBarInactiveTextColor = '#999999'
                initialPage = {0}
                renderTabBar = {() => <ScrollableTabBar />}
            >
                {this.state.titleList.map( title => {
                        return this.renderNewsPages(title, moviesHadKey, this.state.refreshing, this._onRefresh, )
                    }
                )}
            </ScrollableTabView>
        </SafeAreaView>)
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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10
    },
    rightContainer: {
        flex: 1,
    }
});