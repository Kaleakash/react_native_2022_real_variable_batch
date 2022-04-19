import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
export default function EmployeeView() {
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
    {id:20,name:"Raghu",age:26}
])
  return(
    //     <View>
    //         {
    //         employees.map((emp,i)=> {
    // return <Text key={emp.id} style={styles.subContainer}>Id is {emp.id} Name :{emp.name} Age is {emp.age}</Text>
    //         })
    //     }
    //     </View>


        <View>
            <ScrollView>
            {
            employees.map((emp,i)=> {
                return <Text key={emp.id} style={styles.subContainer}>Id is {emp.id} Name :{emp.name} Age is {emp.age}</Text>
            })
        }
        </ScrollView>
        </View>
    )
} 
const styles = StyleSheet.create({
    subContainer: {
        fontSize:25,
        paddingTop:10,
        margin:10,
        backgroundColor:'orange',
        borderRadius:10,
        color:'white'      
    }
})