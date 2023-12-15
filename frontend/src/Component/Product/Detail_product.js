import { Button } from 'bootstrap';
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteProduct, FindProduct, Get } from '../Redux/Action';
import Update_product from './Update_product';

import { useParams } from 'react-router-dom';

function Detail_product() {
  const id = useParams()
  console.log(id)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FindProduct(id.id));
  }, []);
  const product = useSelector((state) => state.products.product);
  console.log(product);
  return (
    <>
  
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" ,justifyContent: "space-around"}}>
      
          <CardGroup>
        <Card style={{ width: "18rem" }}>
        
        <Card.Img variant="top" src={product.image}  style={{width:"50%"}}/>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
           {product.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{product.price}</small>
        </Card.Footer>
        
       
      </Card>
      </CardGroup>
      
    </div>
  </>
    )
        
   
    

  
}

export default Detail_product;