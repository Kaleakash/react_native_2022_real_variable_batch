import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles/baseStyle";
export default function AddTask(props:any) {
    const [task,setTask]=useState<string>("");
    const [taskDetails,setTaskDetails]=useState<string[]>([]);
    const handleTask=(data:string)=> {
        setTask(data);
    }
    const addTask= ()=> {
      setTaskDetails(previousTask=>[...previousTask,task]);   // using spread operator we are adding new task.
      setTask("");
      Alert.alert("Info","Task Added successfully");
      props.passTaskToParent(taskDetails);
    }
    return(
        <View>
            <View style={styles.inputView}>
     <TextInput placeholder='Enter your task' style={styles.inputText} value={task} onChangeText={handleTask} 
     keyboardType={"default"}/>
     </View>
        <TouchableOpacity onPress={addTask} >
             <Text style={styles.myButton}>Add Task</Text>
        </TouchableOpacity>
    </View>
    )
}
