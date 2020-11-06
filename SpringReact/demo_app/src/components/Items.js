import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Container
} from 'reactstrap';

const Items = ({ items }) => {
    return (
        <div className="d-flex justify-content-center">
            <CardDeck>
                <Card className="text-center" style={{ width: 340 }}>
                    <CardBody>
                        <CardSubtitle className="font-weight-bold">{items.title}

                        </CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <div className="options d-flex flex-fill">
                            <select className="custom-select mr-1">
                                <option selected>Color</option>
                                <option value="1">Green</option>
                                <option value="2">Blue</option>
                                <option value="3">Red</option>
                            </select>
                            <select className="custom-select ml-1">
                                <option selected>Size</option>
                                <option value="1">41</option>
                                <option value="2">42</option>
                                <option value="3">43</option>
                            </select>
                        </div>
                        <div className="buy d-flex justify-content-between align-items-center">
                            <div className="price text-success"><h5 className="mt-4">{items.price}</h5></div>
                            <a href="#" className="btn btn-primary mt-3"><i className="fas fa-shopping-cart"></i> Save for Later</a>
                            <a href="#" className="btn btn-danger mt-3"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                        </div>
                    </CardBody>
                </Card>


            </CardDeck>
        </div>

    );
};

export default Items;