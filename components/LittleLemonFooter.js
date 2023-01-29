import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
    return (
        <View
            style={{
                backgroundColor: '#F4CE14',
                alignItems: 'center',
                marginBottom: 5,
            }}>
            <Text
                style={{
                    fontSize: 13,
                    color: 'black',
                }}>
                All rights reserved by Little Lemon, 2022{''}
            </Text>
        </View>
    );
}