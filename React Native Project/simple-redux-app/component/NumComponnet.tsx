import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { increment,decrement } from "../redux/action/numAction";
import Decrement from "./Decrement";
import Increment from "./Increment";
function NumComponent(props:any){
    return(
        <View>
            <Increment></Increment>
            <Text style={styles.text}>Value of Num is {props.obj.num}</Text>
            <Decrement></Decrement>
        </View>
    )
}
// to map global state variable 
const mapStateToProps = (state:any)=> {
    return{
        obj: state.num
    }
}
// to access function to fire the event 
const mapDispatchToProps = (dispatch:any)=> {
    return {
        incrementNum : (num:number)=> {
            dispatch(increment(num))               // dispath the action 
        },
        decrementNum : (num:number)=> {
            dispatch(decrement(num))               // dispatch the action 
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NumComponent)
// connect pre-defined function link with component and mapToDispatch

const styles = StyleSheet.create({
    text: {
      fontSize:30
    },
  });




