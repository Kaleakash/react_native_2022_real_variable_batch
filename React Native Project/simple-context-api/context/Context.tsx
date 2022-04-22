import { createContext } from "react";



const Context = createContext({
    name:"Raj Deep",
    changeName:(name:string)=>{}
})



export default Context;