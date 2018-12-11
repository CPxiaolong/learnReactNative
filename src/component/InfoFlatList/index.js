/**
 * @description 首页
 * @author 王小龙
 * @date 2018-12-03
 */

import React, { Component } from "react";
import { View, Text, Button, Image, StyleSheet, FlatList, TouchableHighlight, Dimensions} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator, createAppContainer, SafeAreaView } from "react-navigation";
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import newsDataList from '../../assets/newsData';
import newsDataList2 from '../../assets/newsData2';
import axios from "axios";

export default class InfoFlatList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            refreshing: false,
            newsList: [],
            FooterMessage:'加载中...',
            isLoading: false, // 避免上拉的时候多次触发刷新方法
        }
        this.handlerRefresh = this.handlerRefresh.bind(this);
        this.renderListFooterComponent = this.renderListFooterComponent.bind(this);
        // this.setKey = this.setKey(this)
    }
    componentWillMount() {
        this.setState({newsList: newsDataList.result.data})
    }
    componentWillUnmount() {
      
    }

    setKey(data) {
        let newsHadKey = data.map(news => {
            news.key = news.uniquekey
            return news
        })
        return newsHadKey
    }

    handlerRefresh(newsKey) {
        // const REQUEST_URL = 'http://v.juhe.cn/toutiao/index';
        // axios.get(REQUEST_URL, {  //params参数必写 , 如果没有参数传{}也可以
        //     params: {  
        //         type: newsKey,
        //         key: '2bbea444e5b1244e712a754182d85629'
        //     }
        // }).then(resp => {
        //     this.setState({ newsList: resp.data.result.data});
        // })
        this.setState({ refreshing: true});
        let data = this.setKey(newsDataList2.result.data)
        setTimeout(() => {
            this.setState( (preState, props) => {
                return {
                    refreshing: !preState.refreshing,
                    newsList: [...data,...preState.newsList]
                }
            })
        }, 1000);
    }
    /**
     * @description 上拉刷新
     */
    handlerEndReached() {
        if (!this.state.isLoading) {
            this.setState({
                isLoading: true
            })
            let timer = setTimeout(() => {
                clearTimeout(timer)
                let data = this.setKey(newsDataList2.result.data)
                if (data.length === 0 && this.state.FooterMessage !== '暂无更多数据') {
                    this.setState({
                        FooterMessage: '暂无更多数据'
                    })
                } else if (data.length !== 0 && this.state.FooterMessage === '暂无更多数据') {
                    this.setState({
                        FooterMessage: '加载中...'
                    })
                } else {
                    this.setState( (preState, props) => {
                        return {
                            newsList: [...preState.newsList, ...data]
                        }
                    })
                }
                this.setState({
                    isLoading: false
                })
            }, 1000);
        }
    }

    renderListFooterComponent() {
        return(
            <View style = {styles.faltListfooter}>
                 <Text style = {styles.faltListfooterMessage}>
                    {this.state.FooterMessage}
                </Text>
            </View>
        )
    }

    render() {
        let newsHadKey = this.state.newsList.map((news, index) => {
            news.key = news.uniquekey + index
            return news
        })
        let dataList = this.state.newsList
        let {onPress, newsKey} = this.props;
        // const ITEM_HEIGHT = 100;
        return <FlatList
            data = {newsHadKey}
            refreshing = {this.state.refreshing}
            ListFooterComponent = {this.renderListFooterComponent}
            onRefresh = {newsKey => this.handlerRefresh(newsKey)}
            initialNumToRender = {6} // 指定一开始渲染的元素数量, 最好刚刚够填满一个屏幕
            // keyExtractor = {item => item.uniquekey}  // 给数组明确key键
            onEndReached = {() => this.handlerEndReached()} // 上拉刷新
            onEndReachedThreshold = {0.01} // 决定当距离内容最底部还有多远时触发onEndReached, 比如，0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发。
            // getItemLayout = {(data, index) => (  // 减少额外开销 需要提前知道内容高度
            //     {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
            // )}
            renderItem = {({item}, index) => {
                let newView;
                if (item.thumbnail_pic_s && item.thumbnail_pic_s02 && item.thumbnail_pic_s03) {
                    newView = <View key={index} style = {styles.moreImageContainer}>
                        <View style = {styles.TitleContainer}>
                            <Text style = {styles.moreImagetitle}>{item.title}</Text>
                        </View>
                        <View style = {styles.ImageContainer}>
                            <Image source = {{ uri: item.thumbnail_pic_s }}  style = {styles.moreImage} />
                            <Image source = {{ uri: item.thumbnail_pic_s02 }}  style = {styles.moreImage} />
                            <Image source = {{ uri: item.thumbnail_pic_s03 }}  style = {styles.moreImage} />
                        </View>
                        <View style = {styles.InforContainer}>
                            <Text style = {styles.authorName}>{item.author_name}</Text>
                            <Text style = {styles.moreImageTime}>{item.date}</Text>
                        </View>
                    </View>
                } else {
                    newView = <View key={index} style = {styles.container}>
                        <View style = {styles.rightContainer}>
                            <Text style = {styles.title}>{item.title}</Text>
                            <View style = {styles.InforContainer}>
                                <Text style = {styles.authorName}>{item.author_name}</Text>
                                <Text style = {styles.moreImageTime}>{item.date}</Text>
                            </View>
                        </View>
                        <Image source = {{ uri: item.thumbnail_pic_s }}  style = {styles.thumbnail} />
                    </View>
                }
                
                return (
                <TouchableHighlight onPress = {() => {onPress(item.url)}}>
                   {newView}
                </TouchableHighlight>
                )
            }}
        />
    }
}
const {height,width} =  Dimensions.get('window');
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
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingLeft: 5,
        paddingRight: 5,
        borderBottomColor:'#f2f2f2',
        borderBottomWidth: 1,
        marginBottom: 12,
        // height: 100,
    },
    moreImageContainer: {
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomColor:'#f2f2f2',
        borderBottomWidth: 1,
        marginBottom: 12,
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 6,
        paddingRight: 6,
        alignContent: 'space-between',
    },
    oreImagetitle: {
        textAlign: 'left',
    },
    title: {
        flex: 1,
        flexDirection: 'row',
        fontSize: 16,
        marginBottom: 8,
        textAlign: 'left',
        color: '#333333'
    },
    moreImagetitle: {
        flex: 1,
        fontSize: 16,
        marginBottom: 8,
        textAlign: 'left',
        color: '#333333'
    },
    authorName: {
        flex:1,
        textAlign: 'left',
    },
    moreImageTime: {
        flex:1,
        fontSize: 12,
        textAlign: 'right',
        color: '#888888'
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
    },
    moreImage: {
        width: width/3 - 10,
        //flex: 1,
        marginLeft: 3,
        marginRight: 3,
        height: 80,
        borderRadius: 3,
    },
    faltListfooter: {
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    faltListfooterMessage: {
        fontSize: 14
    },
    TitleContainer: {
        flexDirection: 'row',
        marginBottom: 4,
    },
    ImageContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    InforContainer: {
        flexDirection: 'row',
        paddingBottom: 3,
        marginTop: 4,
    }
});