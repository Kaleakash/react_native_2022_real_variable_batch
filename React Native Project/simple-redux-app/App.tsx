import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import NumComponnet from './component/NumComponnet';
import store from './redux/store/numStore';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>React Native with Simple Redux App!</Text>
        <NumComponnet></NumComponnet>
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
