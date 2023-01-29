import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function WelcomeScreen() {
    return (
        <ScrollView
            indicatorStyle={"white"}
            style={{flex: 1}}>
            <Text
                style={{
                    padding: 20,
                    fontSize: 30,
                    color: 'white',
                    textAlign: 'center',
                }}>
                Welcome to Little Lemon
            </Text>
            <Text
                style={{
                    paddingHorizontal: 35,
                    paddingVertical: 20,
                    fontSize: 30,
                    color: 'white',
                    textAlign: 'center',
                    marginVertical: 8,


                }}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
        </ScrollView>
    );
}