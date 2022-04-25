import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { increment} from "../redux/action/numAction";
function NumComponent(props:any){
    return(
        <View>
            <TouchableOpacity onPress={()=>props.incrementNum(100)}>
                <Text style={styles.text}>+</Text>
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
        incrementNum : (num:number)=> {
            dispatch(increment(num))               // dispath the action 
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




