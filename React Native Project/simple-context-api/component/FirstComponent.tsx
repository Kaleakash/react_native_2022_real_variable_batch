import { useContext } from "react";
import { Text, View } from "react-native";
import Context from "../context/Context";
import FifthComponent from "./FifthComponent";
import SecondComponent from "./SecondComponent";


export default function FirstComponent() {

const context = useContext(Context);



    return(
        <View>
            <Text>First Component - {context.name}</Text>
            <SecondComponent></SecondComponent>
            <FifthComponent></FifthComponent>
        </View>
    )
}