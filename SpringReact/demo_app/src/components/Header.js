import React from 'react';
import {Jumbotron,Container,Button} from 'reactstrap';


const Home=()=>{
    return(
        <div>
            <Jumbotron className="text-center"style={{backgroundColor:"cadetblue"}}>
                <h1 style={{color:"bisque"}} className="display-3">My Cart</h1>
                <p style={{color:"bisque"}}>
                    Let's Start Shopping Your Dreams!
                </p>
            </Jumbotron>
        </div>
    );
}

export default Home;