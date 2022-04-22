import React, { useContext, useState } from 'react';
import { View,Text, StyleSheet, TextInput, Button } from 'react-native';
import AppContext from '../context/Context';

export default function AddProduct(props:any){
  const [product,setProduct]=useState<string>("")
  const contextType = useContext(AppContext);

   return(
    <View>
     <TextInput 
       
      onChangeText={(x)=>{setProduct(x)}}
      placeholder="Add a new Product" 
      value={product}
     />
     <Text
       
      onPress={()=> {contextType.addNewProduct(product);  setProduct("") }}
      >
       Add
      </Text>
     </View>
    );
   }

