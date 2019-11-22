import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import HomeTemporary from '../paginas/HomeTemporary';
import HomeSpacing from '../paginas/HomeSpacing';
import Home from "../paginas/Home";
import HomeDos from "../paginas/HomeDos";
//import Login from '../paginas/Login';

const Main = () => (
    <Switch>
        <Route exact path='/homeTemporary' component={HomeTemporary} />
        {/* <Route exact path='/home' component={Home} /> */}
        <Route exact path='/homeSpacing' component={HomeSpacing} />
        <Route exact path='/home' component={HomeDos} />
    </Switch>
);

export default Main;