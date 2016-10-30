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
    constructor() {
        super();
        this.state = {
            username: ''
        };
        this.track = this.track.bind(this);
        this.setUsername = this.setUsername.bind(this);
    }

    track(text) {

    }

    setUsername(username) {
        this.setState({username});
    }

    render() {
        return <Login
            styles={styles}
            username={this.state.username}
            setUsername={this.setUsername}
        />
    }
}

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
