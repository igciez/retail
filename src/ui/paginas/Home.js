import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import images from "../assets/images";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
<<<<<<< HEAD
        //height: "70vh",
        width: "90vw",
        justifyContent: 'space-around',
        overflow: 'hidden',
        margin:theme.spacing(4),
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        //width: "80%",
        padding:'1rem',
        margin:'1rem',
        // height: "100%",        
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',

=======
        justifyContent: 'space-around',
        overflow: 'hidden',
        margin:theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "60vw",
        // height: "40vh",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        
>>>>>>> 9bfd405db47f4c758720a65b4ce07db58d7ee6fa
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
<<<<<<< HEAD
    }
=======
    },
>>>>>>> 9bfd405db47f4c758720a65b4ce07db58d7ee6fa
}));


const Home = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
<<<<<<< HEAD
            <GridList cellHeight={200} spacing={22} cols={6}>
                {images.map(tile => (
                    <GridListTile key={tile.title} rows={1.5} cols={1.5}>
=======
            <GridList cellHeight={200} spacing={22} className={classes.gridList}>
                {images.map(tile => (
                    <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
>>>>>>> 9bfd405db47f4c758720a65b4ce07db58d7ee6fa
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            titlePosition="top"
                            actionIcon={
                                <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                                    <StarBorderIcon />
                                </IconButton>
                            }
                            actionPosition="left"
                            className={classes.titleBar}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export default Home;