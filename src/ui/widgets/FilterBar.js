import React from 'react';
import FilterListSharpIcon from '@material-ui/icons/FilterListSharp';
// import {Grid} from '@material-ui/core';
import useStyles from './filterBar.styles';

const FilterBar = () => {
    const clasess = useStyles();
    return (
        <div className={clasess.root} >
            <div className={clasess.frontDiv}>
                <FilterListSharpIcon className={clasess.filterIcon} />
            </div>
        </div>

    );
};

export default FilterBar;