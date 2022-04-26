import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeComponent(props:any) {


    return(
    <View style={styles.container}>
        <Text>Home Component</Text>
        <TouchableOpacity onPress={()=>props.navigation.push("aboutus")}>
            <Text style={styles.text}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>props.navigation.push("info")}>
            <Text style={styles.text}>Info</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>props.navigation.push("contactus")}>
            <Text style={styles.text}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>props.navigation.push("feedback")}>
            <Text style={styles.text}>Feedback</Text>
        </TouchableOpacity>
    </View>)
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        width:150,
        borderWidth:1,
        backgroundColor:'#ffabcd',
        margin:10,
        padding:10
    }
  });