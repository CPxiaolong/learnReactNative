/**
 * @description 首页
 * @author 王小龙
 * @date 2018-12-03
 */

import React, { Component } from "react";
import { Image, StyleSheet, View, Text, Button } from "react-native";
import { SafeAreaView } from "react-navigation";
let MOCKED_MOVIES_DATA = [
    {
        title: "标题",
        year: "2015",
        posters: { thumbnail: "http://i.imgur.com/UePbdph.jpg" }
    }
];
export default class HomeScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {
                    MOCKED_MOVIES_DATA.map((movie, index) => {
                        return (<View key={index} style={styles.container}>
                            <Image source={{ uri: 'http://i.imgur.com/UePbdph.jpg' }} style={styles.thumbnail} />
                            <View style={styles.rightContainer}>
                                <Text style = {styles.title} onPress={() => this.props.navigation.navigate('Details')}>{movie.title}</Text>
                                <Text style = {styles.year}>{movie.year}</Text>
                            </View>
                        </View>)
                    })
                }
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
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
        fontSize: 20,
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