import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Home extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header:null
        }
    }
    render() {
        return (
            <View>
                <Text>Login</Text>
            </View>
        )
    }

}