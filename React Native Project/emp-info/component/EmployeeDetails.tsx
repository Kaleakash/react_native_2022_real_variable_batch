import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
export default function EmployeeDetails() {
    const [id,setId]=useState<any>("");
    const [name,setName]=useState<any>("");
    const [age,setAge]=useState<any>("");
    const [result,setResult]=useState(false);
    const [info,setInfo]=useState("")
    const handleButton=()=> {
        setInfo(`Your id is ${id} Name is ${name} and age is ${age}`);
        setId("")
        setName("")
        setAge("")
        setResult(true);
    }
    
    let dd = <View><Text>Hello</Text></View>;
    return(
        
        <View>
            <Text style={styles.text}>Enter Your Id</Text>
            <TextInput style={styles.input}
                placeholder="100"
                keyboardType="numeric"
                onChangeText={(v)=>setId(v)}
                value={id}
            />
            <Text style={styles.text}>Enter Your Name</Text>
            <TextInput style={styles.input}
                placeholder="Ravi"
                keyboardType="default"
                onChangeText={(v)=>setName(v)}
                value={name}
            />
            <Text style={styles.text}>Enter Your Age</Text>
            <TextInput style={styles.input}
                placeholder="18"
                keyboardType="numeric"
                onChangeText={(v)=>setAge(v)}
                value={age}
            />
            <Button title="Display Information" onPress={handleButton}/>
            <Text style={styles.result}>
                {result ? info :dd }
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        borderWidth:1,
        borderColor:'gray',
        padding:2,
        width:200,
        margin:5,
        fontSize:20,
        height:30,
        borderRadius:10
    },
    text: {
        fontWeight:"bold",
        fontSize:20      
    },
    result: {
        fontSize:20,
        color:'red',
        fontWeight:'bold',
        padding:5
    }
})


