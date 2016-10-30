import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
import { Button } from 'native-base';

const Login = ({styles, username, setUsername}) => {
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
                onChangeText={(text) => setUsername(text)}
            />
            <View style={{width: 300, paddingTop: 10}}>
                <Button block large style={styles.button}>Begin Tracking</Button>
            </View>
            <View style={{width: 300, paddingTop: 10}}>
                <Text>{username}</Text>
            </View>
        </View>
    );
};

export default Login;