import React from 'react' 
import 'bootstrap/dist/css/bootstrap.css'
import { Card } from 'react-bootstrap'
import { CardGroup } from 'react-bootstrap'
import ItemCount from './ItemCount.js'
import Cervezas from '../img/cervezas.jpg'

function ItemListContainer() {
    return (
        <CardGroup className= 'p-3'>
        <Card>
          <Card.Img variant="top" src={Cervezas} alt= 'img de cervezas' />
          <Card.Body>
            <Card.Title>BLONDE ALE</Card.Title>
            <Card.Text>
              Cerveza rubia de alta tomabilidad, brillante y cristalina.
              Se percibe el sabor dulce de la malta en perfecto equilibrio con el aroma de los lupulos que otorgan agradables notas citricas.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <ItemCount/>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={Cervezas} alt= 'img de cervezas' />
          <Card.Body>
            <Card.Title>IPA</Card.Title>
            <Card.Text>
              Cerveza de color dorado; con alta tomabilidad.
              El blend de maltas otorga el soporte justo para destacar y resaltar el aroma y los sabores del lupulo, entre ellos se perciben notas citricas, frutas de carozo, frutas tropicales y sutil resina.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <ItemCount/>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={Cervezas} alt= 'img de cervezas' /> 
          <Card.Body>
            <Card.Title>PORTER</Card.Title>
            <Card.Text>
              Cerveza negra de sabor complejo y equilibrado.
              Cuerpo medio con espuma cremosa y persistente.
              Amargor moderado aportado por los lupulos y las maltas tostadas.
              Se perciben notas de cafe, cacao y frutas secas.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <ItemCount/>
          </Card.Footer>
        </Card>
      </CardGroup>         
    )
}

export default ItemListContainer