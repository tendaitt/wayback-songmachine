import React from 'react'
import { CssBaseline, Container } from '@material-ui/core'
import SearchResult from './SearchResult';
import SearchBar from 'material-ui-search-bar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#202040',
        padding: theme.spacing(4)
    },    
    searchBar: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
        margin: '0 auto',
        flexGrow: 1,
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container component="main" maxWidth="lg">
            <CssBaseline/>
            <div style={{padding: 10}}>
                <SearchBar
                    onChange={() => console.log('onChange')}
                    onRequestSearch={() => console.log('onRequestSearch')}
                    className={classes.searchBar}
                />
            </div>
            <div style={{padding: 10}}>
                <SearchResult/>
            </div>
            </Container>
        </div>
    )
}
