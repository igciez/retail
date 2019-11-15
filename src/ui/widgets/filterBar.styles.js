import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
    console.log(theme);

    return ({
        root:{
            display:'float',
            height: '10vh',
            background: 'red',
        },
        frontDiv: {            
            //position:'absoulte',
            // top: 0,
            // left: 0,
            // right: 0,
            // bottom:0,
            height:'100%',
            display: 'flex',
            flexDirection:"row-reverse", 
            // justifyContent: 'flex-end',
            alignItems:'center',
            background: 'blue',
            zIndex:2,
            clipPath: 'polygon(5% 0, 100% 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 100%)',
            
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
            margin: ' 2rem' ,
            fontSize: '2rem'
        }
    })
});

export default useStyles;