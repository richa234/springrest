import React, { Component } from 'react';
import base_url from "../api/bootapi";
import axios from 'axios';
import { Card, Badge, CardTitle, Button, CardImg, CardFooter, CardBody, Table } from 'reactstrap';
import Select from 'react-select';
import AllitemsHeader from './AllitemsHeader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Allitems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            visible: 6
        };
        this.showMore = this.showMore.bind(this);
    }
    componentDidMount() {
        axios.get(`${base_url}/product`).then(response => response.data).then((data) => {
            this.setState({ product: data });

        });
    }
    showMore() {
        this.setState((old) => {
            return { visible: old.visible + 6 }
        })
    }
    render() {
        const showToast = () => {
            toast.success("Your item selected successfully!", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        };
        const optCat = [
            { label: "All catagory", value: 1 },
            { label: "Charger", value: 2 },
            { label: "Earphone", value: 3 },
            { label: "Headphones", value: 4 },
            { label: "Laptop", value: 5 },
            { label: "Phone", value: 6 },
            { label: "Smart Watch", value: 7 },
            { label: "Speaker", value: 8 },
        ];
        const optBrand = [
            { label: "All Brand", value: 1 },
            { label: "Apple", value: 2 },
            { label: "Xiaomi", value: 3 },
            { label: "Samsung", value: 4 },
            { label: "JBL", value: 5 },
            { label: "Vivo", value: 6 },
            { label: "OPPO", value: 7 },
        ];
        const optSort = [
            { label: "None", value: 1 },
            { label: "Newest", value: 2 },
            { label: "Low to High", value: 3 },
            { label: "High to Low", value: 4 },
           
        ];
        return (
            <div><AllitemsHeader />
                            <Table>
                                <thead>
                                    <th>
                                    <p>Catagories</p>
                                    <Select styles={{ color: "blue", fontSize: 4}} options={optCat}/>
                                    </th>
                                    <th>
                                    <p>Brand</p>
                                    <Select styles={{ color: "blue", fontSize: 4}} options={optBrand}/>
                                    </th>
                                    <th>
                                    <p>Sort by</p>
                                    <Select styles={{ color: "blue", fontSize: 4}} options={optSort}/>
                                    </th>
                                </thead>
                            </Table>
            < div className = "container py-4" >
                <div className="row">
                    {this.state.product.slice(0, this.state.visible).map(
                            product =>
                                <div className="col-md-4 mb-5 mt-5 col-centered" key={product.id} >
                                    <Card className="card text-center "
                                        style={{ height: '450px', width: '250px', padding: 20, margin: "auto" }}>
                                        <CardImg variant="top" src={product.image}  alt="Image" ></CardImg> 
                                        <CardBody>
                                            <CardTitle style={{ fontSize: 16, fontFamily:"serif" }}>
                                                {product.title}
                                            </CardTitle>
                                        </CardBody>
                                        <CardFooter>    
                                                <small className="price text-success" ><br></br>
                                                <h6 style={{color:"darkred"}}>{product.discount}% off</h6>
                                                <h4> ${product.price}</h4>
                                                <a className="btn btn-primary"  onClick={showToast}> Select</a>
                                                </small>
                                        </CardFooter>
                                    </Card>
                                    <Badge variant="primary" style={{
                                        position: 'absolute',
                                        left: 180,
                                        right: 0,
                                        top: 0,
                                        bottom: 250,
                                        background: "red",
                                        height:'20px'
                                    }}>{product.tag}</Badge>{' '}
                                </div>
                        )
                    }
                </div>
                </div >
            <div class="col-md-3 text-center"  >
                {
                    this.state.visible < this.state.product.length &&

                    <Button  className="text-center text-md-right float-center" color="info" onClick={this.showMore}>Show More</Button>

                }
            </div>
            <hr></hr>
            </div >
        )
    }
}


