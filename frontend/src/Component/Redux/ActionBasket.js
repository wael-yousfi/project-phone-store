export const addToBasket = (data)=>{
    //data c'est un object qui contient le product et la quantity data={product:e, quantity:3}
return {
    type:"ADDTOBASKET",
    payload: data
}
}

export const removeFromBasket = (id)=>{
 return{
    type:"REMOVEFROMBASKET",
    payload:id
 }
}
