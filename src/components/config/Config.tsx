import * as React from 'react';
import { IConfigProps } from './IConfigProps';
import { IConfigState } from './IConfigState';

import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';

export default class Config extends React.Component<IConfigProps, IConfigState> {
    constructor(props: IConfigProps) {
        super(props);

        this.state = {
            exerciseIntervalMins: window.localStorage.getItem('exerciseIntervalMins') ? +(window.localStorage.getItem('exerciseIntervalMins') as string) : 60
        };
    }

    public render(): React.ReactElement<IConfigProps> {
        return (
            <>
                <Box sx={{ display: 'flex' }}>
                    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                        <FormLabel component="legend">Einstellungen</FormLabel>
                        <FormLabel>Wie oft möchtest du an deine Übungen erinnert werden?</FormLabel>
                        <Slider
                            defaultValue={60}
                            valueLabelDisplay="auto"
                            step={10}
                            min={30}
                            max={180}
                            value={this.state.exerciseIntervalMins}
                            onChange={(e, v) => {
                                this.setState({ exerciseIntervalMins: v as number });
                                window.localStorage.setItem('exerciseIntervalMins', v.toString());

                                document.dispatchEvent(new CustomEvent('saveUserPreference', 
                                {
                                    detail: {
                                        interval: v
                                    }
                                }));
                            }}
                            marks
                        />
                        <FormLabel className='exerciseIntervalMinsLabel'>Alle <div className='exerciseIntervalMins'>{this.state.exerciseIntervalMins}</div> Minuten.</FormLabel>
                        <FormHelperText>Angabe in Minuten.</FormHelperText>
                    </FormControl>
                </Box>
            </>
        );
    }
}