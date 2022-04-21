import { useState } from "react";
import styles from '../styles/baseStyle';
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DeleteTask from "./DeleteTask";


export default function DisplayTask(props:any) {

    const deleteTask= (data:any)=> {
        props.deleteTask(data);
    }
    return(
        <View>
               <FlatList
                data={props.taskDetails}
             keyExtractor={(item,index)=> {
             return index.toString()
             }}
        renderItem={(tt)=> {
return  <View style={styles.task}>
             <TouchableOpacity onPress={()=>deleteTask(tt.item)}>
             <Text >{tt.item}</Text>
             </TouchableOpacity>
            
            {/* <DeleteTask deleteTask = {props.taskDetails} deleteItemInfo={tt.item} ></DeleteTask>     */}
            
        </View> 
     }}  
    />

        </View>
    )
}


