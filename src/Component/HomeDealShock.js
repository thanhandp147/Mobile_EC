import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-native-snap-carousel';
import { View, StyleSheet, Text, StatusBar, Image, ImageBackground } from 'react-native';
import { _widthScale, _heightScale, WIDTH_DIMENSION, HEIGHT_DIMENSION } from '../Constant/Scale';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, TextInput, ScrollView } from 'react-native-gesture-handler';

const HomeDealShock = props => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: _widthScale(10) }}>
                <Text style={{
                    fontSize: _widthScale(15),
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    color: '#EA9055'
                }}>
                    Giá sốc hôm nay
                </Text>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: _widthScale(5) }}>
                    <Text style={{
                        marginRight: _widthScale(5)
                    }}>
                        Xem thêm
                    </Text>
                    <Icon name={'chevron-right'} />
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}>
                {
                    [`https://salt.tikicdn.com/cache/280x280/ts/product/16/2e/7e/e119c207fe02a45bf7e638b46f29d0e3.jpg`,
                        `https://salt.tikicdn.com/cache/w390/ts/product/e7/c9/91/e516349349ee121d7e4249f585c71d8a.jpg`,
                        `https://salt.tikicdn.com/cache/w390/ts/product/41/77/6e/be7834bd1b852e56fe4bc3764fee4f18.jpg`,
                        `https://salt.tikicdn.com/cache/280x280/ts/product/f6/76/44/9e3d9ac84e928a0f466347842cbe95d1.jpg`,
                    ].map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={{ alignItems: 'center', marginLeft: _widthScale(15), marginTop: _heightScale(10) }}>
                                <View key={index} style={styles.itemCarousel}>
                                    <ImageBackground
                                        style={{
                                            width: "100%",
                                            height: '100%'
                                        }}
                                        source={{ uri: item }}>
                                        <View style={{
                                            width: _widthScale(40),
                                            height: _heightScale(15),
                                            backgroundColor: '#FF424E',
                                            position: 'absolute',
                                            borderRadius:_widthScale(5)
                                        }}>
                                            <Text style={{
                                                color:'#fff',
                                                alignSelf:'center',
                                                fontSize:_widthScale(11),
                                                fontWeight:'500'
                                            }}>
                                                -15%
                                            </Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                                <Text style={{
                                    marginTop: _heightScale(10),
                                    fontWeight:'500'
                                }}>
                                    100.000d
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    itemCarousel: {
        width: _widthScale(100),
        height: _widthScale(100),
        overflow: 'hidden',
    },
    container: {
        width: _widthScale(330),
        paddingBottom: _heightScale(20),
        backgroundColor: '#fff',
        borderRadius: _widthScale(10),
        overflow: 'hidden'
    }
})

export default HomeDealShock;