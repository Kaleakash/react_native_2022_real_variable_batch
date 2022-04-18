
import { StyleSheet, Text, View } from 'react-native';
import EmployeeDetails from './component/EmployeeDetails';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textContent}>Employee Details</Text>
      <EmployeeDetails></EmployeeDetails>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContent: {
    fontSize:20,
    fontWeight:'bold',
    color:'#ffabbc'
  }
});
