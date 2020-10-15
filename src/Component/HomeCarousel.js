import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';
import { View, StyleSheet, Text, StatusBar, ImageBackground } from 'react-native';
import { _widthScale, _heightScale, WIDTH_DIMENSION, HEIGHT_DIMENSION } from '../Constant/Scale';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, TextInput, ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';


const HomeCarousel = props => {
    const [listItem, setListItem] = useState([
        `https://cf.shopee.vn/file/ef1ecc044e4123435310e67d65b17af5_xxhdpi`,
        `https://cf.shopee.vn/file/54c341e811cdd94372761016224cf390_xxhdpi`,
        `https://cf.shopee.vn/file/4a0f726790c013f3b43fe06184bc3ecc_xxhdpi`
    ])

    const _renderItem = () => {
        return (
            <View style={{ backgroundColor: '#c4C4C4', height: _heightScale(50) }}>
                <Text>
                    aloooo
                </Text>
            </View>
        )
    }
    return (
        // <Carousel
        //     // ref={(c) => { this._carousel = c; }}
        //     layout={'default'}
        //     data={listItem}
        //     renderItem={_renderItem}
        //     sliderWidth={WIDTH_DIMENSION}
        //     itemWidth={_widthScale(330)}
        //     sliderHeight={_heightScale(100)}
        //     itemHeight={_heightScale(100)}
        // />
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        // scrollEventThrottle={200}
        // pagingEnabled
        // decelerationRate="fast"
        >
            {
                listItem.map((item, index) => {
                    return (
                        <View key={index} style={styles.itemCarousel}>
                            <LinearGradient
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 1 }}
                                colors={gradient.color}
                                style={gradient.container}
                            >
                                <ImageBackground
                                    style={{
                                        width: '100%',
                                        height: '100%'
                                    }}
                                    source={{ uri: `${item}` }}
                                >

                                </ImageBackground>
                            </LinearGradient>
                        </View>
                    )
                })
            }
        </ScrollView>
    );
};

const gradient = {
    container: {
        flex: 1
    },
    color: [
        'rgba(19,67,255, .9)',
        'rgba(19,67,255, .6)',
        'rgba(19,67,255, .4)',
    ],
}

const styles = StyleSheet.create({
    itemCarousel: {
        backgroundColor: '#c4C4C4',
        height: _heightScale(100),
        width: _widthScale(330),
        marginHorizontal: _widthScale(23),
        borderRadius: _widthScale(10), overflow: 'hidden'
    }
})


export default HomeCarousel;