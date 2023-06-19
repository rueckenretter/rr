import * as React from 'react';
import { IVideoPageProps } from './IVideoPageProps';
import { IVideoPageState } from './IVideoPageState';
import hey from '../../assets/gifs/hey.gif';

import Grid from '@mui/material/Grid';

import gif1 from '../../assets/gifs/Abtauchen.gif';
import gif2 from '../../assets/gifs/Dehnung_des_Rücken.gif';
import gif3 from '../../assets/gifs/Die_Rotation.gif';
import gif4 from '../../assets/gifs/Entspannung_Lendenwirbelsäule_.gif';
import gif5 from '../../assets/gifs/Halbmond.gif';
import gif6 from '../../assets/gifs/Nacken_Relax.gif';
import gif7 from '../../assets/gifs/Schräge_Brustmuskeln.gif';
import gif8 from '../../assets/gifs/Schulter_Kuss.gif';
import gif9 from '../../assets/gifs/Schulterheber.gif';
import gif10 from '../../assets/gifs/Seitneigung.gif';
import gif11 from '../../assets/gifs/U-Halte.gif';

export default class VideoPage extends React.Component<IVideoPageProps, IVideoPageState> {
    constructor(props: IVideoPageProps) {
        super(props);

        this.state = {
        };
    }

    public render(): React.ReactElement<IVideoPageProps> {
        const gifs = [
            gif1,
            gif2,
            gif3,
            gif4,
            gif5,
            gif6,
            gif7,
            gif8,
            gif9,
            gif10,
            gif11
        ]

        return (
            <>
                <img className='logo' src={gifs[Math.floor(Math.random()*gifs.length)]}></img>

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
                            src={`https://www.youtube.com/embed/${this.props.urlId}`}
                            width={900}
                            height={600}
                        ></iframe>
                    </Grid>

                </Grid>
            </>
        );
    }
}