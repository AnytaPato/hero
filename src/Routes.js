import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import HeroListContainer from "./containers/HeroListContainer";
import LoginContainer from "./containers/LoginContainer";
import AboutContainer from "./containers/AboutContainer";


const Routes = () => {
return(
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/List" component={ HeroListContainer } />
        <Route path="/Login" component={ LoginContainer } />
        <Route path="/About" component={ AboutContainer } />

    </Switch>
)
}

export default Routes;