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
import HomeContainer from '../containers/HomeContainer';


export default class LoginContainer extends Component {
    constructor() {
        super();
        this.state = {
            username: ''
        };
        this.track = this.track.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    track(text) {

    }

    nextPage() {
        this.props.toRoute({
            name: "Home",
            component: HomeContainer,
            passProps: {
                username: this.state.username
            }
        });
    }

    setUsername(username) {
        this.setState({username});
    }

    render() {
        return <Login
            styles={styles}
            setUsername={this.setUsername}
            nextPage={this.nextPage}
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
