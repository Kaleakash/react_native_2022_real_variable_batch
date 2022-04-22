import { useContext } from "react";
import { Text, View } from "react-native";
import Context from "../context/Context";
import FifthComponent from "./FifthComponent";


export default function ThirdComponent() {



    const context = useContext(Context);


    return(
        <View>
            <Text>Third Component - {context.name}</Text>
            
        </View>
    )
}