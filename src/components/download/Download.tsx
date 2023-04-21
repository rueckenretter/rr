import * as React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default class Download extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
        };
    }

    public render(): React.ReactElement<any> {
        return (
            <>
                <Grid item xs={6} sx={{marginTop: 10}}>
                    <Paper elevation={12} sx={{padding: 2, display: 'flex', flexDirection: 'column'}}>
                        <Typography variant="h5">
                            Download Version 1.0
                        </Typography>
                        <Button onClick={this.download} variant="contained">Download</Button>
                    </Paper>
                </Grid>
            </>
        );
    }

    public download = (): void => {
        fetch(window.location.origin + '/extension/extension.zip')
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = 'extension.zip';
                    a.click();
                });
        });
    }
}