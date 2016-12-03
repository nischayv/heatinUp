import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    AsyncStorage
} from 'react-native';
import Login from '../components/Login';
import HomeContainer from '../containers/HomeContainer';


export default class LoginContainer extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            usernameError: '',
            password: ''
        };
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    login() {
        if(this.state.username && this.state.password) {
            fetch('https://heatinup.herokuapp.com/api/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    if(responseJson.token === undefined) {
                        return Promise.reject(responseJson.message);
                    }
                    this.saveToken('json-token', this.state.username);
                    this.props.toRoute({
                        name: "Home",
                        component: HomeContainer,
                        passProps: {
                            username: this.state.username
                        }
                    });
                })
                .catch((error) => {
                    alert('Login failed:' +  error);
                });
        } else {
            this.setState({usernameError: 'Please enter username and password'});
        }
    }

    register() {
        if(this.state.username && this.state.password) {
            fetch('https://heatinup.herokuapp.com/api/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    if(responseJson.token === undefined) {
                        return Promise.reject(responseJson.message);
                    }
                    this.saveToken('json-token', this.state.username);
                    this.props.toRoute({
                        name: "Home",
                        component: HomeContainer,
                        passProps: {
                            username: this.state.username
                        }
                    });
                })
                .catch((error) => {
                    alert('Account creation failed. Please try again:'+  error);
                });
        } else {
            this.setState({usernameError: 'Please enter username and password'});
        }
    }

    saveToken = async (item, selectedValue) => {
        try {
            await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {
            console.log('AsyncStorage error: ' + error.message);
        }
    };

    getToken = async () => {
        try {
            return await AsyncStorage.getItem('json-token');

        } catch (error) {
            console.log('AsyncStorage error: ' + error.message);
        }
    };

    setUsername(username) {
        if(this.state.usernameError) {
            this.setState({usernameError: ''});
        }
        this.setState({username});
    }

    setPassword(password) {
        if(this.state.usernameError) {
            this.setState({usernameError: ''});
        }
        this.setState({password});
    }

    componentWillMount() {
        this.getToken()
            .then(token => {
                alert(token);
                if(token !== null) {
                    this.props.toRoute({
                        name: "Home",
                        component: HomeContainer,
                        passProps: {
                            username: token
                        }
                    });
                }
            });
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
