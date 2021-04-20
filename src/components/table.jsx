import React from "react";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";

const TableView = () => {

  return (
    <React.Fragment>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          
            <tr >
              <td>{1}</td>
              <td>{'Test'}</td>
              <td>{'Test'}</td>
              <td>{100}</td>
              <td>
                <Button variant="outline-success"   >
                  Edit
                </Button>
                <Button  variant="outline-danger" >
                  Delete
                </Button>
              </td>
            </tr>
       
        </tbody>
      </Table>

     
    </React.Fragment>
  );
};

export default TableView;
