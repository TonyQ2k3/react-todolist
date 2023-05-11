import { StyleSheet, View } from "react-native";
import ToDoList from './components/ToDoList';

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