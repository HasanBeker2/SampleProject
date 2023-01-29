import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
    return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.text}>Little Lemon</Text>
        </View>
    );
}

const headerStyles = StyleSheet.create({
    container: {
        backgroundColor: '#F4CE14',
    },
    text: {
        padding: 40,
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    },

});