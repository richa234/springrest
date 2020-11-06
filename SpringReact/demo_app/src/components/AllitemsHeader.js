import React from 'react';
import {Jumbotron,Container,Button} from 'reactstrap';
const AllitemsHeader=()=>{
    return(
        <div>
            <Jumbotron style={{backgroundColor:"floralwhite"}}>
                <h5 style={{color:"black"}} className="display-4">Accessories</h5>
                <p>
                    Select the <b>accessories</b> that best suits your needs
                </p>
            </Jumbotron>
        </div>
    );
}

export default AllitemsHeader;