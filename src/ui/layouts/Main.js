import React from 'react';
import { Switch, Route, } from 'react-router-dom';
//import HomePage from '../paginas/HomePage.js';
import HomeTemporary from '../paginas/HomeTemporary';
import HomeSpacing from '../paginas/HomeSpacing';
//import Login from '../paginas/Login';

const Main = () => (
    <Switch>
        <Route exact path='/homeTemporary' component={HomeTemporary} />
        {/* <Route exact path='/home' component={Home} /> */}
        <Route exact path='/homeSpacing' component={HomeSpacing} />
    </Switch>
);

export default Main;