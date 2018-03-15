import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import { Form, Item, Input } from 'native-base';

export default class Home extends Component {

    state = {
        username: '',
        password: ''
    };

    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        }
    }
    onSignInHandler = () => {
        this.props.navigation.replace('Home');
    }
    onSignUpHandler = () => {
        
    }
    render() {
        return (
            <ImageBackground source={require('../../assets/imgs/loginBg.jpg')} style={styles.Login}>
                <StatusBar backgroundColor="#56d7d9" />
                <Form style={styles.Form}>
                    <Item rounded style={styles.InputItem}>
                        <Input
                            onChangeText={(text) => { this.setState({ username: text }) }}
                            placeholder="Username"
                            style={styles.Input} />
                    </Item>
                    <Item rounded style={styles.InputItem}>
                        <Input
                            onChangeText={(text) => { this.setState({ password: text }) }}
                            placeholder="Password"
                            secureTextEntry
                            style={styles.Input} />
                    </Item>
                </Form>
                <View style={styles.Buttons}>
                    <TouchableOpacity
                        onPress={this.onSignInHandler}
                        style={[styles.Button, styles.ButtonSignIn]}>
                        <Text style={[styles.ButtonText, styles.ButtonTextSignIn]}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {this.onSignUpHandler}
                        style={[styles.Button, styles.ButtonSignUp]}>
                        <Text style={styles.ButtonText}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.flatten({
    Login: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    Form: {
        paddingHorizontal: 24
    },
    InputItem: {
        marginVertical: 12,
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderColor: 'rgba(255,255,255,0.4)',
        paddingHorizontal: 12,
    },
    Input: {
    },
    Buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 35,
        paddingVertical: 24
    },
    Button: {
        width: '50%',
        marginHorizontal: 5,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        borderWidth: 1,
        borderColor: '#000',
        paddingVertical: 12
    },
    ButtonSignIn: {
        borderColor: '#fff'
    },
    ButtonSignUp: {
        backgroundColor: 'rgba(255,255,255,0)'
    },
    ButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center'
    },
    ButtonTextSignIn: {
        color: '#fff'
    }

});