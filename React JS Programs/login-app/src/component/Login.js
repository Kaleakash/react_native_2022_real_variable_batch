import React from 'react';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {user:"",pass:"",msg:""}
    }
    handleChange = (event)=> {
        //console.log(event);
        let name = event.target.name;
        let value = event.target.value;
        //console.log(name+" "+value);
        this.setState({[name]:value})   // to set the multi value 
    }
    handleSubmit = (event)=> {
            event.preventDefault();
            //console.log(this.state)
            let user = this.state.user;
            let pass = this.state.pass;
            if(user=="Raj" && pass=="123"){
                    //alert("Successfully login   ")
                    this.setState({"msg":"Successfully login"})
            }else {
                    //alert("Failure try once again")
                    this.setState({"msg":"Failure try once again"})
            }   
            this.setState({user:"",pass:""})
    }
    render(){
        return(
            <div>
                <h2>Login Page</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>UserName</label>
                    <input type="text" name='user' value={this.state.user}  onChange={this.handleChange}/><br/>
                    <label>Password</label>
                    <input type="password" name='pass' value={this.state.pass} onChange={this.handleChange}/><br/>
                    <input type="submit" value="submit"/>
                    <input type="reset" value="reset"/>
                </form>
                <span>{this.state.msg}</span>
            </div>
        )
    }
}

export default Login;