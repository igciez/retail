import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',        
    },
    appBar: {
        boxShadow: theme.shadows[0],
        position:'relative',
        background: '#3f51b5',
    },
    menuButton: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    title: {
        flexGrow: 1,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(2),
        marginTop: theme.spacing(5),

    },
    // contentButton:{
    //     display: 'flex', 
    //     justifyContent:'space-between',
    //     alignItems:'flex-end',
    // },
    // button:{
    //     flexGrow: 1,
    // }
}));

export default useStyles;