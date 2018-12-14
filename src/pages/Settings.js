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
import Video from 'react-native-video';
export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            movieList: [],
        };
        this.onBuffer = this.onBuffer.bind(this)
        this.videoError = this.videoError.bind(this)
    }

    componentDidMount() {  
    }

    onBuffer() {

    }

    videoError() {

    }
    render() {
        return (
            <Video source={{uri: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"}}   // Can be a URL or a local file.
            ref={(ref) => {
              this.player = ref
            }}                                      // Store reference
            onBuffer={this.onBuffer}                // Callback when remote video is buffering
            onError={this.videoError}               // Callback when video cannot be loaded
            style={styles.backgroundVideo} />
                        
        );
    }
}

const styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
});