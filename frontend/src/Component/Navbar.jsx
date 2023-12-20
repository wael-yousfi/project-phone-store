import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { GetUsers, getcurrent, logout } from './Redux/Action';

  
 
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basket = useSelector(state=>state.products.basket)
 useEffect(()=>{
  //getcurrent
  dispatch(getcurrent()) 
 },[])
 const user= useSelector(state=>state.users.user)
   console.log(user)

  return (<>
    <nav style={{background:'white'  }} className="navbar navbar-expand-lg navbar-light p-3 border-bottom">
      <div className="container">
        <Link style={{color:'red', marginRight:'600px',fontSize:'1.5rem'}} to="/" className="navbar-brand">
          PHONE STORE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div style={{gap:'10px',fontSize:'1rem',color:'blue'}}  className="collapse navbar-collapse" id="navbarNav" >
          <ul className="navbar-nav ms-auto">
            
           
            
                <li className="nav-item">
                  <Link style={{color:'blue'}} className="nav-link" to={'/basket'}>
                     Basket
                     {basket.length}
                  </Link>
                </li>
                {!user.name?<><li className="nav-item">
                  <Link style={{color:'blue'}} className="nav-link" to={'/users'}>
                      Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link style={{color:'blue'}} className="nav-link" to={'/user/login'}>
                      Login
                  </Link>
                  </li></>:null}
                 {user.name? <li className="nav-item">
                  <Link style={{color:'blue'}} className="nav-link" to={'/user/login'} onClick={()=>dispatch(logout())}>
                      Logout
                  </Link>
                </li>:null} 
                {user.isAdmin && user.name?
                <li className="nav-item">
                  <Link style={{color:'blue'}} className="nav-link" to={'/users/get'}>
                      List of users

                  </Link>
                </li>:null}
                {!user.isAdmin && user.name?
                <li className="nav-item">
                <Link style={{color:'blue'}} className="nav-link" to={'/users/get'}>
                  Profile
                </Link>
              </li>:null}
                <li className="nav-item">
                  <Link className="nav-link" to={'/contact'}>
                      
                  </Link>
                </li>

                
            
          
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;