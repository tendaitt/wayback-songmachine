import React from 'react'
import { CssBaseline, Container, Typography } from '@material-ui/core'
import SearchResult from './SearchResult';

export default function Home() {

    return (

        <Container component="main" maxWidth="lg">
            <div>
                <CssBaseline/>
                <Typography component="h1" style={{backgroundColor: '#51d0de', height: '100vh'}} />
                <SearchResult/>
            </div>
        </Container>
    )
}