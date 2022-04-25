import { useState } from "react";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";
import axios from 'axios';
interface Drinks {
    strDrink:string;
    strDrinkThumb:string;
    idDrink:string
}
export default function DrinkItems(props:any){
const [drinkData,setDrinkData]=useState<Drinks[]>([]);
const loadData=()=> {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass").
    then(result=>setDrinkData(result.data.drinks)).
    catch(error=>console.log(error));
}
    return(
        <View>
            <Text>Fake Data</Text>
            <Button title="Load the data" onPress={loadData}></Button>
            <FlatList
            data={drinkData}
            renderItem={(drink)=> (
                <View>
                <Image source={{uri:drink.item.strDrinkThumb}} style={styles.imageStyle}/>
                <View style={styles.text}>
                    <Text>{drink.item.idDrink}</Text>
                    <Text>{drink.item.strDrink}</Text>
                </View>
                </View>
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
        borderColor:'red',
        textAlign:'center'
    },
    imageStyle: {
        width:100,
        height:100,
        borderWidth:2,        
    }
})