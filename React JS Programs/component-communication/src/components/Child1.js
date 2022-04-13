import React from 'react';
class Child1 extends React.Component {
    constructor(props){
        super(props);
        this.state={child1Name:"Raju"}
        
        this.props.passToParent(this.state.child1Name); // passing the value to parent.
    }




    render(){



        return(
            <div>
                <h2>Child1 Component</h2>
                <p>Child1 name in child1 component is {this.state.child1Name}</p>
                <p>Parent name in child1 component is {this.props.pname}</p>
                <p>Child2 name in child2 component is {this.props.child2Name}</p>
            </div>
        )
    }
}


export default Child1;