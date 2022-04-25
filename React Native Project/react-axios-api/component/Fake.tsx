import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import axios from 'axios';
interface Fake {
    userId:number;
    id:number;
    title:string;
    completed:boolean;
}

export default function Fake(props:any){

const [fakeData,setFakeData]=useState<Fake[]>([]);

const loadData=()=> {
    axios.get("https://jsonplaceholder.typicode.com/todos").
    then(result=>setFakeData(result.data)).
    catch(error=>console.log(error));
}
    return(
        <View>
            <Text>Fake Data</Text>
            <Button title="Load the data" onPress={loadData}></Button>
            <FlatList
            data={fakeData}
            renderItem={(fake)=> (
                <Text style={styles.text}>{fake.item.id} {fake.item.userId} {fake.item.title}</Text>
            )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        width:300,
        borderWidth:1,
        padding:4,
        margin:5,
        fontSize:20,
        borderColor:'red'
    }
})