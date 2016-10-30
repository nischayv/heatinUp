import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
import { Button } from 'native-base';

const Login = () => {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <TextInput
                style={styles.textInput}
                placeholder="Type your username!"
            />
            <View style={{width: 300, paddingTop: 10}}>
                <Button block large style={styles.button}>Begin Tracking</Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#5cafec'
    },
    textInput: {
        height: 60,
        width: 300,
        textAlign: 'center',
        fontSize: 22
    }
});

export default Login;