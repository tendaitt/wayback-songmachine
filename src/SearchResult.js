import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function SearchResult() {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>Search Bar</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>Albums</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>Songs</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>Artists</Paper>
                </Grid>
            </Grid>
        </div>
    )
}