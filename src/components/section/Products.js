import React, { Component } from 'react'
import {DataContext} from '../Context'
import '../css/Products.css'
import keksas from './cupcake.png';
export class Products extends Component {

    static contextType = DataContext;

    render() {
        const {products,addCart} = this.context;
        return (
            <div id="product">
               {
                   products.map(product =>(
                       <div className="card" key={product.id}>
                               <img src={keksas} />

                           <div className="content">
                               <h3>
                                   {product.preke}
                               </h3>
                               <span>€{product.kaina}</span>
                               <button onClick={()=> addCart(product.id)}>Add to cart</button>
                           </div>
                       </div>
                   ))
               }
            </div>
        )
    }
}

export default Products
