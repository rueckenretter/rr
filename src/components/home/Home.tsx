import * as React from 'react';
import { IHomeProps } from './IHomeProps';
import { IHomeState } from './IHomeState';
import hey from '../../assets/gifs/hey.gif';
import './Home.css';

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
                <img className='logo' src={hey}></img>

                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Grid item xs={6}>
                        <div className='introduction'>
                            <h1>Wilkommen bei den Rückgratrettern!</h1>
                            <p>Schau dich gerne nach passenden Übungen für deinen Rücken oder deine mentalen Gesundheit um.</p>
                            <p>Wir erinnern dich gerne mit Hilfe unserer Chrome Extension deine Übungen einzuhalten.</p>
                        </div>

                        <iframe
                            src="https://www.youtube.com/embed/f-5OEX7HurQ"
                            width={900}
                            height={600}
                        ></iframe>
                    </Grid>

                </Grid>
            </>
        );
    }
}