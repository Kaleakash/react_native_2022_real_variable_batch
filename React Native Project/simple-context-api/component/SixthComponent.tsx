import { useContext } from "react";
import { Text, View } from "react-native";
import Context from "../context/Context";
import ThirdComponent from "./ThirdComponent";


export default function SixthComponent() {


const context = useContext(Context);


    return(
        <View>
            <Text>Sixth Component - {context.name}</Text>
            <ThirdComponent></ThirdComponent>
        </View>
    )
}