import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screen/HomeScreen'
import SplashScreen from '../Screen/SplashScreen/index'
import SearchingScreen from '../Screen/SearchingScreen'
import CateroryScreen from '../Screen/CategoryScreen'
import UserScreen from '../Screen/UserScreen'

// IMport Icon
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const HomeStack = () => {
    return (
        <Stack.Navigator
            headerMode="none"
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Notifications" component={SplashScreen} />
        </Stack.Navigator>
    )
}
const SearchingStack = () => {
    return (
        <Stack.Navigator
            headerMode="none"
        >
            <Stack.Screen name="Searching" component={SearchingScreen} />
        </Stack.Navigator>
    )
}
const CateroryStack = () => {
    return (
        <Stack.Navigator
            headerMode="none"
        >
            <Stack.Screen name="Caterory" component={CateroryScreen} />
        </Stack.Navigator>
    )
}
const UserStack = () => {
    return (
        <Stack.Navigator
            headerMode="none"
        >
            <Stack.Screen name="User" component={UserScreen} />
        </Stack.Navigator>
    )
}

const AppContainer = () => {
    return (
            <NavigationContainer>
                <Tab.Navigator
                    tabBarOptions={{
                        activeTintColor: '#33AB43',
                    }}
                    initialRouteName={'Home'}>

                    <Tab.Screen
                        options={{
                            tabBarLabel: 'Trang chủ',
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="home" color={color} size={size} />
                            ),
                        }}
                        name="Home"
                        component={HomeStack} />

                    <Tab.Screen
                        options={{
                            tabBarLabel: 'Tìm kiếm',
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="search" color={color} size={size} />
                            ),
                        }}
                        name="Searching"
                        component={SearchingStack} />

                    <Tab.Screen
                        options={{
                            tabBarLabel: 'Danh mục',
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="th-list" color={color} size={size} />
                            ),
                        }}
                        name="Caterory"
                        component={CateroryStack} />

                    <Tab.Screen
                        options={{
                            tabBarLabel: 'Tài khoản',
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="user-circle" color={color} size={size} />
                            ),
                        }}
                        name="User"
                        component={UserStack} />

                </Tab.Navigator>
            </NavigationContainer>
    )
}

export default AppContainer