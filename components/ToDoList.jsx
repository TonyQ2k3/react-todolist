import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, Image } from "react-native";
import React, { useState } from 'react';
import Task from './Task';

export default function ToDoList() {
    const [task, setTask] = useState('');
    const [doList, setDoList] = useState([]);

    const handleAdd = () => {
        Keyboard.dismiss();
        setDoList([...doList, task]);
    }

    const completeTask = (index) => {
        let listCopy = [...doList];
        listCopy.splice(index, 1);
        setDoList(listCopy);
    }

    const handleReset = () => {
        setDoList([]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>📝 To-do List</Text>
            <View style={styles.inputContainer}> 
                <Text style={styles.inputHeader}>Write you tasks here: </Text>
                <View style={styles.addTaskContainer}>
                    <TextInput 
                    style={styles.input} 
                    onChangeText={text => setTask(text)} />
                    <TouchableOpacity onPress={handleAdd}>
                        <View style={styles.addWrapper}>
                            <Text style={styles.addText}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={styles.taskDisplay}>
                {
                    doList.length == 0 ? 
                    <Image source={require('../assets/emptyList.png')} style={styles.emptyList} resizeMode="contain"/>
                    :
                    doList.map((item, index) => (
                            <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                                <Task text={item} /> 
                            </TouchableOpacity>
                    ))
                }
            </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
        paddingTop: 40,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inputContainer: {
        marginVertical: 20,
    },
    inputHeader: {
        marginLeft: 15,
        fontSize: 16,
    },
    addTaskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        marginTop: 7,
        paddingVertical: 10,
        paddingHorizontal: 15,
        width: 246,
        height: 45,
        borderColor: '#C0C0C0',
        borderRadius: 60,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,  
        elevation: 5,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#55BCF6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,
    },
    addText: {
        fontSize: 30,
        color: '#FFF',
    },
    taskDisplay: {
        flex: 1,
        padding: 10,
    },
    emptyList: {
        width: 350,
        position: 'relative',
        top: -75,
    },
});