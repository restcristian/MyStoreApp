import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ShoppingItem from './ShoppingItem/ShoppingItem';

const ShoppingItems = (props) => {
    let items = props.items.map((item, idx) => {
        return (
            <ShoppingItem
                onPressItem={() => props.navigation.navigate('Details', {
                    itemName: item.itemName,
                    imageSrc: item.imageSrc,
                    price: item.price
                })}
                itemName={item.itemName}
                price={item.price}
                imageSrc={item.imageSrc}
                key={idx} />
        );
    })
    return (
        <View style={styles.ShoppingItems}>
            {items}
        </View>
    )
}

const styles = StyleSheet.create({
    ShoppingItems: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10
    }
});

export default ShoppingItems;