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
import InfoFlatList from '../component/InfoFlatList/index';
import newsDataList from '../assets/newsData';
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
            // titleList: ['动作', '喜剧', '古装', '剧情', '纪录片'],
            newsData: [
                {
                    key: 'top',
                    title: '头条',
                },
                {
                    key: 'shehui',
                    title: '社会',
                },
                {
                    key: 'guonei',
                    title: '国内',
                },
                {
                    key: 'guoji',
                    title: '国际',
                },
                {
                    key: 'yule',
                    title: '娱乐',
                },
                {
                    key: 'tiyu',
                    title: '体育',
                },
                {
                    key: 'junshi',
                    title: '军事',
                },
                {
                    key: 'keji',
                    title: '科技',
                },
                {
                    key: 'caijing',
                    title: '财经',
                },
                {
                    key: 'shishang',
                    title: '时尚',
                }
            ]
        }
        this.renderNewsPages = this.renderNewsPages.bind(this);
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        this.setState({movieList: newsDataList.result.data})
        // const REQUEST_URL = 'http://v.juhe.cn/toutiao/index';
        // axios.get(REQUEST_URL, {  //params参数必写 , 如果没有参数传{}也可以
        //     params: {  
        //         type: 'top',
        //         key: '2bbea444e5b1244e712a754182d85629'
        //     }
        // }).then(resp => {
        //     this.setState({ movieList: resp.data.result.data});
        // })
    }


    renderNewsPages(news) {
        return (
            <View
                key = {news.key} 
                tabLabel = {news.title} 
                style = {styles.FlatContainer}
            >
                <InfoFlatList
                    newsKey = {news.key}
                    onPress = {(url) => 
                        this.props.navigation.navigate('Details', {
                            url
                        })
                    }
                />
            </View>
        )
    }

    render() {
        let titleList = this.state.newsData.map(item => {
            return item.title
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
                {titleList.map( (title, index) => {
                        return this.renderNewsPages(this.state.newsData[index])
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