import React from 'react'
 import { useDispatch, useSelector } from 'react-redux'
 import Card from 'react-bootstrap/Card';
 import CardGroup from 'react-bootstrap/CardGroup';
 import { Button } from 'bootstrap';
import { removeFromBasket } from '../Redux/ActionBasket';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


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
    </h1>
    <button onClick={paiement} >Paiement </button>
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