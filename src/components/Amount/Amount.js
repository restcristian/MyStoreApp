import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';

const Amount = (props) => {
    return (
        <Modal
            animationType='slide'
            onRequestClose={() => alert('Modal Closed')}
            transparent={true}
            visible={props.isModalOpen} >
            <View style={styles.Inner}>
                <View style={styles.Content}>
                    <Text style={styles.Title}>How many?</Text>
                    <View style={styles.ActionsContainer}>
                        <TouchableOpacity onPress={props.onRemoveItem}>
                            <Text style={styles.ButtonTxt}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.AmountTxt}>{props.amount}</Text>
                        <TouchableOpacity onPress={props.onAddItem}>
                            <Text style={styles.ButtonTxt}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress = {props.onClose}>
                            <Text style={styles.ConfirmButtonTxt}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    Inner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Content: {
        width: '80%',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 2,
        position: 'relative',
        padding: 12,
        borderRadius: 5
    },
    Title: {
        fontSize: 17
    },
    ActionsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    AmountTxt: {
        fontWeight: 'bold',
        fontSize: 18
    },
    ButtonTxt: {
        padding: 12,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#56d7d9'
    },
    ConfirmButtonTxt:{
        backgroundColor:'#56d7d9',
        color:'#fff',
        paddingHorizontal:24,
        paddingVertical:12
    }
});

export default Amount;