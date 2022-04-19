import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import EmployeeFlatList from './components/EmployeeFlatList';
import EmployeeView from './components/EmployeeView';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Employee Details</Text>
      {/* <EmployeeView></EmployeeView> */}
      <EmployeeFlatList></EmployeeFlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40,
    marginBottom:40
  },
  text: {
    fontSize:30,
    color:'red'
  }
});
