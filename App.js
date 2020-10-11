/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { _widthScale, _heightScale } from './src/Constant/Scale';
import { createAppContainer } from 'react-navigation';
import MainNav from './src/Navigation/AppNavigation'
import SplashScreen from './src/Screen/SplashScreen'

const AppContainer = createAppContainer(MainNav);

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <AppContainer />
        {/* <Text>awd</Text> */}
      </SafeAreaView>
    </>
  );
};


export default App;
