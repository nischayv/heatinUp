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
            username: '',
            usernameError: ''
        };
        this.setUsername = this.setUsername.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    nextPage() {
        if(this.state.username) {
            this.props.toRoute({
                name: "Home",
                component: HomeContainer,
                passProps: {
                    username: this.state.username
                }
            });
        } else {
            this.setState({usernameError: 'Please enter a username'});
        }
    }

    setUsername(username) {
        if(this.state.usernameError) {
            this.setState({usernameError: ''});
        }
        this.setState({username});
    }

    render() {
        return <Login
            styles={styles}
            usernameError={this.state.usernameError}
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
    },
    mainView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
