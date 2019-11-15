import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


const drawerWidth = 100;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        boxShadow: theme.shadows[0]
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
    gridContainer: {
        // marginLeft: theme.spacing(7),
    }
}));

const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1, //margen general (sin makeStyles)
    border: 3,
    borderTop: '16px solid black',
    // borderRadius:'16px, 0px,0px,0px'
    // style: { width: '5rem', height: '5rem' },
};

const Home = () => {

    const classes = useStyles;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar  >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        className={classes.menuButton}
                        component={Link}
                        to='/homeSpacing'
                    >
                        <MenuIcon />
                    </IconButton>
                    <Grid container className={classes.gridContainer}>
                        <Grid item sm>
                            <Button color="inherit">Icono</Button>
                        </Grid>
                        <Hidden smDown>
                            <Grid item sm>
                                <Button color="inherit">Login</Button>
                            </Grid>
                            <Grid item sm>
                                <Button color="inherit">Login</Button>
                            </Grid>
                            <Grid item sm>
                                <Button color="inherit">Login</Button>
                            </Grid>
                            <Grid item sm>
                                <Button color="inherit">Login</Button>
                            </Grid>
                            <Grid item sm>
                                <Button color="inherit">Login</Button>
                            </Grid>
                            <Grid item sm>
                                <Button color="inherit">Login</Button>
                            </Grid>

                        </Hidden>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box  {...defaultProps}>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                        gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                        donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                        imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                        arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                        donec massa sapien faucibus et molestie ac.
                </Typography>
                    <Typography paragraph>
                        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                        facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                        tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                        consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                        hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                        tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                        nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                        accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
                </main>
            </Box>
        </div >
    );
};

export default Home;