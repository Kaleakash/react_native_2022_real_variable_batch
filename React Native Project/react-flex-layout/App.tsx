import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.subView1}>
        <Text style={styles.firstBox}>First</Text>
        <Text style={styles.secondBox}>Second</Text>
        <Text style={styles.thirdBox}>Third</Text>
        <Text style={styles.fourthtBox}>Fourth</Text>
      </View>
      <View style={styles.subView2}>
        <Text style={styles.firstBox}>First</Text>
        <Text style={styles.secondBox}>Second</Text>
        <Text style={styles.thirdBox}>Third</Text>
        <Text style={styles.fourthtBox}>Fourth</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection:'row',
    //backgroundColor: '#fff',
    alignItems: 'center',           // top to bottom 
    justifyContent: 'center',       // left to right 
    paddingTop:0,
    backgroundColor:'orange',
    paddingBottom:0
  },
  subView1:{
    //flex:1
    flexDirection:'row'
  },
  subView2:{
    //flex:1
    flexDirection:'row-reverse'
  },
  firstBox: {
    flex:3,
    backgroundColor:"red",
    padding:10
  }, 
  secondBox: {
    flex:2,
    backgroundColor:"green",
    padding:10
  },
  thirdBox: {
    flex:1,
    backgroundColor:"blue",
    padding:10
  },
  fourthtBox: {
    flex:1,
    backgroundColor:"yellow",
    padding:30
  }
});
