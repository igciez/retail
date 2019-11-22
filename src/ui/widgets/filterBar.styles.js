import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
    console.log(theme);

    return ({
        root:{
            // display:'float',
            //height: '8.5vh',
            //position:'relative',
            // [theme.breakpoints.down('md')]: {
            //     size= '7vh',
            // },
            background: 'red',
            //zIndex:1,
        },
        frontDiv: {            
            height:'7.2vh',
            display: 'flex',
            flexDirection:"row-reverse",
            // justifyContent: 'flex-end',
            [theme.breakpoints.down('md')]: {
                clipPath: 'polygon(6% 0, 100% 0, 100% 100%, 0 100%, 0 100%);',
                // height:'7.2vh',
            },
            alignItems:'center',
            background: 'blue',
            //zIndex:2,
            clipPath: 'polygon(3% 0, 100% 0, 100% 0, 100% 100%, 0 100%)',
            
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
        filterIcon:{
            //marginLeft: '2rem',            
            marginRight: '3%',
            fontSize: '2rem',
            [theme.breakpoints.down('md')]: {
                marginRight: '3%',
                fontSize: '1.5rem',
            },
        }
    })
});

export default useStyles;