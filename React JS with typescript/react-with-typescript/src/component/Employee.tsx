import React from 'react';

interface PropsType {
    id:number;
    name:string;
    age?:number;        // optional property 
}
interface StateType {
    pid:number;
    pname:string;
    typeOfProject?:string
}

class Employee extends React.Component<PropsType,StateType>{
    constructor(props:PropsType){
        super(props);
        this.state={pid:100,pname:"Angular Project",typeOfProject:"web"};
    }
    static defaultProps = {
        age:18
    }
    render() {
            return(
            <div>
                    <h2>Employee Details </h2>
            <p>Id is {this.props.id} Name is {this.props.name} and age is {this.props.age}</p>
                    <h2>Project Details </h2>
                    <p>PId {this.state.pid} Name Project Name {this.state.pname}</p>
            </div>
        )
    }
}

export default Employee;