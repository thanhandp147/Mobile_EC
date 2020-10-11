import React, { Component } from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { _widthScale, _heightScale } from '../Constant/Scale';
import Icon from 'react-native-vector-icons/FontAwesome';


class HomeScreen extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <StatusBar translucent={false} barStyle="dark-content" backgroundColor={'transparent'} />
                {
                    Platform.OS == 'ios' &&
                    <View style={{
                        height: _heightScale(32),
                        // backgroundColor: ''
                    }} />
                }
                <View style={styles.header}>
                    <Text>awd</Text>
                    <Icon name="rocket" size={30} color="#900" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'red'
    },
    header: {
        flexDirection: 'row'
    }
})


export default HomeScreen;