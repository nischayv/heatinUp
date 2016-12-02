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
            usernameError: '',
            password: '',
            passwordError: ''
        };
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    login() {
        if(this.state.username && this.state.password) {
            this.props.toRoute({
                name: "Home",
                component: HomeContainer,
                passProps: {
                    username: this.state.username
                }
            });
        } else {
            this.setState({usernameError: 'Please enter username and password'});
        }
    }

    register() {
        if(this.state.username && this.state.password) {
            this.props.toRoute({
                name: "Home",
                component: HomeContainer,
                passProps: {
                    username: this.state.username
                }
            });
        } else {
            this.setState({usernameError: 'Please enter username and password'});
        }
    }

    setUsername(username) {
        if(this.state.usernameError) {
            this.setState({usernameError: ''});
        }
        this.setState({username});
    }

    setPassword(password) {
        if(this.state.passwordError) {
            this.setState({passwordError: ''});
        }
        this.setState({password});
    }

    render() {
        return <Login
            styles={styles}
            usernameError={this.state.usernameError}
            setUsername={this.setUsername}
            setPassword={this.setPassword}
            login={this.login}
            register={this.register}
        />
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#5cafec'
    },
    textInput: {
        height: 60,
        width: 300,
        textAlign: 'center',
        fontSize: 22
    },
    text: {
        height: 60,
        width: 300,
        textAlign: 'center',
        fontSize: 22,
        color: 'red'
    }
});
