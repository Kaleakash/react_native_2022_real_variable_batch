import { useContext } from "react";
import { Button, Text, View } from "react-native";
import Context from "../context/Context";
import SixthComponent from "./SixthComponent";


export default function SecondComponent() {


const context = useContext(Context)


    return(
        <View>
            <Text>Second Component - {context.name}</Text>
            <Button title="change Name" onPress={()=>context.changeName("Raj Patil")}></Button>
            <SixthComponent></SixthComponent>
        </View>
    )
}