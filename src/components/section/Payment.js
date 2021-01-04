import '../css/Payment.css'
import React, { Component } from 'react'
import {DataContext} from '../Context'
class Payment extends Component {
    static contextType = DataContext;

    handleClick(cart){
        var temp = ""
        cart.map(preke => temp += (" " +preke.count + "x " + preke.preke))
        console.log(temp)
        const uzsakymasData ={
            uzsakymas: temp,
            uzsakymoLaikas: (new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0]),
            pagaminta: false
        }
     fetch('https://cors-anywhere.herokuapp.com/'+'https://api20201228132134.azurewebsites.net/api/uzsakymais', {
     method: 'POST',
     headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(uzsakymasData)
    })
    
    };
    render() {
        const {cart} = this.context;
        return (
            <div id = "payment">
                <h2 style={{textAlign: "center"}}>Mokejimas</h2>
                <button onClick = {() => {this.handleClick(cart)}}>Sent it</button>
            </div>
        )
    }
}

export default Payment
