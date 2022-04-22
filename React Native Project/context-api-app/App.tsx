import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AddProduct from './component/AddProduct';
import DisplayProductList from './component/DisplayProductList';
import MyProvider from './context/MyProvider';

export default function App() {
  return (
    <MyProvider>

    <SafeAreaView style={styles.container}>
      <Text>Context API Example</Text>
      <AddProduct></AddProduct>
      <DisplayProductList></DisplayProductList>
    </SafeAreaView>
    
    </MyProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50
  },
});
