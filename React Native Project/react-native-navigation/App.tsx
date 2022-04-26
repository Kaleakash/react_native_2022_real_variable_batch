import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
import Feedback from './component/Feedback';
import HomeComponent from './component/HomeComponent';
import Info from './component/Info';
import Login from './component/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='login'>
      <Stack.Screen name='info' component={Info}/>
      <Stack.Screen name='login' component={Login}/>
      <Stack.Screen name='home' component={HomeComponent}/>
      <Stack.Screen name='aboutus' component={AboutUs}/>
      <Stack.Screen name='contactus' component={ContactUs}/>
      <Stack.Screen name='feedback' component={Feedback}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
