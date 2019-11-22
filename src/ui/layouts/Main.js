import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import HomeTemporary from '../paginas/HomeTemporary';
import HomeSpacing from '../paginas/HomeSpacing';
import Home from "../paginas/Home";
<<<<<<< HEAD
import HomeDos from "../paginas/HomeDos";
=======
>>>>>>> 9bfd405db47f4c758720a65b4ce07db58d7ee6fa
//import Login from '../paginas/Login';

const Main = () => (
    <Switch>
        <Route exact path='/homeTemporary' component={HomeTemporary} />
        {/* <Route exact path='/home' component={Home} /> */}
        <Route exact path='/homeSpacing' component={HomeSpacing} />
<<<<<<< HEAD
        <Route exact path='/home' component={HomeDos} />
=======
        <Route exact path='/home' component={Home} />
>>>>>>> 9bfd405db47f4c758720a65b4ce07db58d7ee6fa
    </Switch>
);

export default Main;