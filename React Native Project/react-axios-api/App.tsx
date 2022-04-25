import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DrinkItems from './component/DrinkItems';
import Fake from './component/Fake';
import Product from './component/Product';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Fake></Fake> */}
      {/* <DrinkItems></DrinkItems> */}
      <Product></Product>
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
});
