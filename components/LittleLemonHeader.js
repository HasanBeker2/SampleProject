import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
    return (
        <View
            style={{
                //flex: 0.2,
                backgroundColor: '#F4CE14',
                alignItems: 'center'
            }}>
            <Text
                style={{
                    padding: 50,
                    fontSize: 20,
                    color: 'black',
                    
                }}>
                Welcome to Little Lemon
            </Text>
        </View>
    );
}