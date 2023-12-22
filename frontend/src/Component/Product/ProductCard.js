import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Detail_product from './Detail_product';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { addToBasket } from '../Redux/ActionBasket';
import Update_product from './Update_product';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteProduct, getcurrent } from '../Redux/Action';
function ProductCard({e}) {
    const [quantity, setQuantity] = useState(0)
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getcurrent())
      }, [])
      const user = useSelector((state) => state.users.user);
  console.log(user);
  return (
    <div>

<Card key={e._id} style={{ width: "18rem", height: "800px",position:'relative' }}>
        
        <Card.Img  variant="top" src={e.image}  style={{width:"70%",marginLeft:'60'}}/>
        <Card.Body>
          <Card.Title style={{fontSize:"0.8rem",color:'blue'}}>{e.name}</Card.Title>
          <Accordion defaultActiveKey="1" flush style={{height:'300px',width:'230px',overflow:'scroll',WebkitScrollSnapType:"block"}}>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Description</Accordion.Header>
        <Accordion.Body style={{height:'100px',}}>
        {e.description}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  
        
        </Card.Body>
        <Card.Footer style={{fontSize:'30px', }}>
          <small  className="text"style={{color:'blue'}} >{e.price}<span style={{marginLeft:'10px',color:'blue'}}>DT</span></small>
        </Card.Footer>
        {!user.isAdmin?<Card.Footer>

          <button className="text-muted" onClick={()=>setQuantity (quantity+1)}>+</button>
          <small className="text-muted">{quantity}</small>
          <button className="text-muted" onClick={()=>quantity>0? setQuantity (quantity-1):quantity}>-</button>
        </Card.Footer>:null}
        {!user.isAdmin?<button type="button" className="button" onClick={()=>dispatch(addToBasket({pro:e, quantity}))}
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
</button>:null}

        
{user.isAdmin?<button onClick={()=>dispatch(DeleteProduct(e._id))} type="button" className="button2">
  <span className="button__text">Delete</span>
  <span className="button__icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={512}
      viewBox="0 0 512 512"
      height={512}
      className="svg"
    >
      <title />
      <path
        style={{
          fill: "none",
          stroke: "#323232",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 32
        }}
        d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
      />
      <line
        y2={112}
        y1={112}
        x2={432}
        x1={80}
        style={{
          stroke: "#323232",
          strokeLinecap: "round",
          strokeMiterlimit: 10,
          strokeWidth: 32
        }}
      />
      <path
        style={{
          fill: "none",
          stroke: "#323232",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 32
        }}
        d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"
      />
      <line
        y2={400}
        y1={176}
        x2={256}
        x1={256}
        style={{
          fill: "none",
          stroke: "#323232",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 32
        }}
      />
      <line
        y2={400}
        y1={176}
        x2={192}
        x1={184}
        style={{
          fill: "none",
          stroke: "#323232",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 32
        }}
      />
      <line
        y2={400}
        y1={176}
        x2={320}
        x1={328}
        style={{
          fill: "none",
          stroke: "#323232",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 32
        }}
      />
    </svg>
  </span>
</button>:null}



 {user.isAdmin?<Update_product data={e}/>:null}       
        <Link to={`/detail/${e._id}`}>go to detail</Link>
      </Card>

    </div>
  )
}

export default ProductCard