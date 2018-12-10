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
import axios from "axios";

export default class SettingsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: null,
    });

    constructor(props) {
        super(props)
        this.state = {
            movieList: [],
            refreshing: false
        }

        this._onRefresh = this._onRefresh.bind(this)
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

    render() {
        let moviesHadKey = this.state.movieList.map(movies => {
            movies.key = movies.id
            return movies
        })
        return(
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollableTabView
                style={{marginTop: 20, }}
                initialPage={0}
                renderTabBar={() => <ScrollableTabBar />}
            >
                <View tabLabel='动作' style = {styles.FlatContainer}>
                    <FlatList
                        data = {moviesHadKey}
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                        renderItem = {({item}, index) => {
                            return (<View key={index} style={styles.container}>
                                <Image source={{ uri: item.posters.thumbnail }}  style={styles.thumbnail} onPress={() => this.props.navigation.navigate('Details')} />
                                <View style={styles.rightContainer}>
                                    <Text style = {styles.title} onPress={() => this.props.navigation.navigate('Details')}>{item.title}</Text>
                                    <Text style = {styles.year}>{item.year}{index}</Text>
                                </View>
                            </View>)
                        }}
                    />    
                </View>
                <View tabLabel='喜剧' style = {styles.FlatContainer}>
                    <FlatList
                        data = {moviesHadKey}
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                        renderItem = {({item}, index) => {
                            return (<View key={index} style={styles.container}>
                                <Image source={{ uri: item.posters.thumbnail }}  style={styles.thumbnail} onPress={() => this.props.navigation.navigate('Details')} />
                                <View style={styles.rightContainer}>
                                    <Text style = {styles.title} onPress={() => this.props.navigation.navigate('Details')}>{item.title}</Text>
                                    <Text style = {styles.year}>{item.year}{index}</Text>
                                </View>
                            </View>)
                        }}
                    />    
                </View>
                <View tabLabel='剧情' style = {styles.FlatContainer}>
                    <FlatList
                        data = {moviesHadKey}
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                        renderItem = {({item}, index) => {
                            return (<View key={index} style={styles.container}>
                                <Image source={{ uri: item.posters.thumbnail }}  style={styles.thumbnail} onPress={() => this.props.navigation.navigate('Details')} />
                                <View style={styles.rightContainer}>
                                    <Text style = {styles.title} onPress={() => this.props.navigation.navigate('Details')}>{item.title}</Text>
                                    <Text style = {styles.year}>{item.year}{index}</Text>
                                </View>
                            </View>)
                        }}
                    />    
                </View>
                <View tabLabel='剧情' style = {styles.FlatContainer}>
                    <FlatList
                        data = {moviesHadKey}
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                        renderItem = {({item}, index) => {
                            return (<View key={index} style={styles.container}>
                                <Image source={{ uri: item.posters.thumbnail }}  style={styles.thumbnail} onPress={() => this.props.navigation.navigate('Details')} />
                                <View style={styles.rightContainer}>
                                    <Text style = {styles.title} onPress={() => this.props.navigation.navigate('Details')}>{item.title}</Text>
                                    <Text style = {styles.year}>{item.year}{index}</Text>
                                </View>
                            </View>)
                        }}
                    />    
                </View>
                <View tabLabel='剧情' style = {styles.FlatContainer}>
                    <FlatList
                        data = {moviesHadKey}
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                        renderItem = {({item}, index) => {
                            return (<View key={index} style={styles.container}>
                                <Image source={{ uri: item.posters.thumbnail }}  style={styles.thumbnail} onPress={() => this.props.navigation.navigate('Details')} />
                                <View style={styles.rightContainer}>
                                    <Text style = {styles.title} onPress={() => this.props.navigation.navigate('Details')}>{item.title}</Text>
                                    <Text style = {styles.year}>{item.year}{index}</Text>
                                </View>
                            </View>)
                        }}
                    />    
                </View>
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
        backgroundColor: "#F5FCFF",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    thumbnail: {
        width: 53,
        height: 81
    }
});