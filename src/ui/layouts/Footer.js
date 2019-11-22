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
<<<<<<< HEAD
        [theme.breakpoints.down('md')]: {
            height: '7vh',
        },
=======
>>>>>>> 9bfd405db47f4c758720a65b4ce07db58d7ee6fa
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
<<<<<<< HEAD
            width: '13vw',
=======
            width: '10vw',
>>>>>>> 9bfd405db47f4c758720a65b4ce07db58d7ee6fa
        },
        display: 'flex',
        flexDirection: "row-reverse",
        // justifyContent: 'flex-end',
        alignItems: 'center',
        background: 'blue',
        zIndex: 2,
<<<<<<< HEAD
        clipPath: 'polygon(25% 0%, 100% 0, 100% 100%, 0 100%, 0% 38%)',
=======
        clipPath: 'polygon(5% 0, 100% 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 100%)',
>>>>>>> 9bfd405db47f4c758720a65b4ce07db58d7ee6fa
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
