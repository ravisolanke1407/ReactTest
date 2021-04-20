import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import ModalView from "./components/modal";
import TableView from "./components/table";

function App() {
  

  return (
    <div className="App">
      <Container>
        <ModalView/>
        <TableView />
      </Container>
    </div>
  );
}

export default App;
