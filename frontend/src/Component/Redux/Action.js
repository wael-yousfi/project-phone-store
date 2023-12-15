import axios from "axios";
import { ALLPRODUCT, ALLUSERS, GETCURRENT, LOGIN, LOGOUT, ONEPRODUCT, POSTPRODUCT } from "./ActionType";
export const Get = () => async (dispatch) => {
    try {
      const res = await axios
        .get("http://localhost:5668/product/get/")
        .then((res) => dispatch({ type: ALLPRODUCT, payload: res.data.AllProducts }));
    } catch (error) {
      console.log(error);
    }
  
  };
export const AddProduct = (data) => async (dispatch) => {
    try {
      const res = await axios
        .post("http://localhost:5668/product/post/",data)
        .then((res) => dispatch(Get()));
    } catch (error) {
      console.log(error);
    }
  
  };
  export const DeleteProduct = (id) => async (dispatch) => {
    try {
      const res = await axios
        .delete("http://localhost:5668/product/delete/"+id)
        .then((res) => dispatch(Get()));
    } catch (error) {
      console.log(error);
    }
  
  };
  export const UpdateProduct = (id,data) => async (dispatch) => {
    try {
      const res = await axios
        .put("http://localhost:5668/product/update/"+id,data)
        .then((res) => dispatch(Get()));
    } catch (error) {
      console.log(error);
    }
  
  };
  export const FindProduct = (id) => async (dispatch) => {
    try {
      const res = await axios
        .get("http://localhost:5668/product/get/"+id)
        .then((res) => dispatch({ type: ONEPRODUCT, payload: res.data.product }));
    } catch (error) {
      console.log(error);
    }
  
  };
/////////// User//////////////
export const GetUsers = ()=> async(dispatch)=>{
  try {
    const res= await axios
      .get("http://localhost:5668/users/get/")
      .then((res)=>dispatch({type:ALLUSERS, payload:res.data.AllUsers}))
      console.log(res.data)
  } catch (error) {
    console.log(error);
  }
}
export const AddUser = (data,navigate)=> async(dispatch)=>{
  try {
    const res = await axios
      .post("http://localhost:5668/users/post/",data)
      .then((res)=>dispatch(GetUsers()))
      navigate('/')
  } catch (error) {
    console.log(error);
  }
}
export const findUser = (data)=> async(dispatch)=>{
  try {
    const res= await axios
      .post("http://localhost:5668/users/login",data)
      .then((res)=>dispatch({type:LOGIN,payload:res.data}))
      console.log(res)
  } catch (error) {
    console.log(error);
  }
}
export const updateUser = (id,data)=> async(dispatch)=>{
  try {
    const res = await axios
      .put("http://localhost:5668/users/update/"+id,data)
      .then((res)=>dispatch(GetUsers()))
  } catch (error) {
    console.log(error)
    
  }
}
export const updateUser2 = (id,data)=> async(dispatch)=>{
  try {
    const res = await axios
      .put("http://localhost:5668/users/update2/"+id,data)
      .then((res)=>dispatch(GetUsers()))
  } catch (error) {
    console.log(error)
    
  }
}
export const deletUser = (id)=> async(dispatch)=>{
  try {
    const res= await axios
      .delete("http://localhost:5668/users/delete/"+id)
      .then((res)=>dispatch(GetUsers()))
  } catch (error) {
    console.log(error)
  }
} 

export const getcurrent=()=>async(dispatch)=>{
  const config={
      headers:{token:localStorage.getItem("token")}
  }
  try {
     const res=await axios.get("http://localhost:5668/users/getcurrent",config) 
.then(res=>dispatch({type:GETCURRENT,payload:res.data}))
  } catch (error) {
      console.log(error)
  }
}


export const logout = ()=>{
  localStorage.removeItem('token')
  
  return{
    type:LOGOUT
  }
}