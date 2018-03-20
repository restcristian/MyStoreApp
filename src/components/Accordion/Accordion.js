import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated, Easing, Dimensions } from 'react-native';
import { Icon } from 'native-base';

export default class Accordion extends Component {
    state = {
        isOpen: false,
        initialHeight: new Animated.Value(0),
        finalHeight: Dimensions.get('window').height
    };

    componentDidMount() {
        console.log('Mount', this.state);
    }
    toggleAccordion = () => {

        this.setState((prevState) => {
            return {
                isOpen: !prevState.isOpen
            };
        }, () => {
            if (!this.state.isOpen) {
                Animated.timing(this.state.initialHeight, {
                    toValue: 0,
                    duration: 250,
                }).start();

            } else {
                Animated.timing(this.state.initialHeight, {
                    toValue: this.state.finalHeight,
                    duration: 500,
                }).start();
            }

        });

    }

    render() {
        return (
            <View style={styles.Accordion}>
                <TouchableWithoutFeedback onPress={this.toggleAccordion} >
                    <View style={styles.AccordionHeader}>
                        {this.state.isOpen ? <Icon name="close" /> : <Icon name="add" />}
                        <Text style={styles.AccordionTitle}>{this.props.title}</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Animated.View
                    ref={(ref) => this._accordionContent = ref}
                    style={[styles.AccordionContent, { maxHeight: this.state.initialHeight }]}>
                    <View style={styles.ContentInner}>
                        {this.props.children}
                    </View>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Accordion: {
        backgroundColor: '#fff',
        marginVertical: 10,
        paddingHorizontal: 12
    },
    AccordionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
       
    },
    AccordionTitle: {
        paddingLeft: 12,
        fontSize: 16
    },
    AccordionContent: {
        paddingHorizontal: 8,
    },
    ContentInner: {
        paddingVertical: 12
    }
})