import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:100
      
    },
    inputView: {
      //flex:1,
      flexDirection:'row',
      borderWidth:2,
      paddingTop:5,
      borderColor:"red",
      borderRadius:15
    },
    inputText: {
      fontSize:25,
      padding:5,
      width:250
    },
    myButton : {
        borderWidth:1,
        borderColor:"orange",
        backgroundColor:"#fa12bb",
        width:150,
        textAlign:'center',
        marginTop:5,
        padding:10,
        borderRadius:15,
        fontSize:20
    },
    task: {
      margin:10,
      borderWidth:2,
      width:300,
      padding:5,
      paddingLeft:5,
      borderRadius:10,
      fontSize:25,
      color:'white',
      backgroundColor:"gray"
    }
  });
  

export default styles;