import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

const Task = (props) => {
    return (
        <View style={styles.item}>
                <Text style={styles.itemText}>{props.text}</Text>
                <TouchableOpacity onPress={props.handlePress}>
                    <MaterialIcons name="delete" size={20}/>
                </TouchableOpacity>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    itemText: {
        fontSize: 18,
    }
});

export default Task;