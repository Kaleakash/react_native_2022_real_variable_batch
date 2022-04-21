import { useState } from "react";
import { TouchableOpacity, View,Text, Alert } from "react-native";


export default function DeleteTask(props:any) {
    //const [newDeleteTask,setNewDeletedTask]=useState<string[]>();
    const deleteTask=()=> {
        console.log(props.deleteTask[0]+" "+props.deleteItemInfo);
        //Alert.alert("warning","Info")
        let newTask = props.deleteTask.filter((e:any)=> e != props.deleteItemInfo);
        //setNewDeletedTask(newTask);
        props.deletedTaskPassToDisplay(newTask);
    }

    return(
        <View>
            <TouchableOpacity onPress={deleteTask}><Text>Hi</Text></TouchableOpacity>
        </View>
    )

}