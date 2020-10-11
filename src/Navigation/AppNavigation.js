import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet, ImagePickerIOS } from 'react-native';
//import all the basic component we have used
//import Ionicons to show the icon for bottom options
import getSlideFromRightTransition from './SlideFromRightTransition';

import ScreenKey from './ScreenKey'

//For React Navigation 4+
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

// Import Screen
import SplashScreen from '../Screen/SplashScreen/index'
import HomeTab from '../Screen/HomeScreen'
import CategoryTab from '../Screen/CategoryScreen'
import SearchingTab from '../Screen/SearchingScreen'
import UserTab from '../Screen/UserScreen'



const MainTab = createBottomTabNavigator(
    {
        [ScreenKey.TAB_BOTTOM_HOME]: {
            screen: HomeTab
        },
        [ScreenKey.TAB_BOTTOM_CATEGORY]: {
            screen: CategoryTab
        },
        [ScreenKey.TAB_BOTTOM_SEARCH]: {
            screen: SearchingTab
        },
        [ScreenKey.TAB_BOTTOM_USER]: {
            screen: UserTab
        },
    },
    {
        initialRouteName: ScreenKey.TAB_BOTTOM_HOME,
        transitionConfig: getSlideFromRightTransition,
    },
);

const SwitchNavigator = createAnimatedSwitchNavigator(
    {
        Splash: SplashScreen,
        // Auth: GuestStack,
        App: MainTab
    },
    {
        headerMode: 'none',
        initialRouteName: "App"
    },
    {
        // The previous screen will slide to the bottom while the next screen will fade in
        transition: (
            <Transition.Together>
                <Transition.Out
                    type="slide-bottom"
                    durationMs={400}
                    interpolation="easeIn"
                />
                <Transition.In type="fade" durationMs={500} />
            </Transition.Together>
        ),
    }
)


export default SwitchNavigator;
