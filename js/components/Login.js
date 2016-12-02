import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight
} from 'react-native';
import { Button } from 'native-base';

const Login = ({styles, usernameError, setUsername, setPassword, login, register}) => {
    return (
        <View style={styles.mainView}>
            <Text style={styles.text}>{usernameError}</Text>
            <TextInput
                style={styles.textInput}
                placeholder="username"
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={styles.textInput}
                placeholder="password"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />
            <View style={{width: 300, paddingTop: 10}}>
                <Button block large style={styles.button} onPress={login}>Login</Button>
            </View>
            <View style={{width: 300, paddingTop: 10}}>
                <Button block large style={styles.button} onPress={register}>Register</Button>
            </View>
        </View>
    );
};

export default Login;