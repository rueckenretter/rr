import * as React from 'react';

import Grid from '@mui/material/Grid';

export default class Impressum extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
        };
    }

    public render(): React.ReactElement<any> {
        return (
            <>
                <Grid sx={{}}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Grid>
            </>
        );
    }
}