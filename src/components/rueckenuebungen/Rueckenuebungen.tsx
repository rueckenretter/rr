import * as React from 'react';
import { IRueckenuebungenProps } from './IRueckenuebungenProps';
import { IRueckenuebungenState } from './IRueckenuebungenState';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Home from '../home/Home';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import Globals from '../../models/Globals';
import { ExtensionStatus } from '../../models/ExtensionStatusEnum';
import DisplayExtensionStatus from '../extensionstatus/DisplayExtensionStatus';
import Config from '../config/Config';
import { Outlet, Link } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem'
import Popover from '@mui/material/Popover';

import './Rueckenuebungen.css';
import VideoPage from '../videopage/VideoPage';

export default class Rueckenuebungen extends React.Component<IRueckenuebungenProps, IRueckenuebungenState> {
    constructor(props: IRueckenuebungenProps) {
        super(props);

        this.state = {
            tabValue: 'home',
            extensionStatus: this.getExtensionStatus('HTSP_Extension_Identifier-1983dd3617d04cc7b69ee9ea7af7fe90'),
            modalOpen: true,
            uebungAnchorEl: null,
            uebungLabel: 'Übungen ▼',
            meditationAnchorEl: null,
            meditationLabel: 'Meditation ▼',
            urlId: ''
        };
    }

    componentDidMount = () => {
        this.setExtensionStatusMutationObserver();
    }

    private setUrlIdState = (urlId: string, tabValue: string): void => {
        this.setState({
            urlId: urlId,
            tabValue: tabValue,
            meditationAnchorEl: null,
            uebungAnchorEl: null
        })
    }

    public render(): React.ReactElement<IRueckenuebungenProps> {
        const style = {
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
        };
        const nackenUrls: Array<string> = [
            'jnC2Bh5G1tM'
        ]
        const rueckenUrls: Array<string> = [
            '_M425oItHno'
        ]
        const untererRueckenUrls: Array<string> = [
            'x3KaUc4Ttuc'
        ]
        const schulterUrls: Array<string> = [
            'f-5OEX7HurQ'
        ]
        const gymnBallUrls: Array<string> = [
            'E6bF_xXZqNg'
        ]
        const theraUrls: Array<string> = [
            'jC1LiVOHNKk'
        ]
        const stressUrls: Array<string> = [
            'rz7pUGKD7Tc'
        ]
        const negGedankenUrls: Array<string> = [
            'G6je6L5uEzA'
        ]

        return (
            <>
                {
                    this.state.extensionStatus == Globals.ExtensionStatus.Active &&
                    <>
                        <Box sx={{ width: '100%' }}>
                            <Tabs value={this.state.tabValue} onChange={
                                (event: React.SyntheticEvent, newValue: string) => { if (newValue != 'übungen' && newValue != 'meditation') this.setState({ tabValue: newValue }) }
                            }
                                className={`tabs ${this.props.themeMode}`}>
                                <Tab value='home' label='Startseite' />
                                <Tab value='übungen' label={this.state.uebungLabel} onClick={(e) => { this.setState({ uebungAnchorEl: e.currentTarget }) }} />
                                <Tab className='lastTab' value='meditation' label={this.state.meditationLabel} onClick={(e) => { this.setState({ meditationAnchorEl: e.currentTarget }) }} />
                                <Tab value='config' label='Einstellungen' />
                                <Link className='linkFragebogen' to="/fragebogen"><Tab label='Fragebogen' /></Link>
                            </Tabs>
                            <Popover
                                open={Boolean(this.state.uebungAnchorEl)}
                                anchorEl={this.state.uebungAnchorEl}
                                onClose={() => this.setState({ uebungAnchorEl: null })}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                            >
                                <MenuItem onClick={() => this.setUrlIdState(rueckenUrls[Math.floor(Math.random() * rueckenUrls.length)], 'übungen')}>
                                    Rücken
                                </MenuItem>
                                <MenuItem onClick={() => this.setUrlIdState(nackenUrls[Math.floor(Math.random() * nackenUrls.length)], 'übungen')}>
                                    Nacken
                                </MenuItem>
                                <MenuItem onClick={() => this.setUrlIdState(schulterUrls[Math.floor(Math.random() * schulterUrls.length)], 'übungen')}>
                                    Schultern
                                </MenuItem>
                                <MenuItem onClick={() => this.setUrlIdState(gymnBallUrls[Math.floor(Math.random() * gymnBallUrls.length)], 'übungen')}>
                                    Rücken mit Gymnastikball
                                </MenuItem>
                                <MenuItem onClick={() => this.setUrlIdState(theraUrls[Math.floor(Math.random() * theraUrls.length)], 'übungen')}>
                                    Rücken mit Theraband
                                </MenuItem>
                                <MenuItem onClick={() => this.setUrlIdState(untererRueckenUrls[Math.floor(Math.random() * untererRueckenUrls.length)], 'übungen')}>
                                    Dehnübung für unterer Rücken
                                </MenuItem>
                            </Popover>
                            <Popover
                                open={Boolean(this.state.meditationAnchorEl)}
                                anchorEl={this.state.meditationAnchorEl}
                                onClose={() => this.setState({ meditationAnchorEl: null })}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                            >
                                <MenuItem onClick={() => this.setUrlIdState(stressUrls[Math.floor(Math.random() * stressUrls.length)], 'meditation')}>
                                    Stressabau
                                </MenuItem>
                                <MenuItem onClick={() => this.setUrlIdState(negGedankenUrls[Math.floor(Math.random() * rueckenUrls.length)], 'meditation')}>
                                    Gegen negative Gedanken
                                </MenuItem>
                            </Popover>
                        </Box>

                        {this.state.tabValue === 'home' && <Home />}
                        {this.state.tabValue === 'config' && <div className='config'><Config /></div>}
                        {(this.state.tabValue === 'übungen' || this.state.tabValue == 'meditation') && <VideoPage urlId={this.state.urlId} />}


                        <div className='footer'>
                            <div className='impressum'>
                                <Link to={'/impressum'}>Impressum</Link>
                            </div>
                        </div>
                    </>
                }
                {
                    this.state.extensionStatus == Globals.ExtensionStatus.NotInstalled &&
                    <>
                        <DisplayExtensionStatus displayText={'Die Chrome Extension Rückenübungen ist nicht installiert.'} />
                    </>
                }
                {
                    this.state.extensionStatus == Globals.ExtensionStatus.Outdated &&
                    <>
                        <DisplayExtensionStatus displayText={'Die installierte Chrome Extension Rückenübungen hat eine veraltete Version.'} />
                    </>
                }

                {
                    !window.localStorage.getItem('fragebogen') &&
                    this.state.extensionStatus == Globals.ExtensionStatus.Active &&
                    <Modal
                        open={this.state.modalOpen}
                        onClose={() => {
                            window.localStorage.setItem('fragebogen', '1');
                            this.setState({ modalOpen: !this.state.modalOpen })
                        }}
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Ist dein Rücken in Not?
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Möchtest du einen Fragebogen zur Rettung deines Rückgrats ausfüllen?
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                                <Link to="/fragebogen"><Button variant="contained" onClick={() => { window.localStorage.setItem('fragebogen', '1'); }}>Ja</Button></Link>
                                <Button variant="outlined" onClick={() => {
                                    window.localStorage.setItem('fragebogen', '1');
                                    this.setState({ modalOpen: !this.state.modalOpen })
                                }
                                }>Nein</Button>
                            </Box>
                        </Box>
                    </Modal>
                }
            </>
        );
    }

    public getExtensionStatus = (extensionId: string): ExtensionStatus => {
        try {
            const extensionStatusElement: (HTMLElement | null) = document.getElementById(extensionId);
            if (!extensionStatusElement)
            return ExtensionStatus.NotInstalled;
            
            const extensionVersion: number = + JSON.parse(extensionStatusElement.innerText).version;
            if (!extensionVersion || extensionVersion < Globals.RequiredExtensionVersion)
            return ExtensionStatus.Outdated;
            
            return ExtensionStatus.Active;
            
        }
        catch{
            return ExtensionStatus.NotInstalled;
        }
    }

    public setExtensionStatusMutationObserver = (): void => {
        const extensionStatusElement: HTMLElement | null = document.getElementById('HTSP_Extension_Identifier-1983dd3617d04cc7b69ee9ea7af7fe90');

        if (!extensionStatusElement)
            return;

        const mutationObserver: MutationObserver = new MutationObserver((mutations) => {
            this.setState({
                extensionStatus: this.getExtensionStatus('HTSP_Extension_Identifier-1983dd3617d04cc7b69ee9ea7af7fe90')
            })
        });

        mutationObserver.observe(extensionStatusElement, {
            childList: true,
            subtree: false
        });
    }
}