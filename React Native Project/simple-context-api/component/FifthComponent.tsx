import { useContext } from "react";
import { Text, View } from "react-native";
import Context from "../context/Context";


export default function FifthComponent() {


const context = useContext(Context);


    return(
        <View>
            <Text>Fifth Component {context.name}</Text>
        </View>
    )
}