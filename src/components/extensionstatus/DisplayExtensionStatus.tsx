import * as React from 'react';
import { IDisplayExtensionStatusProps } from './IDisplayExtensionStatusProps';
import { IDisplayExtensionStatusState } from './IDisplayExtensionStatusState';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Download from '../download/Download';

export default class DisplayExtensionStatus extends React.Component<IDisplayExtensionStatusProps, IDisplayExtensionStatusState> {
    constructor(props: IDisplayExtensionStatusProps) {
        super(props);

        this.state = {
        };
    }

    public render(): React.ReactElement<IDisplayExtensionStatusProps> {
        return (
            <>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Grid item xs={6}>
                        <Paper elevation={12} sx={{padding: 2}}>
                            <Typography variant="h5">
                                {this.props.displayText}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Download />
                </Grid>
            </>
        );
    }
}