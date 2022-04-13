import React from 'react';
class ProductDisplay extends React.Component {
    constructor(props){
        super(props);
    }

    findTotal = ()=> {
    //let total = this.props.products.reduce((total,product)=>{return total+eval(product.price)},0);
    //console.log(total);
    let total = 0;
    this.props.products.forEach(p=>{
        total = total + eval(p.price);          // convert string to number 
    })
   this.props.passToParent(total);
    }
    render(){
        return(
            <div>
                <h2>Add Product Details</h2>
                <table  border="1">
                    <thead>
                                <tr>
                                    <th>PId</th>
                                    <th>PName</th>
                                    <th>Price</th>
                                </tr>
                    </thead>
                    <tbody>
                                {
                                    this.props.products.map((p,i)=> 
                                        <tr key={i}>
                                            <td>{p.pid}</td>
                                            <td>{p.pname}</td>
                                            <td>{p.price}</td>
                                        </tr>
                                    )
                                }
                     </tbody>   
                </table>
                <br/>
                <input type="button" value="Total" onClick={this.findTotal}/>
            </div>
        )
    }
}

export default ProductDisplay;