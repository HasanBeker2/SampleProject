import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, StatusBar, SafeAreaView, useColorScheme } from 'react-native';


const DarkModeGPT = () => {
  const colorScheme = useColorScheme();
  const [mode, setMode] = useState(colorScheme);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={mode === 'light' ? 'dark-content' : 'light-content'} />
      <View style={[styles.content, { backgroundColor: mode === 'light' ? 'white' : 'black' }]}>
        <Text style={[styles.text, { color: mode === 'light' ? 'black' : 'white' }]}>
          {mode === 'light' ? 'Light Mode' : 'Dark Mode'}
        </Text>
        <Button title="Toggle Mode" onPress={toggleMode} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DarkModeGPT;
