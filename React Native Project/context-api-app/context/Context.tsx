import {createContext} from 'react';

const AppContext =createContext({
  id:"110",                                 // number type with value 110 
  products :[] as string[],                 // array value 
  addNewProduct : (product:string) => {},   
  deleteProduct : (index:number) => {}
});

export default AppContext;