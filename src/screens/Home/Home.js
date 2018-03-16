import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Item, Input, Icon } from 'native-base';
import MainNav from '../../components/MainNav/MainNav';
import Header from '../../components/Header/Header';
import ShoppingItems from '../../components/ShoppingItems/ShoppingItems';

export default class Home extends Component {
    state = {
        items: [
            {
                itemName: 'Red Sweater',
                imageSrc: require('../../assets/imgs/item1.png'),
                price:12.00
            },
            {
                itemName: 'Blue Shirt',
                imageSrc: require('../../assets/imgs/item1.png'),
                price:15.00
            },
            {
                itemName: 'Yellow Pants',
                imageSrc: require('../../assets/imgs/item1.png'),
                price:20.00
            },
            {
                itemName: 'Red Scarf',
                imageSrc: require('../../assets/imgs/item1.png'),
                price:25.00
            }],

        popularItems: [
            {
                itemName: 'Red Sweater',
                imageSrc: require('../../assets/imgs/item1.png'),
                price:12.00
            },
            {
                itemName: 'Blue Shirt',
                imageSrc: require('../../assets/imgs/item1.png'),
                price:15.00
            },
            {
                itemName: 'Yellow Pants',
                imageSrc: require('../../assets/imgs/item1.png'),
                price:20.00
            },
            {
                itemName: 'Red Scarf',
                imageSrc: require('../../assets/imgs/item1.png'),
                price:25.00
            }
        ]
    };
    static navigationOptions = ({ navigation, screenProps }) => {
        return {
            headerTitle: <MainNav
                title="MyStore"
                navigation={navigation}
                screenProps={screenProps} />
        }
    }
    filterItems = (text) => {
        let pattern = new RegExp(text);
        currentItems = [...this.state.popularItems];
        filteredItems = currentItems.filter((item, idx) => {
            return pattern.test(item.itemName);
        });
        if (text.trim() === '') {
            this.setState({ popularItems: this.state.items })
        } else {
            this.setState({ popularItems: filteredItems });
        }

    }
    render() {
        return (
            <ScrollView style={styles.Home}>
                <Header />
                <View style={styles.Content}>
                    <Item
                        style={styles.SearchItem}
                        rounded>
                        <Icon name="search" />
                        <Input placeholder="Search" onChangeText={this.filterItems} />
                    </Item>
                    <View>
                        <Text style={styles.HeaderTitle}>OUR POPULAR PRODUCTS</Text>
                    </View>
                    <ShoppingItems navigation = {this.props.navigation} items={this.state.popularItems} />
                    <TouchableOpacity>
                        <Text></Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.flatten({
    Home: {
        flex: 1
    },
    Content: {
        paddingHorizontal: 24,
    },
    SearchItem: {
        paddingHorizontal: 10,
        marginVertical: 24,
    },
    HeaderTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    }

})