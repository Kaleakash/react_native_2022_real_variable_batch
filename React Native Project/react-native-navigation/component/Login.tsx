import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Login(props:any) {
const [name,setName]=useState("");
const [pass,setPass]=useState("");
const checkUser=()=> {
    if(name=="Raj" && pass=="123"){
            Alert.alert("info","successfully login")
            props.navigation.push("home")
    }else {
        Alert.alert("info","failure try once again")
    }
    resetValue();
}
const resetValue= ()=> {
    setName("");
    setPass("");
}
    return(
    <View style={styles.container}>
        <Text>Login </Text>
        <TextInput style={styles.textInput}
        value={name}
        onChangeText={v=>setName(v)}
        placeholder="Enter name"
        />
        <TextInput style={styles.textInput}
        value={pass}
        onChangeText={v=>setPass(v)}
        placeholder="Enter Password"
        secureTextEntry={true}
        />
        <TouchableOpacity onPress={checkUser}>
            <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetValue}>
            <Text style={styles.text}>Reset</Text>
        </TouchableOpacity>
    </View>)
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput: {
        width:200,
        borderWidth:1,
        borderColor:'red',
        padding:5,
        margin:6,
        fontSize:22
    },
    text: {
        borderRadius:10,
        width:120,
        borderWidth:1,
        backgroundColor:'#abcff1',
        margin:5,
        padding:6,
        fontSize:24,
        textAlign:'center'
    }
  });