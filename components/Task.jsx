import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>
                <Text style={styles.itemText}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        marginBottom: 20,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#55BCF6',
        borderStyle: 'dotted',
        width: '100%',
        minHeight: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText: {
        fontSize: 18,
    }
});

export default Task;