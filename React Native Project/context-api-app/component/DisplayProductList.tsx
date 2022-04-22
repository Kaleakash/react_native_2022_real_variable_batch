import React, {Component, useContext} from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import AppContext from '../context/Context';

// function style component 

export default function DisplayProductList(props:any) {
  
  const contextType = useContext(AppContext); 

     return (
      <View >
       <Text >All Product Details</Text>
       <FlatList 
        data={contextType.products} 
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
        return (
         <View >
          <Text>{item}</Text>
          <Text 
           onPress= {()=>{contextType.deleteProduct(index)}}
          >
           delete
          </Text>
         </View>
        )
        }}
        />
       </View>
      );
     }