import { useState } from "react";
import { View,FlatList,Text, StyleSheet, Button, TouchableOpacity} from "react-native";
export default function EmployeeFlatList() {
    const [employees,setEmployee]=useState([
        {id:1,name:"Ravi",age:21},
        {id:2,name:"Ramesh",age:27},
        {id:3,name:"Rajesh",age:24},
        {id:4,name:"Ajay",age:29},
        {id:5,name:"Vijay",age:22},
        {id:6,name:"Mahesh",age:23},
        {id:7,name:"Lokesh",age:28},
        {id:8,name:"Ram",age:23},
        {id:9,name:"Rajev",age:24},
        {id:10,name:"Raghu",age:26},
        {id:11,name:"Ravi",age:21},
        {id:12,name:"Ramesh",age:27},
        {id:13,name:"Rajesh",age:24},
        {id:14,name:"Ajay",age:29},
        {id:15,name:"Vijay",age:22},
        {id:16,name:"Mahesh",age:23},
        {id:17,name:"Lokesh",age:28},
        {id:18,name:"Ram",age:23},
        {id:19,name:"Rajev",age:24},
        {id:20,name:"Raghu",age:29}
    ])
    const deleteItem=(id:number)=> {
        //console.log("event fired..."+id);
        setEmployee(()=> {
                return employees.filter(emp=>emp.id!= id);
        })
    }
    return(
        <View>
            <FlatList
                data={employees}
                keyExtractor={(e,index)=>index.toString()}
                renderItem={(emp)=>{
         return <View>
                {/* <Button title="click here" onPress={()=>{}} color={"red"}></Button>
                <TouchableOpacity><Text style={styles.myButton}>Click Here</Text></TouchableOpacity> */}
                <TouchableOpacity onPress={()=>deleteItem(emp.item.id)} activeOpacity={0.2} delayLongPress={50} 
                style={styles.myButton}>
            <Text style={styles.subContainer}>Id is {emp.item.id} Name {emp.item.name} Age is {emp.item.age}</Text>
                </TouchableOpacity>
                 </View>       
         
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    subContainer: {
        fontSize:20,
        paddingTop:2,
        margin:10,
        color:'white'      
    }
    ,myButton: {
        borderColor:'red',
        borderWidth:5,
        margin:5,
        backgroundColor:'orange',
        borderRadius:10,
    }
})

