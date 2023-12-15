import { Button } from 'bootstrap';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteProduct, Get } from '../Redux/Action';
import Update_product from './Update_product';
import Accordion from 'react-bootstrap/Accordion'
import { Link, Route, Routes } from 'react-router-dom';
import Detail_product from './Detail_product';
import Add_product from './Add_product';
import { addToBasket } from '../Redux/ActionBasket';
import './Product.css'
function Get_product() {
  const [quantity, setQuantity] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Get());
  }, [])
  const products = useSelector((state) => state.products.products);
  console.log(products);
  return (
    <>
      <Add_product />
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" ,justifyContent: "space-around"}}>
      {products.map((e) => 
        
        <Card key={e._id} style={{ width: "18rem", height: "600px",position:'relative' }}>
        
        <Card.Img variant="top" src={e.image}  style={{width:"50%"}}/>
        <Card.Body>
          <Card.Title style={{fontSize:"0.8rem",color:'blue'}}>{e.name}</Card.Title>
          <Accordion defaultActiveKey="1" flush style={{height:'150px',overflow:'scroll',WebkitScrollSnapType:"block"}}>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Description</Accordion.Header>
        <Accordion.Body style={{height:'100px',}}>
        {e.description}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{e.price}</small>
        </Card.Footer>
        <Card.Footer>
          <button className="text-muted" onClick={()=>setQuantity (quantity+1)}>+</button>
          <small className="text-muted">{quantity}</small>
          <button className="text-muted" onClick={()=>quantity>0? setQuantity (quantity-1):quantity}>-</button>
        </Card.Footer>
        <button type="button" className="button" onClick={()=>dispatch(addToBasket({pro:e, quantity}))}
        >
  <span className="button__text">Add to cart</span>
  <span className="button__icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      viewBox="0 0 24 24"
      strokeWidth={2}
      strokeLinejoin="round"
      strokeLinecap="round"
      stroke="currentColor"
      height={24}
      fill="none"
      className="svg"
    >
      <line y2={19} y1={5} x2={12} x1={12} />
      <line y2={12} y1={12} x2={19} x1={5} />
    </svg>
  </span>
</button>

        <button onClick={()=>dispatch(DeleteProduct(e._id))}>Delete</button>
        <Update_product data={e}/>
        <Link to={`/detail/${e._id}`}>go to detail</Link>
      </Card>
      
      )}
    </div>
  </>
    )
        
   
    

  
}

export default Get_product;