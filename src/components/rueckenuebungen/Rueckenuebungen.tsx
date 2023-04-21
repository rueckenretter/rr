import * as React from 'react';
import { IRueckenuebungenProps } from './IRueckenuebungenProps';
import { IRueckenuebungenState } from './IRueckenuebungenState';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Home from '../home/Home';

import Globals from '../../models/Globals';
import { ExtensionStatus } from '../../models/ExtensionStatusEnum';
import DisplayExtensionStatus from '../extensionstatus/DisplayExtensionStatus';
import Config from '../config/Config';

export default class Rueckenuebungen extends React.Component<IRueckenuebungenProps, IRueckenuebungenState> {
    constructor(props: IRueckenuebungenProps) {
        super(props);

        this.state = {
            tabValue: 'home',
            extensionStatus: Globals.ExtensionStatus.NotInstalled
        };
    }

    componentDidMount = () => {
        const extensionStatus: ExtensionStatus = this.getExtensionStatus('IDIDIDIDIDIDIIDIDID');

        this.setState({
            extensionStatus: extensionStatus
        })
    }

    public render(): React.ReactElement<IRueckenuebungenProps> {
        return (
            <>
                {/* TODO EVENT LISTENER MIT LOADER ZUM SETZEN VON EXTENSION STATE */}
                <div id='HTSP_Extension_Identifier-1983dd3617d04cc7b69ee9ea7af7fe90'></div>
                {
                    this.state.extensionStatus == Globals.ExtensionStatus.Active &&
                    <>
                        <Box sx={{ width: '100%' }}>
                            <Tabs value={this.state.tabValue} onChange={
                                (event: React.SyntheticEvent, newValue: string) => { this.setState({ tabValue: newValue }) }

                            }
                                sx={{ backgroundColor: '#212121' }}>
                                <Tab value='home' label='Home' />
                                <Tab value='config' label='Einstellungen' />
                            </Tabs>
                        </Box>

                        {this.state.tabValue === 'home' && <Home />}
                        {this.state.tabValue === 'config' && <Config />}
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
            </>
        );
    }

    public getExtensionStatus = (extensionId: string): ExtensionStatus => {
        const extensionStatusElement: (HTMLElement | null) = document.getElementById(extensionId);
        if (!extensionStatusElement)
            return ExtensionStatus.NotInstalled;

        const extensionVersion: number = +extensionStatusElement.innerText;
        if (!extensionVersion || extensionVersion < Globals.RequiredExtensionVersion)
            return ExtensionStatus.Outdated;

        return ExtensionStatus.Active;
    }

    public setExtensionStatusMutationObserver = (): void => {
        const extensionStatusElement: HTMLElement | null = document.getElementById('HTSP_Extension_Identifier-1983dd3617d04cc7b69ee9ea7af7fe90');

        if (!extensionStatusElement)
            return;

        const mutationObserver: MutationObserver = new MutationObserver((parm) => {
            const event: CustomEvent = new CustomEvent('extension-version-set', {parm: parm} as any);
            extensionStatusElement.dispatchEvent(event);
        });

        mutationObserver.observe(extensionStatusElement, {
            childList: true,
            subtree: true
        });
    }
}