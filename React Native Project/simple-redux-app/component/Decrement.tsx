import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { decrement } from "../redux/action/numAction";
function Decremenet(props:any){
    return(
        <View>
            <TouchableOpacity onPress={()=>props.decrementNum(50)}>
                <Text style={styles.text}>-</Text>
            </TouchableOpacity>
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
        decrementNum : (num:number)=> {
            dispatch(decrement(num))               // dispatch the action 
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Decremenet)
// connect pre-defined function link with component and mapToDispatch

const styles = StyleSheet.create({
    text: {
      fontSize:30
    },
  });




