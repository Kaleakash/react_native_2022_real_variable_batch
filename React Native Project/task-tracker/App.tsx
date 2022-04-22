import { useState,useRef } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View,Alert, SafeAreaView } from 'react-native';
import AddTask  from './components/AddTast';
import styles from './styles/baseStyle';
import DisplayTask from './components/DisplayTask';
export default function App() {
  const [tasks,setTask]=useState<string[]>([]);

  const receiveAddTaskValue=(tasks:string[])=> {
      setTask(tasks);
  }

  const deletTaskReceive=(deleteTask:any)=> {
      Alert.alert("warining","Do you want to delete the task",[{text:"Yes",onPress:()=> {
        setTask(previouTask=>previouTask.filter(e=>e!=deleteTask));  
      } },{text:"Cancel"}])
   
  }
  return (
    <SafeAreaView style={styles.container}>
            <AddTask passTaskToParent={receiveAddTaskValue}></AddTask>
            <DisplayTask taskDetails={tasks} deleteTask={deletTaskReceive}></DisplayTask>
            
    </SafeAreaView> 
  );
}
