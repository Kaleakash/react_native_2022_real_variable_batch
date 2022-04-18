import { View,Text, StyleSheet } from "react-native";
import StateVariableFun from "./component/StateVariableInFun";
export default function App() {
  return(
    <View style={styles.container}>
        <View style={styles.viewContent}>
          <Text style={styles.textContent}>Heading Information</Text>  
        </View>
            <StateVariableFun></StateVariableFun>
        <View style={styles.viewContent}>
            <Text style={styles.textContent}>
              <Text style={{fontSize:30}}>
                  Welcome React native Application
              </Text>
              </Text>  
        </View>   

        <View style={styles.viewContent}>
            <Text style={styles.textContent}>
              <Text style={{color:"red"}}>
                  Footer Information
              </Text>
              </Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:"#ffff",
    alignItems:'center',
    justifyContent:'center'
  },
  viewContent : {
    backgroundColor:'#abcfff',
    padding:20,
    margin:10
  },
  textContent : {
    color:'white',
    fontSize:20
  }
})

// Inline CSS with React Native 
// export default function App() {

//   return(
//     <View style={{flex:1,backgroundColor:"#ffff",alignItems:'center',justifyContent:'center'}}>
//         <View style={{backgroundColor:'#abcfff',padding:20,margin:10}}>
//           <Text style={{color:'red',fontSize:20}}>Heading Information</Text>  
//         </View>

//         <View style={{backgroundColor:'#ffaaff',padding:20,margin:10}}>
//             <Text style={{color:'red',fontSize:20}}>Welcome React native Application</Text>  
//         </View>   

//         <View style={{backgroundColor:'gray',padding:20,margin:10}}>
//             <Text style={{color:'white',fontSize:20}}>Footer Information</Text>
//         </View>
//     </View>
//   )
// }


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });