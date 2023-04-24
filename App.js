import { StyleSheet, Text, View } from "react-native";
import { useState } from 'react';
import ToDoList from './components/ToDoList';
//import Task from './Task';

export default function Page() {
  return (
    <View style={styles.container}>
      <ToDoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#F9F9F9',
      flex: 1,
  },
});