import { useContext } from "react";
import { Text, View } from "react-native";
import AppContext from "../context/Context";


export default function MyConsumer1() {


const contextType = useContext(AppContext)

    return(
        <View>
           <Text>{contextType.num}</Text>
        </View>
    )
}