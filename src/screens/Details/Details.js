import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import MainNav from '../../components/MainNav/MainNav';
import Accordion from '../../components/Accordion/Accordion';
import { Icon } from 'native-base';

export default class Details extends Component {
    state = {
        currentImage: {},
    }
    static navigationOptions = ({ navigation, screenProps }) => {
        return {
            headerTitle:
                <MainNav
                    title="Details"
                    navigation={navigation}
                    screenProps={screenProps} />
        }
    }
    render() {
        const { params } = this.props.navigation.state;
        let content = null;
        if (this.props.navigation.state.params) {
            content = (
                <View style={styles.Inner}>
                    <View style={styles.ActionButtons}>
                        <TouchableOpacity style={[styles.ActionButton, styles.WishButton]}>
                            <Text style={styles.ButtonText}>ADD TO WISH LIST</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.ActionButton, styles.CartButton]}>
                            <Text style={styles.ButtonText}>ADD TO CART</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Content}>
                        <View style={styles.ImageInfo}>
                            <View style={styles.ImageContainer}>
                                <Image style={styles.Image} source={params.imageSrc} />
                            </View>
                            <View style={styles.InfoContainer}>
                                <Text style={styles.ItemName}>{params.itemName}</Text>
                                <Text style={styles.Price}>${params.price.toFixed(2)}</Text>
                            </View>
                        </View>

                        <Accordion title = "Description">
                            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis at incidunt eveniet suscipit libero quis cupiditate, sint in fugiat asperiores veritatis ex ab delectus quod accusantium reprehenderit sed earum dolore.</Text>
                        </Accordion>
                        
                    </View>
                </View>
            );
        }
        return (
            <ScrollView style={styles.Details}>
                {content}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    Details: {
        flex: 1,
    },
    Inner: {
        flex: 1,
    },
    ImageContainer: {
        backgroundColor: '#f8f8f8',
        height: 300
    },
    Image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    ActionButtons: {
        flexDirection: 'row',
        backgroundColor: '#000',
        paddingVertical: 12,
    },
    ActionButton: {
        width: '50%',
        paddingHorizontal: 5
    },
    ButtonText: {
        color: '#fff',
        textAlign: 'center',
        paddingHorizontal: 8,
        paddingVertical: 24,
        borderWidth: 1,
        borderColor: '#fff',
    },
    Content: {
        paddingHorizontal: 5,
    },
    ImageInfo: {
        borderRadius: 5,
        backgroundColor: '#fff'
    },
    InfoContainer: {
        paddingHorizontal: 12,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ItemName: {
        fontWeight: 'bold',
        fontSize: 16
    },
    Price: {
        backgroundColor: '#56d7d9',
        color: '#fff',
        padding: 8,
        fontWeight: 'bold',
        borderRadius: 2
    },

});