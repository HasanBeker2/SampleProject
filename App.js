import React, { useState } from 'react';
import { View, Text,Button } from 'react-native';
import styles from './styles';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (value) => {
    setInput(input + value);
  };

  const handleClearPress = () => {
    setInput('');
    setResult('');
  };

  const handleEqualPress = () => {
    setResult(eval(input));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <Button title="1" onPress={() => handleButtonPress('1')} />
          <Button title="2" onPress={() => handleButtonPress('2')} />
          <Button title="3" onPress={() => handleButtonPress('3')} />
        </View>
        <View style={styles.buttonRow}>
          <Button title="4" onPress={() => handleButtonPress('4')} />
          <Button title="5" onPress={() => handleButtonPress('5')} />
          <Button title="6" onPress={() => handleButtonPress('6')} />
        </View>
        <View style={styles.buttonRow}>
          <Button title="7" onPress={() => handleButtonPress('7')} />
          <Button title="8" onPress={() => handleButtonPress('8')} />
          <Button title="9" onPress={() => handleButtonPress('9')} />
        </View>
        <View style={styles.buttonRow}>
          <Button title="C" onPress={handleClearPress} />
          <Button title="0" onPress={() => handleButtonPress('0')} />
          <Button title="=" onPress={handleEqualPress} />
        </View>
        <View style={styles.buttonRow}>
          <Button title="+" onPress={() => handleButtonPress('+')} />
          <Button title="-" onPress={() => handleButtonPress('-')} />
          <Button title="*" onPress={() => handleButtonPress('*')} />
          <Button title="/" onPress={() => handleButtonPress('/')} />
        </View>
      </View>
    </View>
  );
};





export default App;