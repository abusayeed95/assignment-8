import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';


const Navigation = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            marginBottom: 25
        }
    }));
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container alignItems="center" justify="center" >
                        <Grid item xs={3}>
                            <Link to="/home" style={{ textDecoration: "none", color: "white", fontSize: "50" }}><h1>Post Zone</h1></Link>
                        </Grid>
                        <Grid item xs={8} />
                        <Grid item xs={1}>
                            <Link style={{ textDecoration: "none", color: "white", }} to="/home"><h3>Home</h3></Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );

}
export default Navigation;