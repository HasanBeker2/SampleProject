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
                    padding: 40,
                    fontSize: 40,
                    color: 'black',
                    fontWeight:'bold'

                }}>
                Little Lemon
            </Text>
        </View>
    );
}