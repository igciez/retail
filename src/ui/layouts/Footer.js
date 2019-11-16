import React from "react";
import FilterListSharpIcon from '@material-ui/icons/FilterListSharp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding:0,
        margin:0,
        display:'flex',
        flexDirection: "row-reverse",
        height: '10vh',
        background: 'red',
        zIndex: 1,
    },
    frontDiv: {
        //position:'absoulte',
        // top: 0,
        // left: 0,
        // right: 0,
        // bottom:0,
        height: '100%',
        width:"7vw", // add media query!!!
        [theme.breakpoints.down('md')]: {
            width: '10vw',
        },
        display: 'flex',
        flexDirection: "row-reverse",
        // justifyContent: 'flex-end',
        alignItems: 'center',
        background: 'blue',
        zIndex: 2,
        clipPath: 'polygon(5% 0, 100% 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 100%)',
        boxShadow:theme.shadows[22],
        // '&::before':{
        //     content: '""',
        //     position: 'absolute',
        //     width:'10vw',
        //     height:'10vh',
        //     top:0,
        //     left:-10,
        //     background: 'red',
        //     transform: 'rotate(40deg)',
        // }

    },
    filterIcon: {
        margin: '2rem',
        fontSize: '2rem',
        [theme.breakpoints.down('md')]: {
            margin: '.5rem',
            fontSize: '1.5rem',
        },
    }
}))

const Footer = () => {

    const clasess = useStyles();

    return (
        <div className={clasess.root} >
            <div className={clasess.frontDiv}>
                <FilterListSharpIcon className={clasess.filterIcon} />
            </div>
        </div>
    );
};

export default Footer;
