import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View,Alert } from 'react-native';
import AddTask  from './components/AddTast';
import styles from './styles/baseStyle';
import DisplayTask from './components/DisplayTask';
export default function App() {
  const [tasks,setTask]=useState<string[]>([]);
 const receiveAddTaskValue=(tasks:string[])=> {
    //tasks.forEach(t=>console.log(t));
    setTask(tasks);
 }

  return (
    <View style={styles.container}>
        <AddTask passTaskToParent={receiveAddTaskValue}></AddTask>
        <DisplayTask taskDetails={tasks}></DisplayTask>
    </View> 
  );
}
