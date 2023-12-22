import { Button } from 'bootstrap';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteProduct, Get, getcurrent } from '../Redux/Action';
import Update_product from './Update_product';
import Accordion from 'react-bootstrap/Accordion'
import { Link, Route, Routes } from 'react-router-dom';
import Detail_product from './Detail_product';
import Add_product from './Add_product';
import { addToBasket } from '../Redux/ActionBasket';
import './Product.css'
import Contact from '../Users/Contact';
import CarouselFadeExample from './Carousel';
import ProductCard from './ProductCard';
function Get_product() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Get())
    dispatch(getcurrent())
  }, [])
  const products = useSelector((state) => state.products.products);
  console.log(products);
  const user = useSelector((state) => state.users.user);
  console.log(user)
  return (
    <>
    <CarouselFadeExample/>
      {user.isAdmin?<Add_product />:null}
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" ,justifyContent: "space-around"}}>
      {products.map((e) => 
        
        <ProductCard e={e}/>
      
      )}
    </div>

<footer>
  <Contact/>
</footer>



  </>
    )
        
   
    

  
}

export default Get_product;