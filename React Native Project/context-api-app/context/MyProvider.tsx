import React, { useState } from 'react';
import { Alert } from 'react-native';
import AppContext from '../context/Context';
//function style 
export default function MyProvider(props:any){
  const [products,setProduct]=useState<string[]>([]);  
  const [id,setId]=useState("")
  
  const addNewProduct = (product:string) => {
      
      setProduct(previousProduct => [...previousProduct,product]);
      Alert.alert("Info","Product Added...")
  };
   
  const deleteProduct = (index:number) => {
    //setProduct(previousProduct => previousProduct.filter((p,i)=>index!=i))
  };


   return (
    <AppContext.Provider 
     value={{
      id,
      products,
      deleteProduct,
      addNewProduct
     }}
    >
     {props.children}
    </AppContext.Provider>
   );
   }