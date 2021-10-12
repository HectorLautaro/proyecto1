import React from "react";
import Item from "../Item/Item";


const ItemListContainer = ({addToCardWidget}) => {

  // addToCardWidget => es la funcion que traje desde main para parasar al <Item/>

    const items = [
    
        { id : 0 , nombre :"Blonde Ale", stock:5, img :"https://www.cocinista.es/download/bancorecursos/recetas/receta_cerveza_rubia-americana.jpg"},
        { id : 1 , nombre :"Ipa", stock:4, img :"https://www.cocinista.es/download/bancorecursos/recetas/receta-todo-grano-cerveza-amber-american.jpg"},
        { id : 2 , nombre :"Porter",      stock:1, img :"https://lh3.googleusercontent.com/proxy/6whHpWc8-9EYxx8NjmKGzehjzmdOX5konK9kgO7WWejg6aTndSwI9GT8l_zIZ7WztKWsngCYKVf9Ps-3VRg2fRHWfRdGYFMGo6HiCL8HoANrkg"},
        //{ id : 3 , nombre :"salchipapa", stock:10, img :"https://ichef.bbci.co.uk/news/640/cpsprodpb/125FC/production/_103206257_sandwich.png"},
        //{ id : 4 , nombre :"salchipapa", stock:20, img :"https://ichef.bbci.co.uk/news/640/cpsprodpb/125FC/production/_103206257_sandwich.png"},
       // { id : 5 , nombre :"salchipapa", stock:30, img :"https://ichef.bbci.co.uk/news/640/cpsprodpb/125FC/production/_103206257_sandwich.png"},
       // { id : 6 , nombre :"salchipapa", stock:3, img :"https://ichef.bbci.co.uk/news/640/cpsprodpb/125FC/production/_103206257_sandwich.png"},
       // { id : 7 , nombre :"salchipapa", stock:6, img :"https://ichef.bbci.co.uk/news/640/cpsprodpb/125FC/production/_103206257_sandwich.png"}
    
    ]
  return (
    <div className="container p-3 my-5">

        {/* aqui estoy recorriendo el array y estoy generando <Item/> "componente" dinamicamente ! */}
        
        {items.map((item => 
            ( <Item 
                key={item.id} 
                nombre={item.nombre}
                stock={item.stock}
                img={item.img}
                addToCardWidget={addToCardWidget}
              /> ) 
            
            ))}
    </div>
  );
};

export default ItemListContainer;