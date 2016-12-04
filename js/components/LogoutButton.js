import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    TouchableHighlight
} from 'react-native';

export default class LogoutButton extends Component  {

    constructor() {
        super();
    }

    logout = async () => {
        try {
            await AsyncStorage.removeItem('json-token');
            this.props.toBack();
        } catch (error) {
            console.log('AsyncStorage error: ' + error.message);
        }
    };

    render (){
        return (
            <TouchableHighlight underlayColor="transparent" onPress={this.logout}>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 'bold',
                        paddingLeft: 5,
                        paddingTop: 3
                    }}>Back</Text>
            </TouchableHighlight>
        );
    }
}