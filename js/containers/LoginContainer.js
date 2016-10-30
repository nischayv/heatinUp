import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image
} from 'react-native';
import Login from '../components/Login';


export default class LoginContainer extends Component {
    render() {
        return (
            <Login/>
        );
    }
}
