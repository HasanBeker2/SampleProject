import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import MenuFlatList from './components/MenuFlatList';
import MenuSectionList from './components/MenuSectionList';
import FeedbackForm from './components/FeedbackForm';
import LoginScreen from './components/LoginScreen';
import MenuPressable from './components/MenuPressable';
import MenuPressableButtonEffect from './components/MenuPressableButtonEffect';
import LoginScreenButton from './components/LoginScreenButton';
import WelcomeImage from './components/WelcomeImage';
import WelcomeLogo from './components/WelcomeLogo';
import BackgroundImage from './components/BackgroundImage';
import ColorScheme from './components/ColorScheme';
import DarkModeGPT from './components/DarkModeGPT';
import DarkModeGPT2 from './components/DarkModeGPT2';
import WindowsDimensions from './components/WindowDimensions';

export default function App() {
  return (
    <NavigationContainer>
    <>
      <View style={styles.headerContainer}>
        {/* <LittleLemonHeader /> */}
        {/* <WelcomeScreen /> */}
        {/* <MenuItems/> */}
        {/* <MenuFlatList/> */}
        {/* <MenuSectionList/> */}
        {/* <FeedbackForm/> */}
        {/* <LoginScreen/> */}
        {/* <MenuPressable/> */}
        {/* <MenuPressableButtonEffect/> */}
        {/* <LoginScreenButton /> */}
        {/* <WelcomeImage/> */}
        {/* <WelcomeLogo/> */}
        {/* <BackgroundImage/> */}
        {/* <ColorScheme/> */}
        {/* <DarkModeGPT/> */}
        {/* <DarkModeGPT2/> */}
        <WindowsDimensions/>

      </View>

      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: '#333333',
  },

  footerContainer: {
    backgroundColor: '#333333',
  },
});