import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import HeroListContainer from "./containers/HeroListContainer";
import LoginContainer from "./containers/LoginContainer";


const Routes = () => {
return(
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/Hero" component={ HeroListContainer } />
        <Route path="/Login" component={ LoginContainer } />

    </Switch>
)
}

export default Routes;