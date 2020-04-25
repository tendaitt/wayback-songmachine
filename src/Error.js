import React from 'react';
import Typography from '@material-ui/core/Typography'

export default function Error() {

    const { errorMessage } = this.props.params;

    return(
        <div className="error">
            <Typography component="h2" variant="h5">An Error Occured</Typography>
            <p>{errorMessage}</p>
        </div>
    )
}