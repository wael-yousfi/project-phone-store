import React from 'react'
 import { useDispatch, useSelector } from 'react-redux'
 import Card from 'react-bootstrap/Card';
 import CardGroup from 'react-bootstrap/CardGroup';
 import { Button } from 'bootstrap';
import { removeFromBasket } from '../Redux/ActionBasket';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './basket.css'


function Basket() {
    const dispatch= useDispatch()
    const basket = useSelector(state=>state.products.basket) //state.basket dans le reducer
    console.log(basket)
    const paiement=async ()=>{
        const res=await axios
        .post('http://localhost:5668/paiement/create-checkout-session',{basket})
        .then(res=> {
            if (res.data.url){
                window.location.href =res.data.url
            }
        })
            


    }
  return (
    <>
    <h1>Total price: {
        basket.reduce((acc,e)=>
             acc + e.pro.price * e.quantity
             
        ,0 )
        
        }
         DT
    </h1>
    
    <div data-tooltip="Price:-$20" className="buttonbuy"  onClick={paiement}>
  <div className="button-wrapper">
    <div className="text">Buy Now</div>
    <span className="icon">
      <svg
        viewBox="0 0 16 16"
        className="bi bi-cart2"
        fill="currentColor"
        height={16}
        width={16}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
      </svg>
    </span>
  </div>
</div>

    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" ,justifyContent: "space-around"}}>
        {basket.map((e)=>
            
            <Card style={{ width: "18rem" }}>
            
            <Card.Img variant="top" src={e.pro.image}  style={{width:"50%"}}/>
            <Card.Body>
              <Card.Title>{e.pro.name}</Card.Title>
               
            </Card.Body>
            <Card.Footer>
              quantity{e.quantity}
            </Card.Footer>
             <button onClick={()=>dispatch(removeFromBasket(e.pro._id))} >supprime</button>
          </Card>
        
        )}
</div>
    </>
  )
}

export default Basket