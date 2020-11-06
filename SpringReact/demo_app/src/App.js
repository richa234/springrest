import logo from './logo.svg';
import './App.css';
import { Col, Container, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from "./components/Home";
import Allitems from './components/Allitems';


import Menu from "./components/Menu";
import Headers from "./components/Header";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {React,useState} from 'react';
import About from "./components/About";

import 'react-toastify/dist/ReactToastify.css';



const App=()=> {

  const onbutton = () => {
    toast("Selected to your cart!");
    toast.success("Done!", {
      position: "bottom-center"
    });
  };

  return (
    <div>
      <Router>
        
      <ToastContainer />
      <Container>
        
      <Headers />
      
        <Row>
          <Col md={2}>
        <h3>Menu</h3>
        <Menu/>
          </Col>
          <Col md={9}>
        

        <Route path="/" component={Home} exact />       
       
        <Route path="/view-product" component={Allitems} exact />
        <Route path="/about-us" component={About} exact />
        <Route path="/contact" component="contact" exact />
          </Col>
        </Row>
      </Container>

      </Router>



    </div>
  );
}

export default App;
