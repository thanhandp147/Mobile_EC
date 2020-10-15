import React, { Component } from 'react';
import { View, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { _widthScale, _heightScale } from '../Constant/Scale';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, TextInput, ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import HomeCarousel from '../Component/HomeCarousel';
import HomeDealShock from '../Component/HomeDealShock';
import CategoryHot from '../Component/CategoryHot'


class HomeScreen extends Component {
    render() {
        return (
            // <View style={[styles.container]}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1}}>
                    <LinearGradient
                        colors={gradient.color}
                        style={gradient.container}
                    >
                        <View style={styles.headerHome}>
                            {/* <TouchableOpacity

                            >
                                <Icon name="asterisk" size={26} color={'#fff'} />
                            </TouchableOpacity> */}
                            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end' }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.navigation.navigate('Notifications')
                                    }}
                                    style={{
                                        marginRight: _widthScale(25)
                                    }}>
                                    <Icon name="shopping-cart" size={26} color={'#fff'} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.inputHeader}>
                            <Icon name="search" size={26} style={{ marginHorizontal: _widthScale(10) }} color={'#BCBCBC'} />
                            <TextInput
                                style={{
                                    flex: 1,
                                    paddingVertical: 0
                                }}
                                placeholder={'Bạn tìm gì hôm nay'}
                            />
                        </View>

                        {/* <View style={{alignSelf:'center', alignItems:'center', justifyContent:'center'}}> */}
                        <View style={{ marginVertical: _heightScale(15) }}>
                            <HomeCarousel />
                        </View>

                        <View style={{ alignSelf: 'center' }}>
                            <HomeDealShock />
                        </View>
                        <View style={{ height: _heightScale(50) }}>

                        </View>
                        <Image
                            style={{
                                position: 'absolute',
                                bottom: -4
                            }}
                            source={require('../Image/a1.png')}
                        />

                    </LinearGradient>
                </View>

                <View style={{
                    backgroundColor:'#fff',
                }}>
                    <CategoryHot/>
                </View>
            </ScrollView>
            // </View>
        );
    }
}

const styles = StyleSheet.create({
    inputHeader: {
        marginTop: _heightScale(15),
        alignSelf: 'center',
        width: _widthScale(330),
        borderRadius: _widthScale(10),
        borderColor: '#C4C4C4',
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingVertical: _heightScale(10),
        justifyContent: 'center'
    },
    headerHome: {
        marginTop: _heightScale(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#2789FF'
        // backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row'
    }
})

const gradient = {
    container: {
        flex: 1
    },
    color: [
        'rgba(51,171,67, 1)',
        'rgba(51,171,67, .8)',
        'rgba(51,171,67, .6)',
        'rgba(51,171,67, .8)',
        'rgba(51,171,67, 1)',
    ],
}


export default HomeScreen;