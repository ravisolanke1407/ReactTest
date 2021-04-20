import React, { useState } from "react";
import Modal from "react-modal";
import { Button } from "react-bootstrap";
import FormView from "./FormView";
const ModalView = () => {

  const [modalView, setModalView] = useState(false);

  const modalHandler = (e) => {
    setModalView(true);
  };
 
  
  return (
    <>
    <h3 className='inventory-header'>Inventory</h3>
      <Button variant="outline-primary" className='add-inventory' onClick={(e) => modalHandler(e)}>
        Add Inventory Data
      </Button>
      <Modal isOpen={modalView } ariaHideApp={false}>
        <FormView  setModalView={setModalView}  />
      </Modal>
    </>
  );
};
export default ModalView;
