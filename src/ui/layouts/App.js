import React from 'react';
import Header from './Header';
import Main from './Main';
import FilterBar from '../widgets/FilterBar';
//import Footer from "./Footer";
import './app.styles.css';

const App = () => (
    <React.Fragment>
        <Header />
        <FilterBar />
        <Main />
        {/* <Footer /> */}
    </React.Fragment>
)

export default App;