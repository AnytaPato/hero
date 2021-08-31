import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
   
        return(
          <div className="App">
            <header className="App-header">
              <img src={ process.env.PUBLIC_URL + "/images/super.png"} width="200" alt="Superhero"/>
              <h1>Bienvenidos</h1>
              <Link to="/Login">Login</Link> 
            </header>
          </div>

        );
    }


export default Home;