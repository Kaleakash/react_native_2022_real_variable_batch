import { Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { increment,decrement } from "../redux/action/numAction";
function NumComponent(props:any){
    return(
        <View>
            <TouchableOpacity onPress={()=>props.decrementNum()}>
                <Text>-</Text>
            </TouchableOpacity>
            <Text>Value of Num is {props.obj.num}</Text>
            <TouchableOpacity onPress={()=>props.incrementNum()}>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    )
}
// to map global state variable 
const mapStateToProps = (state:any)=> {
    return{
        obj: state.num
    };
}
// to access function to fire the event 
const mapDispatchToProps = (dispatch:any)=> {
    return {
        incrementNum : ()=> {
            dispatch(increment())               // dispath the action 
        },
        decrementNum : ()=> {
            dispatch(decrement())               // dispatch the action 
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NumComponent)
// connect pre-defined function link with component and mapToDispatch




