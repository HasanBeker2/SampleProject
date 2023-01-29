import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <>
      <View style={styles.headerContainer}>
        <LittleLemonHeader />
        <WelcomeScreen />
        {/* <MenuItems /> */}
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
    backgroundColor: '#495E57',
  },

  footerContainer: {
    backgroundColor: '#495E57',
  },
});