import { useContext } from "react";
import { Text, View } from "react-native";
import Context from "../context/Context";


export default function FourthComponent() {


const context = useContext(Context);


    return(
        <View>
            <Text>Fourth Component - {context.name}</Text>
        </View>
    )
}