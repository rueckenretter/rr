import * as React from 'react';
import { IHomeProps } from './IHomeProps';
import { IHomeState } from './IHomeState';

import Grid from '@mui/material/Grid';

export default class Home extends React.Component<IHomeProps, IHomeState> {
    constructor(props: IHomeProps) {
        super(props);

        this.state = {
        };
    }

    public render(): React.ReactElement<IHomeProps> {
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
                        <iframe
                            src="https://www.youtube.com/embed/h2UtFsCobfc"
                            width={900}
                            height={600}
                        ></iframe>
                    </Grid>

                </Grid>
            </>
        );
    }
}