import React from 'react';
import ProductDisplay from './ProductDisplay';

class Products extends React.Component {
    constructor(props){
        super(props);
        this.state={products:[],pid:"",pname:"",price:"",total:0}
    }
    handleChange=(event)=> {
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit=(event)=> {
        event.preventDefault();
        let products = this.state.products;
        products.push(this.state)
        this.setState({products})
        this.setState({pid:"",pname:"",price:""})
       //console.log(this.state.products)
    }
    receiveValue=(data)=>{
        this.setState({total:data})
    }
    render(){
        return(
            <div>
                <p>Sum of all product is {this.state.total}</p>
                <div>Add Products</div>
                <form onSubmit={this.handleSubmit}>
                    <label>PId</label>
                    <input type="text" onChange={this.handleChange} name="pid" value={this.state.pid}/><br/>
                    <label>PName</label>
                    <input type="text" onChange={this.handleChange} name="pname" value={this.state.pname}/><br/>
                    <label>Price</label>
                    <input type="text" onChange={this.handleChange} name="price" value={this.state.price}/><br/>
                    <input type="submit" value="Add Product"/>
                </form>
                <hr/>
                <ProductDisplay products={this.state.products} passToParent={this.receiveValue}></ProductDisplay>
            </div>
        )
    }
}

export default Products;