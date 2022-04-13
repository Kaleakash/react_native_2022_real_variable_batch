import React from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
class Parent extends React.Component {
       constructor(props){
           super(props);
           this.state={parentName:"Ram",child1Name:"",child2Name:""}
       }  

       receiveChild1Value = (data)=> {
        //console.log(data);
        this.setState({child1Name:data});
    }

    receiveChild2Value = (data)=> {
        //console.log(data);
        this.setState({child2Name:data});
    }


    render(){



        return(
            <div>
                <h2>Parent Component</h2>
                <p>Parent name in parent component is {this.state.parentName}</p>
                <p>Child1 name in parent component is {this.state.child1Name}</p>
                <p>Child2 name in parent component is {this.state.child2Name}</p>
                <Child1 pname={this.state.parentName} passToParent={this.receiveChild1Value} child2Name={this.state.child2Name}></Child1>
                <Child2 pname={this.state.parentName} passToParent={this.receiveChild2Value} child1Name={this.state.child1Name}></Child2>
            </div>
        )
    }
}


export default Parent;