import React, { useState } from "react";

const Item = ({ nombre, stock, img, addToCardWidget }) => {

  // nombre => recibi desde <ItemListContainer/> como parametro cuando recorria el array items
  // stock => recibi desde <ItemListContainer/> como parametro cuando recorria el array items
  // img => recibi desde <ItemListContainer/> como parametro cuando recorria el array items
  // addToCardWidget parte-1 => recibi desde <ItemListContainer/> como parametro
  // addToCardWidget parte-2 => este funcion se va a encargar de agregar la cantidad que haya seleccionado al carrito 
  // addToCardWidget parte-3 => Recuerda que fue declarado en el <Main/> en la linea 23  

  // Este state se va a encargar de mostrar la cantidad de cada Articulo que quiero agregar al carrito 
  const [cantidad , setCantidad] = useState(1)


  // este funcion vive solamente en cada <Item/> y se va a encargar de aumentar la cantidad de dicho producto
  // siempre y cuando sea menor que el stock
  function add() {
    if(cantidad <  stock) setCantidad(cantidad+1)

  }

  // este funcion vive solamente en cada <Item/> y se va a encargar de disminuir la cantidad de dicho producto
  // siempre y cuando sea mayor a 1 , por que por defecto tiene que estar en 1
  function remove() {
    if( cantidad > 1) setCantidad(cantidad - 1)
  }

  return (
    <div className="row my-5 ">
      <div className="col-sm-12 col-xs-12 col-md-8 col-lg-5 col-xl-4 justify-items-center">
        <div className="card">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">Stock : {stock}</p>
            <div className="w-100 d-flex">
              <button onClick={()=>remove()} className="btn col-xs-6 btn-primary mx-auto">-</button>
              <span>Cantidad : {cantidad} </span>
              <button onClick={()=>add()} className="btn col-xs-6 btn-warning mx-auto">+</button>
            </div>
            <div className="row">
              <button onClick={()=>addToCardWidget(cantidad)} className="btn btn-success my-3">Agregar al Carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;