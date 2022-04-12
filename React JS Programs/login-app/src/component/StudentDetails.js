
import React from 'react';
class StudentDetails extends React.Component {
    constructor(props){
        super(props);
        this.state ={names:["Ravi","Ajay","Vijay"],user:""}
    }
    handleChange=(event)=> {
        this.setState({user:event.target.value});
    }
    handleAddOperation=(event)=> {
       this.setState({names:[...this.state.names,this.state.user]});
       this.setState({user:""})
    }
    handleDeleteOperation= (i)=> {
        //console.log(i);
        //this.setState({names:[...this.state.names.splice(i,1)]});
        let names = [...this.state.names];
        names.splice(i,1);
        this.setState({names});
    }
    render() {
       // let name = this.state.names.map(e=><li>{e}</li>)
        return(
        <div>
                <h2>Student Details</h2>
        <label>Name</label>
        <input type="text" name='user' value={this.state.user} onChange={this.handleChange}/><br/>
        <input type="button" value="Add Names" onClick={this.handleAddOperation}/><br/>
                <ul>
                   {this.state.names.map((e,i)=><li key={i}>{e} <input type="button" value="Delete" 
                   onClick={()=>this.handleDeleteOperation(i)}/></li>)}
                </ul>
        </div>)
    }
}

export default StudentDetails