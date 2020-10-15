import React, { Component } from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { _widthScale, _heightScale } from '../Constant/Scale';

class SearchingScreen extends Component {
    render() {
        return (
            <View style={[styles.container]}>

                <Text>
                    SearchingTab
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default SearchingScreen;