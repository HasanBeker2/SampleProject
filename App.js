import * as React from 'react';
import { View, StyleSheet } from 'react-native';

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

export default function App() {
  return (
    <>
      <View style={styles.headerContainer}>
        <LittleLemonHeader />
        {/* <WelcomeScreen /> */}
        {/* <MenuItems/> */}
        {/* <MenuFlatList/> */}
        {/* <MenuSectionList/> */}
        {/* <FeedbackForm/> */}
        {/* <LoginScreen/> */}
        {/* <MenuPressable/> */}
        {/* <MenuPressableButtonEffect/> */}
        <LoginScreenButton />

      </View>

      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
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