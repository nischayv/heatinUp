import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight
} from 'react-native';
import { Button } from 'native-base';

const Login = ({styles, usernameError, setUsername, nextPage}) => {
    return (
        <View style={styles.mainView}>
            <Text style={{width: 300, textAlign: 'center'}}>{usernameError}</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Type your username!"
                onChangeText={(text) => setUsername(text)}
            />
            <View style={{width: 300, paddingTop: 10}}>
                <Button block large style={styles.button} onPress={nextPage}>Begin Tracking</Button>
            </View>
        </View>
    );
};

export default Login;