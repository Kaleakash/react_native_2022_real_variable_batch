import React from 'react';
import {View,Text} from 'react-native';


class Employee extends React.Component {

    constructor(props){
        super(props);
        this.state = {id:100,name:"Ravi",age:21};
    }


    render(){

        return(
            <View>
                <Text>Employee Component</Text>
                <Text>Id is {this.state.id}, Name is {this.state.name} Age is {this.state.age}</Text>
            </View>
        )
    }
}

export default Employee;