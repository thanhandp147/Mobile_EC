import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import { Image, View, Text } from 'react-native';
import { _widthScale, _heightScale } from '../Constant/Scale';

const CategoryHot = props => {
    return (
        <View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: _widthScale(25),
                marginVertical: _heightScale(15),
                alignItems: 'center'
            }}>
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: _widthScale(15)
                    }}
                >
                    Danh mục nổi bật
                </Text>
                <Text>
                    Xem thêm
                </Text>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                    <View style={{
                        alignItems: 'center',
                        marginBottom: _heightScale(15),
                        marginHorizontal:_widthScale(20)
                    }}>
                        <Image
                            style={{
                                width: _widthScale(50),
                                height: _widthScale(50)
                            }}
                            source={{ uri: `https://salt.tikicdn.com/ts/category/b3/2b/72/8e7b4b703653050ffc79efc8ee017bd0.png` }}
                        />
                        <View style={{ height: _heightScale(10) }} />
                        <Text>Đồ gia dụng</Text>
                    </View>

                    <View style={{
                        alignItems: 'center',
                        marginHorizontal:_widthScale(20)
                    }}>
                        <Image
                            style={{
                                width: _widthScale(50),
                                height: _widthScale(50)
                            }}
                            source={{ uri: `https://salt.tikicdn.com/ts/category/85/13/02/d8e5cd75fd88862d0f5f647e054b2205.png` }}
                        />
                        <View style={{ height: _heightScale(10) }} />
                        <Text>Làm đẹp</Text>
                    </View>

                    <View style={{
                        alignItems: 'center',
                        marginBottom: _heightScale(15),
                        marginHorizontal:_widthScale(20)
                    }}>
                        <Image
                            style={{
                                width: _widthScale(50),
                                height: _widthScale(50)
                            }}
                            source={{ uri: `https://salt.tikicdn.com/ts/category/be/93/fc/7cac338181abda436dd958f76f734825.png` }}
                        />
                        <View style={{ height: _heightScale(10) }} />
                        <Text>Ô tô, xe máy</Text>
                    </View>

                    <View style={{
                        alignItems: 'center',
                        marginHorizontal:_widthScale(20)
                    }}>
                        <Image
                            style={{
                                width: _widthScale(50),
                                height: _widthScale(50)
                            }}
                            source={{ uri: `https://salt.tikicdn.com/ts/category/94/6a/42/3b262c87f2fd104b7cb50f38aef43e18.png` }}
                        />
                        <View style={{ height: _heightScale(10) }} />
                        <Text>Latop</Text>
                    </View>

            </ScrollView>
        </View>
    );
};



export default CategoryHot;