import React from 'react';
class Child2 extends React.Component {

    constructor(props){
        super(props);
        this.state={child2Name:"Ravi"}
        this.props.passToParent(this.state.child2Name);
    }



    render(){



        return(
            <div>
                <h2>Child2 Component</h2>
                <p>Child2 name in child2 component is {this.state.child2Name}</p>
                <p>Parent name in child2 component is {this.props.pname}</p>
                <p>Chld1 name in child2 component is {this.props.child1Name}</p>
            </div>
        )
    }
}


export default Child2;