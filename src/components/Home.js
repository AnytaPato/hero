import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
   
        return(
          <div className="App">
            <div>
              <Header />
            </div>
            <header className="App-header">
              <img src={ process.env.PUBLIC_URL + "/images/super.png"} width="200" alt="Superhero"/>
              <h1>Bienvenidos</h1> 
               <h1>al mejor</h1>
              <h4>Buscador de Super héroes </h4>
            </header>
            <div>
              <Footer /> 
            </div>
          </div>

        );
    }


export default Home;