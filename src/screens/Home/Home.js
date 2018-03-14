import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainNav from '../../components/MainNav/MainNav';

export default class Home extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <MainNav title="HomeScreen"  navigation = {navigation} />
        }
    }
    render() {
        return (
            <View>
                <Text>Home Screen</Text>
            </View>
        );
    }
}