/**
 * @description 首页
 * @author 王小龙
 * @date 2018-12-03
 */

import React, { Component } from "react";
import { Image, StyleSheet, View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-navigation";
import axios from "axios";
let MOCKED_MOVIES_DATA = [
    {
        title: "标题",
        year: "2015",
        posters: { thumbnail: "http://i.imgur.com/UePbdph.jpg" }
    }
];
export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            movieList: [],
            movieTitleList: [
                {key:'喜剧', title: '喜剧'},
                {key:'动作', title: '动作'},
                {key:'惊悚', title: '惊悚'},
                {key:'青春', title: '青春'},
                {key:'综艺', title: '综艺'},
                {key:'纪录片', title: '纪录片'},
                {key:'科幻', title: '科幻'},
                {key:'音乐', title: '音乐'},
                {key:'奇幻', title: '奇幻'},
                {key:'武侠', title: '武侠'},
                {key:'家庭', title: '家庭'}
            ],
            refreshing: false
        };
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

    renderListHeader = () => {
        let movieTitleList = this.state.movieTitleList
        return (
            <View style = {styles.movieTitleListContainer} >
                <FlatList 
                    horizontal={true}
                    data = {movieTitleList}
                    renderItem = {({item}) => {
                        return (
                            <View key={item.key} style={styles.movieTitleListTitle}>
                                <Text style={styles.movieTitleListTitle}>{item.title}</Text>
                            </View>
                        )
                    }}
                /> 
            </View>
        )
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
        return (
            // onPress={() => this.props.navigation.navigate('Details')}
            <SafeAreaView style={{ flex: 1 }}>
                {this.renderListHeader()}
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
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
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