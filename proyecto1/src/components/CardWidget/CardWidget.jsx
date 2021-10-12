//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//<ShoppingCartIcon style={{width:"50px", color:"white"}} fontSize="large"/> 
import Carrito from '../../img/carro.png'
const CardWidget = ({carrito}) => {

    // carrito => recibi como parametro desde Navbar / muestra la cantidad de Articlulos que esta en 
    
    return (
        <div className=" d-flex align-items-center">
         
            <img src={Carrito} alt= 'img de carrito'/>
            <h3 className="text-light mr-5">{carrito}</h3>
          
        </div>
    )
}

export default CardWidget