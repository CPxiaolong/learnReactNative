/**
 * @description 首页
 * @author 王小龙
 * @date 2018-12-03
 */

import React, { Component } from "react";
import { Image, StyleSheet, View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-navigation";
import InfoFlatList from '../component/InfoFlatList/index';
import axios from "axios";
export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            movieList: [],
        };
    }

    componentDidMount() {  
    }

    render() {
        return (
            <InfoFlatList
                onPress = {(url) => 
                    this.props.navigation.navigate('Details', {
                        url
                    })
                }
            />
                        
        );
    }
}

const styles = StyleSheet.create({
    
});