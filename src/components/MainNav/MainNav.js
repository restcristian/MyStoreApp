import React, { Component } from 'react';
import { Container, Header, Icon, Button, Left, Right, Body, Title } from 'native-base';
import { View, StyleSheet } from 'react-native';

export default class MainNav extends Component {


    render() {

        return (

            <View style={styles.Header}>
                <Header style={styles.HeaderWrapper} androidStatusBarColor="#000">
                    <Left>
                        <Button
                            transparent
                            onPress={this.props.screenProps.onOpenDrawer}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{this.props.title}</Title>
                    </Body>
                    <Right>
                        <View style={styles.Right}>
                            <Button
                                onPress={() => this.props.navigation.navigate('Details')}
                                transparent>
                                <Icon ios="ios-cart" android="md-cart" />
                            </Button>
                            <Button
                                onPress={() => this.props.navigation.navigate('Login')}
                                transparent>
                                <Icon ios="ios-pricetag" android="md-pricetag" />
                            </Button>
                        </View>
                    </Right>
                </Header>
            </View>

        );
    }
}

const styles = StyleSheet.flatten({
    Header: {
        width: '100%'
    },
    HeaderWrapper: {
        backgroundColor: '#000'
    },
    Right: {
        flexDirection: 'row'
    }
})