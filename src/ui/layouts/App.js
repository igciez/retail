import React from 'react';
import Header from './Header';
import Main from './Main';
import FilterBar from '../widgets/FilterBar';
import './app.styles.css';

const App = () => (
    <React.Fragment>
        <Header />
        <FilterBar />
        <Main />
    </React.Fragment>
)

export default App;