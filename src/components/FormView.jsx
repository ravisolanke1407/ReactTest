import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";


const FormView = ({setModalView}) => {
  const [item, setItem] = useState("");
  const [description, setDescription] = useState();
  const [price, setPrice] = useState(0);


  const changeHandlerItem = (event) => {
    setItem(event.target.value);
  };
  const changeHandlerDescription = (event) => {
    setDescription(event.target.value);
  };

  const changeHandlerPrice = (event) => {
    setPrice(event.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(item,description,price)
  };
  const modalHandler = (e) => {
    setModalView(false);
   
  };
  return (
    <>
      <Form onSubmit={(e) => submitHandler(e)}>
        <Form.Group controlId="item">
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            id="item"
            type="text"
            value={item}
            placeholder="Enter Item Name"
            onChange={(e) => changeHandlerItem(e)}
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Item Description</Form.Label>
          <Form.Control
            id="description"
            type="text"
            value={description}
            placeholder="Item Description"
            onChange={(e) => changeHandlerDescription(e)}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            id="price"
            type="number"
            value={price}
            placeholder="Item Price"
            onChange={(e) => changeHandlerPrice(e)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={(e) => modalHandler(e)}>
          Submit
        </Button>
        <Button variant="danger" onClick={(e) => modalHandler(e)}>
          Close
        </Button>
      </Form>
    </>
  );
};
export default FormView;
