import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, FlatList, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
export default function Product(props:any){
const [pid,setPid]=useState<any>();
const [pname,setPName]=useState<string>();
const [price,setPrice]=useState<any>();
const [url,setUrl]=useState<string>();
const [productData,setProductData]=useState();
const [flag,setFlag]=useState(false);
const storeData=()=> {
    let product = {pid:pid,pname:pname,price:price,url:url}
    axios.post("https://6261976d327d3896e27dd68d.mockapi.io/api/vi/myapi",product).
    then(result=>{console.log(result.data);setFlag(true)}).
    catch(error=>console.log(error)).
    finally(()=>{
        setPName("");
        setPid("");
        setPrice("");
        setUrl("");
    })
}
    useEffect(()=> {
        console.log("Hi")
        //Alert.alert("warning","Hello")
        axios.get("https://6261976d327d3896e27dd68d.mockapi.io/api/vi/myapi").
        then(result=>{setProductData(result.data); }).
        catch(error=>console.log(error)).finally(()=>setFlag(false));
    },[flag])
    return(
        <View>
            <Text style={{color:"red",fontSize:20,textAlign:'center'}}>Add Product</Text>
            <TextInput style={styles.inputtext}
            placeholder="Enter Id"
            value={pid}
            onChangeText={(v)=>setPid(v)}
            />
            <TextInput style={styles.inputtext}
            placeholder="Enter Name"
            value={pname}
            onChangeText={(v)=>setPName(v)}
            />
            <TextInput style={styles.inputtext}
            placeholder="Enter Price"
            value={price}
            onChangeText={(v)=>setPrice(v)}
            />
            <TextInput style={styles.inputtext}
            placeholder="Enter URL"
            value={url}
            selectTextOnFocus={true}
            onChangeText={(v)=>setUrl(v)
            }  
            />
            <TouchableOpacity style={styles.button} onPress={storeData}>
                <Text style={styles.text}>Store Record</Text>
            </TouchableOpacity>
            <FlatList 
            data={productData}
            keyExtractor={(product,index)=>index.toString()}
            renderItem={(product)=> (
                <Text style={styles.textItem}>{product.item.pid} {product.item.pname} {product.item.price} {product.item.url}</Text>
            )} 
            />
        </View>
    )
} 
const styles = StyleSheet.create({
    inputtext: {
        width:200,
        borderWidth:1,
        borderColor:"red",
        padding:2,
        margin:5,
        borderRadius:5
    },
    button :{
        borderColor:'black',
        backgroundColor:'grey',
        width:200,
        margin:10,
        padding:12,
        borderRadius:12,
    },
    text: {
        textAlign:'center',
        color:'white',
        fontSize:16
    },
    textItem: {
        borderColor:"#ffabcd",
        borderWidth:2,
        fontSize:20,
        padding:5,
        margin:5,
        backgroundColor:'yellow'
    }
})