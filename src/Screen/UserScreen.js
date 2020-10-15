import React, { Component } from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { _widthScale, _heightScale } from '../Constant/Scale';

class UserScreen extends Component {
    render() {
        return (
            <View style={[styles.container]}>

                <Text>
                    UserTab
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


export default UserScreen;