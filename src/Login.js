import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Login() {

    return (
            <div className="login">
                <Typography component="h1" variant="h5">Log In</Typography>
                <a href="/api/login">Login</a>
            </div>
    )
}