import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstComponent from './component/FirstComponent';
import FourthComponent from './component/FourthComponent';
import Provider from './context/Provider';

export default function App() {
  return (
    <Provider>
    <View style={styles.container}>
      <Text>Simple Context API</Text>
      <FirstComponent></FirstComponent>
      <FourthComponent></FourthComponent>
    </View>
    </Provider>
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
