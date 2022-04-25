

const initialState = {
    num : 0                    // we have to declare the state variable 
    //num1:0    
}                               // number, string, boolean, object, array 

export const numReducer=(state=initialState,action:any)=>{
        console.log(action);
        
        switch(action.type){
            case 'INCREMENT' : 
                    //return {...state, num: ++state.num,num1:++state.num1}
                    //return {...state,num: ++state.num};
                    return {...state,num:state.num=state.num +action.payload}
            case 'DECREMENT' : 
                    //return {...state,num: --state.num};
                    return {...state,num:state.num=state.num -action.payload}
            default :
                    return state;

        }
}

