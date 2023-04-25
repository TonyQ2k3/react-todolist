import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Platform, TouchableOpacity, ScrollView, Keyboard } from "react-native";
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
            <ScrollView
                contentContainerStyle={{flexGrow: 1}}
                keyboardShouldPersistTaps='handled'
            >
                <View style={styles.tasksWrapper}>
                    <Text style={styles.sectionTitle}>📝 To-do List</Text>
                    {/*Display all tasks*/}
                    <View style={styles.items}>
                    {
                        doList.map((item, index) => {
                            return (
                                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                                    <Task text={item} /> 
                                </TouchableOpacity>
                            )
                        })
                    }
                    </View>
                </View>
            </ScrollView>

            {/*Add a new task*/}
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.addTaskWrapper}
                >
                <TextInput 
                    style={styles.input} 
                    placeholder="Write your task"
                    onChangeText={text => setTask(text)}></TextInput>
                <TouchableOpacity onPress={handleAdd}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },

    tasksWrapper: {
        paddingTop: 40,
        paddingHorizontal: 20,
    },

    sectionTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    items: {
        marginTop: 25,
    },

    addTaskWrapper: {
        position: 'absolute',
        bottom: 25,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        width: 246,
        height: 45,
        borderColor: '#C0C0C0',
        borderRadius: 60,
        backgroundColor: '#FFFFFF',
        // Add shadow
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
});