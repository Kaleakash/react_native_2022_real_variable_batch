import { TouchableOpacity, View,Text, Alert } from "react-native";


export default function DeleteTask(props:any) {

    const deleteTask=()=> {
        console.log(props.deleteTask+" "+props.deleteItemInfo.item);
        //Alert.alert("warning","Info")
    }

    return(
        <View>
            <TouchableOpacity onPress={deleteTask}><Text>Hi</Text></TouchableOpacity>
        </View>
    )

}