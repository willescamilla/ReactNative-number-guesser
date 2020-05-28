import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
        shadowRadius: 8,
        shadowOpacity: 26,
        elevation: 10,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
});

export default Card;