import { useState } from "react";
import styles from '../styles/baseStyle';
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DeleteTask from "./DeleteTask";


export default function DisplayTask(props:any) {
    return(
        <View>
               <FlatList
                data={props.taskDetails}
             keyExtractor={(item,index)=> {
             return index.toString()
             }}
        renderItem={(tt)=> {
return  <View style={styles.task}>
            
            <Text >{tt.item}</Text>
            <DeleteTask deleteTask = {props.taskDetails} deleteItemInfo={tt.item}></DeleteTask>    
            
        </View> 
     }}  
    />

        </View>
    )
}


