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

export default class Config extends React.Component<IConfigProps, IConfigState> {
    constructor(props: IConfigProps) {
        super(props);

        this.state = {
        };
    }

    public render(): React.ReactElement<IConfigProps> {
        return (
            <>
                <Box sx={{ display: 'flex' }}>
                    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                        <FormLabel component="legend">Einstellungen</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={true} onChange={() => {}} name="config1" />
                                }
                                label="config1"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={true} onChange={() => {}} name="config2" />
                                }
                                label="config2"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={false} onChange={() => {}} name="config3" />
                                }
                                label="config3"
                            />
                        </FormGroup>
                        <FormHelperText>Hast du einen Rücken?</FormHelperText>
                    </FormControl>
                </Box>
            </>
        );
    }
}