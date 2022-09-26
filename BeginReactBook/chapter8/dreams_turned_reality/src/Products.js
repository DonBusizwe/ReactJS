/*
import React, { Component } from "react";
class Products extends Component {
  render() {
    return (
      <div>
        <h2>It was all laid out for me </h2>{" "}
      </div>
    );
  }
}
export default Products;
*/

import React, { Component } from 'react';
import Product from './Product';



class Products extends Component {

    products;
    constructor(props){super(props);
       // this.products = this.getProducts();
       this.products = [];
        }

    getProducts() {
        return [
            {
                imageUrl: "http://loremflickr.com/150/150?random=1",
                productName: "Product 1",
                releasedDate: "May 31, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, idrutrum ligula purus sit amet mauris. ",
                rating: 4,
                numOfReviews: 2
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=2",
                productName: "Product 2",
                releasedDate: "October 31, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, idrutrum ligula purus sit amet mauris. ",
                rating: 2,
                numOfReviews: 12
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=3",
                productName: "Product 3",
                releasedDate: "July 30, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenan porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, idrutrum ligula purus sit amet mauris. ",
                rating: 5,
                numOfReviews: 2
            }];
    }


    render() {
        
      
        return (
        <div>
         
         

              
      
        </div>
        );
    }
}
export default Products;

