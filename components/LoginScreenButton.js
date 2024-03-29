import React, { useState } from 'react';
import {
    ScrollView, Text, StyleSheet,
    TextInput, KeyboardAvoidingView,
    Platform, Pressable
} from 'react-native';

export default function LoginScreenButton() {

    const [loggedIn, onLogin] = useState(false);
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView keyboardDismissMode="on-drag">
                <Text style={styles.headerText}>Welcome to Little Lemon</Text>

                {loggedIn && (
                    <Text style={styles.headerText}>You are logged in!</Text>
                )}

                {!loggedIn && (
                    <>
                        <Text style={styles.regularText}>Login to continue </Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={onChangeEmail}
                            placeholder={'email'}
                            keyboardType={"email-address"}
                        />
                        <TextInput
                            secureTextEntry={true}
                            style={styles.input}
                            value={password}
                            onChangeText={onChangePassword}
                            placeholder={'password'}
                        />

                    </>
                )}
                <Pressable
                    style={styles.button}
                    onPress={() =>( onLogin(!loggedIn)
                    )}>
                    <Text
                        style={styles.buttonText}>
                        {loggedIn ? 'Login Page' : 'Log in'}
                    </Text>
                </Pressable>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: 'EDEFEE',
        backgroundColor: '#F4CE14',
    },
    button: {
        fontSize: 22,
        padding: 10,
        marginVertical: 8,
        margin: 100,
        backgroundColor: '#EE9972',
        borderColor: '#EE9972',
        borderWidth: 2,
        borderRadius: 50,
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 25,
    },
});

