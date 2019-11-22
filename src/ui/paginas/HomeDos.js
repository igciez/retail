import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import images from '../assets/images';
import Footer from '../layouts/Footer';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        margin: '0 auto',
        display: 'flex',
    },
    container: {
        width: '92vw',        
        background: 'pink',        
        //padding: '1rem',
        
    },
    grid: {
        display: 'flex',
        justifyContent: 'center',
        //alignContent: 'flex-start',
        padding: '1rem',
    },
    image: {
        maxWidth: '100%', //Maximo readaptable del ancho, del valor para arriba no se adapta. (en caso de porcentaje permite que siempre se readpte)
        maxHeight: '100%',//minHeight : minimo readptable, del valor para abajo no se adapta.
    },
    footer: {
        position: 'fixed',
        right: '0%',
        bottom: '0%',
        width: '7%',
        background: 'violet',
        clipPath: 'polygon(25% 0%, 100% 0, 100% 100%, 0 100%, 0% 38%)',
        boxShadow:theme.shadows[22],
        [theme.breakpoints.down('md')]: {
            width: '8%',
            height: '5%',
        },
    }
}));


const HomeDos = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid
                container
                // spacing={3}
                direction="row"
                //justify="center"
                //alignItems="flex-start"
                className={classes.container}
            >
                {
                    images.map(image => (
                        <Grid key={image.title} item xs={6} md={3} className={classes.grid}>
                            <img src={image.img} alt={image.title} className={classes.image} />
                        </Grid>
                    ))
                }
            </Grid>
            <div className={classes.footer}>
                <h4>Sticky sidebar!</h4>
                <p>Scroll down to see.</p>
            </div>

        </div>
    )
};

export default HomeDos;