import React from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar, CssBaseline, IconButton, Button, Toolbar,
    Grid, Hidden
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './header.styles';

const Header = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar className={classes.appBar}>
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
                        <Button color="inherit">Icono</Button>
                    </IconButton>
                    <Hidden smDown className={classes.contentButton}>
                        <Grid container>
                            <Grid item sm>
                                <Button color="inherit">Icono</Button>
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
                            <Grid item sm>
                                <Button color="inherit">Login</Button>
                            </Grid>
                        </Grid>
                    </Hidden>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;