import { useContext, useState } from "react";
import Context from "./Context";



export default function Provider(props:any){
const context = useContext(Context);

const [name,setName]=useState(context.name);

const changeName=(name:string)=> {
    setName(name);
}


    return(
        <Context.Provider value={{
                name,
                changeName
        }}>
            {props.children}
        </Context.Provider>
    )
}