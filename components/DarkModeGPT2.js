import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, StatusBar, SafeAreaView,useColorScheme } from 'react-native';
//import { useColorScheme } from 'react-native-appearance';

const DarkModeGPT2 = () => {
  const colorScheme = useColorScheme();
  const [mode, setMode] = useState(colorScheme);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  const handleOnHover = () => {
    setIsHovered(true);
  };

  const handleOnBlur = () => {
    setIsHovered(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={mode === 'light' ? 'dark-content' : 'light-content'} />
      <View style={[styles.content, { backgroundColor: mode === 'light' ? 'white' : 'black' }]}>
        <Text style={[styles.text, { color: mode === 'light' ? 'black' : 'white' }]}>
          {mode === 'light' ? 'Light Mode' : 'Dark Mode'}
        </Text>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: isHovered ? '#008080' : '#2196F3',
            },
          ]}
          onPress={toggleMode}
          onFocus={handleOnHover}
          onBlur={handleOnBlur}
        >
          <Text style={[styles.buttonText, { color: mode === 'light' ? 'black' : 'white' }]}>
            Toggle Mode
          </Text>
        </TouchableOpacity>
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
    marginBottom: 20,
  },
  button: {
    padding: 15,
    borderRadius: 50,
    width: 200,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DarkModeGPT2;
