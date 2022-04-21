import { useState} from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles/baseStyle";
export default function AddTask(props:any) {
    const [task,setTask]=useState<string>("");
    const [taskDetails,setTaskDetails]=useState<string[]>([]);

    const handleTask=(data:string)=> {
        setTask(data);
    }
    const addTask= ()=> {
     // setTaskDetails(previousTask=>[...previousTask,task]);   // using spread operator we are adding new task.
      setTaskDetails(previousTask=> {
          previousTask=[...previousTask,task];
          props.passTaskToParent(previousTask);     // passing to parent component    
          return previousTask;
      });
     // props.passTaskToParent(taskDetails); 
      setTask("");
      Alert.alert("Info","Task Added successfully");
     
    }
    return(
        <SafeAreaView style={{paddingTop: 150}}>

            <View style={styles.inputView}>
                <TextInput placeholder='Enter your task' style={styles.inputText} value={task} onChangeText={handleTask} 
                keyboardType={"default"}/>
            </View>

        <TouchableOpacity onPress={addTask} >
             <Text style={styles.myButton}>Add Task</Text>
        </TouchableOpacity>
    </SafeAreaView>
    )
}
