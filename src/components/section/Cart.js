import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import '../css/Cart.css'
import keksas from './cupcake.png';

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }
    
    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>:(</h2>
        }else{
            return (
                <>
                    {
                        cart.map(item =>(
                            <div className="cart" key={item.id}>
                                <img src={keksas} />
                                <div className="box">
                                    <div className="column">
                                        <h2>{item.preke}</h2>
                                        <span>€{item.kaina * item.count}</span>
                                    </div>
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item.id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item.id)}> + </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item.id)}>X</div>
                            </div>
                        ))
                    }
                    <div className="total">
                        <Link to="/payment">Payment</Link>
                        <h3>Total:€{total}</h3>
                    </div>
                </>
                )
            }
        }
}

export default Cart
