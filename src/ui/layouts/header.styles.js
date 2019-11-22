import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: '8vh',        
    },
    appBar: {
        boxShadow: theme.shadows[0],
        position:'relative',
        //background: '#3f51b5',
        //background: 'none'
    },
    menuButton: {
        alignItems:'flex-start',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    button:{
        padding:'0 0.7rem'
    },
    title: {
        flexGrow: 1,
    },
    // content: {
    //     alignItems:'flex-start',
    //     flexGrow: 1,
    //     padding: theme.spacing(2),
    //     marginTop: theme.spacing(5),
    // },
}));

export default useStyles;