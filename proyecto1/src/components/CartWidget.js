import React from 'react' 
import 'bootstrap/dist/css/bootstrap.css'
import Carrito from '../img/carro.png'


function CartWidget() {
    return (
            <img src={Carrito} alt= 'img de carrito'/>                      
    )
}

export default CartWidget