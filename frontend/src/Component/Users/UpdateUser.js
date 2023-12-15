import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import axios from "axios";
import { UpdateProduct, updateUser  } from "../Redux/Action";
import './ListUsers.css'
function UpdateUser({data}) {
  const [show, setShow] = useState(false);
   
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [password, setPassword] = useState(data.password);
  const [imageuser, setImageuser] = useState([]);
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  
  const dispatch = useDispatch();
  const Update = async () => {
    const formaData=new FormData()
    formaData.append('file',imageuser)
    formaData.append('upload_preset','ml_default')
    if(imageuser.length===undefined){
    await axios
    .post('https://api.cloudinary.com/v1_1/dm5ktvety/upload',formaData)
    .then(res=> 
         dispatch
          (updateUser(data._id,
            {name,email,password,imageuser:res.data.url}
            )
          )
        
        )
      }else{
            dispatch
            (updateUser(data._id,
                {name,email,password,imageuser:data.image}
                )
            ); 
            }
            
      
 
    
    handleClose();
  };
  return (
    <>
      <span className="wishlist" onClick={handleShow}>
        Update User
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="Name"
                placeholder="Name"
                name="name"
                autoFocus
                defaultValue={data.name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                name="email"
                autoFocus
                defaultValue={data.email}
                onChange={(e) => setEmail(e.target.value)}
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
              
                autoFocus
                onChange={(e) => setImageuser(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                name="password"
                autoFocus
                
                onChange={(e) => setPassword(e.target.value)}
               />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Update}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateUser;
