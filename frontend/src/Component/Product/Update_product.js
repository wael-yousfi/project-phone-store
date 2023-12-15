import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import axios from "axios";
import { UpdateProduct } from "../Redux/Action";

function Update_product({data}) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(data.name);
  const [description, setDescription] = useState(data.description);
  const [price, setPrice] = useState(data.price);
  const [image, setImage] = useState([]);
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const dispatch = useDispatch();
  const Update = async () => {
    const formaData=new FormData()
    formaData.append('file',image)
    formaData.append('upload_preset','ml_default')
    if(image.length===undefined){
    await axios
    .post('https://api.cloudinary.com/v1_1/dm5ktvety/upload',formaData)
    .then(
      (res)=>
        {dispatch
          (UpdateProduct(data._id,
            {name,description,price,image:res.data.url}
            )
          ); 
        }
        )
      }else{
            dispatch
            (UpdateProduct(data._id,
                {name,description,price,image:data.image}
                )
            ); 
            }            
    handleClose();
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
            Modifier un produits
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="Name"
                placeholder="Name"
                autoFocus
                defaultValue={data.name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text"
                placeholder="description"
                autoFocus
                defaultValue={data.description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                placeholder="Image"
                autoFocus
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>price</Form.Label>
              <Form.Control
                type="number"
                placeholder="price"
                autoFocus
                defaultValue={data.price}
                onChange={(e) => setPrice(e.target.value)}
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

export default Update_product;
