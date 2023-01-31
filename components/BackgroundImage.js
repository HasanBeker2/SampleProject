import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';

const BackgroundImage = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.image}
                source={require('../img/backgroundImage2.jpg')}
                resizeMode="cover"
                >
                <Text style={styles.title}>
                    Little Lemon, your local Mediterranean Bistro
                </Text>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({

    image: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        padding: 24,
        marginTop: 25,
        backgroundColor: '#fff',
    },
    title: {
        marginTop: 16,
        paddingVertical: 10,
        color: '#333333',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default BackgroundImage;