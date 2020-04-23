import React from 'react'
import { CssBaseline, Container } from '@material-ui/core'
import SearchResult from './SearchResult';

export default function Home() {

    return (

        <Container component="main" maxWidth="lg" style={{backgroundColor: '#51d0de'}}>
            <CssBaseline/>
            <div>
                <SearchResult/>
            </div>
        </Container>
    )
}