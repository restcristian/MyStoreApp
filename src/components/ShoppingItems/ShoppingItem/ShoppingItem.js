import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableNativeFeedback } from 'react-native';

const ShoppingItem = (props) => {
    return (
        <View style={styles.ShoppingItem}>
            <TouchableNativeFeedback onPress = {props.onPressItem}>
                <View style={styles.Inner}>
                    <View style={styles.ImageContainer}>
                        <Image style={styles.Image} source={props.imageSrc} />
                    </View>
                    <View style={styles.Info}>
                        <Text style = {styles.ItemName}>{props.itemName}</Text>
                        <Text>${props.price.toFixed(2)}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
};

const styles = StyleSheet.create({
    ShoppingItem: {
        width: '50%',
        alignItems: 'center',
        padding: 10,
    },
    Inner: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 10
    },
    ImageContainer: {
        height: 200,
        overflow: 'hidden'
    },
    Image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    Info: {
        backgroundColor: '#fff',
        alignItems:'center',
        padding:12
    },
    ItemName:{
        fontWeight:'bold'
    }

});
export default ShoppingItem;