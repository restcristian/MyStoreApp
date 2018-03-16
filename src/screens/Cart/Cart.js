import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import { Icon } from 'native-base';
import MainNav from '../../components/MainNav/MainNav';

export default class Cart extends Component {
    static navigationOptions = ({ navigation, screenProps }) => {
        return {
            headerTitle:
                <MainNav
                    title="Cart"
                    navigation={navigation}
                    screenProps={screenProps} />
        }
    }
    render() {
        return (
            <ScrollView style={styles.Cart}>
                <View style={styles.Inner}>
                    <View>
                        <View style={styles.Item}>
                            <View style={styles.ImageContainer}>
                                <Image style={styles.Image} source={require('../../assets/imgs/item1.png')} />
                            </View>
                            <View style={styles.Info}>
                                <Text style={styles.ItemTitle}>Red Sweater</Text>
                                <View style={styles.Tags}>
                                    <Text>Tag1</Text>
                                </View>
                            </View>
                            <View>
                                <Text>$12.55</Text>
                            </View>
                            <View style={{ position: 'absolute', top: 8, right: 12 }}>
                                <TouchableOpacity>
                                    <Icon name="close" style={{ fontSize: 18, color: '#d3d5d6' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.Item}>
                            <View style={styles.ImageContainer}>
                                <Image style={styles.Image} source={require('../../assets/imgs/item1.png')} />
                            </View>
                            <View style={styles.Info}>
                                <Text style={styles.ItemTitle}>Yellow Pants</Text>
                                <View style={styles.Tags}>
                                    <Text>Tag1</Text>
                                </View>
                            </View>
                            <View>
                                <Text>$12.55</Text>
                            </View>
                            <View style={{ position: 'absolute', top: 8, right: 12 }}>
                                <TouchableOpacity>
                                    <Icon name="close" style={{ fontSize: 18, color: '#d3d5d6' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style = {styles.Overall}>
                        <Text style = {styles.OrderText}>ORDER TOTAL:</Text>
                        <Text style = {styles.TotalText}>$0.00</Text>
                    </View>
                    <View style = {styles.Footer}>
                        <TouchableOpacity>
                            <Text style = {styles.CheckoutText}>CHECKOUT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    Cart: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    },
    Inner: {
        flex: 1,
        paddingHorizontal: 12
    },
    Item: {
        marginVertical: 10,
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative'
    },
    ImageContainer: {
        width: 60,
        height: 60,
        backgroundColor: '#e8e8e8',
        borderRadius: 30,
    },
    Image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    Info: {
        paddingHorizontal: 12
    },
    ItemTitle: {
        fontWeight: 'bold',
        fontSize: 15
    },
    Tags: {
        flexDirection: 'row'
    },
    Overall:{
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:24,
        paddingVertical:12,
        marginTop:12
    },
    OrderText:{
        fontWeight:'bold'
    },
    TotalText:{
        color:'red'
    },
    Footer:{
        marginVertical:12,
        alignItems:'center'
    },
    CheckoutText:{
        paddingVertical:8,
        paddingHorizontal:24,
        borderWidth:2
    }
});