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
            alert('deleted token');
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
                        width: 200,
                        color: 'white',
                        fontSize: 18,
                        fontWeight: 'bold',
                        paddingLeft: 5,
                        paddingTop: 3
                    }}>Logout</Text>
            </TouchableHighlight>
        );
    }
}