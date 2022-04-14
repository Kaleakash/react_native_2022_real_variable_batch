import { View,Text } from "react-native";
import React from 'react';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Employee from "./component/Employee";

//function component 
function App() {
  return (
    <View>
      <Header></Header>
      <Text >Welcome to React native Application deployee to expo</Text>
      <Employee></Employee>
      <Footer></Footer>
    </View>
  );
}

// class component 
// class App extends React.Component{

//   render(){
//     return(<View>
//               <Text>Welcome to Simple React native application using class component</Text>
//            </View>
//         )
//   }  
// }
// export default App;

// Arrow style component 
// let App = ()=><View><Text>Welcome React Native using arrow component</Text></View>

export default App;