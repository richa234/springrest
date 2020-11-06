import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';
const Menu=()=>{
  useEffect(()=>{
    document.title="Add Product";
  },[])
    return(

        <ListGroup>
      <Link className="justify-content-between  list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
      <Link className="justify-content-between list-group-item list-group-item-action"tag="a" to="/view-product" action>View Products</Link>
      <Link className="justify-content-between list-group-item list-group-item-action"tag="a" to="/view-cart" action>View Cart</Link>
      <Link className="justify-content-between list-group-item list-group-item-action"tag="a" to="/about-us" action>About Us </Link>
      <Link className="justify-content-between list-group-item list-group-item-action"tag="a" to="/contact" action>Contact</Link>
    </ListGroup>
    );
}

export default Menu;