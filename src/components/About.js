import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
    return (
        <div className="App">
            <div>
                <Header />
            </div>
            <header className="App-header">
              <img src={ process.env.PUBLIC_URL + "/images/super.png"} width="200" alt="Superhero"/>
              <h1>App realizada con la Api SUPERHERO</h1>
              <p>La API de superhéroes es una fuente de datos cuantificada y accesible mediante programación de todos los superhéroes del universo del cómic. Hemos tomado todas las cosas y las hemos reunido en una forma que es más fácil de consumir con software. Luego creamos una API para que puedas consumirla sin problemas.</p> 
            </header>
            <div>
                <Footer />
            </div>
            
        </div>
    )
}

export default About;
