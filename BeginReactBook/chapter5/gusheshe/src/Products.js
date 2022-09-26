import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {

    products;

    constructor(props){
      super(props);
      this.products = this.getProducts();
    }

    getProducts() {
      return [
        
      
      ];
    }    
    
  render() {        
    const listProducts = this.products.map((product) => 
        <Product key={product.productName} data={product} />
    );

    return (
      <div>
        
        {listProducts.length > 0 ? (
 <ul>{listProducts}</ul> 
 ) : ( 
 <ul>No Products to display</ul> 
 )}      
      </div>
    );
  }
}

export default Products;


/**


        {listProducts.length > 0 && 
          <ul>{listProducts}</ul>     
        }
        {listProducts.length == 0 && 
          <ul>No Products to display</ul>     
        }   

            <div>
     
      </div>
 * 
 */