import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";


export default function StateVariableFun() {

const [name,setName]=useState<string>("Raj");
//const fname = "Ramesh";

    return(
        <View>
            <Text style={styles.textContent}>
            <Text>State Variable in function component</Text>
            <Text> Name is {name}</Text>
            <Button title="Change Name" onPress={()=>setName("Raj Deep")} color="#abcabc"/>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textContent : {
        fontWeight:'bold',
        fontSize:24
    }
})