import { IAppState } from './IAppState';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Rueckenuebungen from './components/rueckenuebungen/Rueckenuebungen';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Questionnaire from './components/questionnaire/Questionnaire';
import Impressum from './components/impressum/impressum';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme, ThemeProvider, createTheme, PaletteOptions } from '@mui/material/styles';
import './app.css'
import VideoPage from './components/videopage/VideoPage';

export default class App extends React.Component<any, IAppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            themeMode: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        };
    }

    private toggleThemeMode = () => {
        this.setState({
            themeMode: this.state.themeMode == 'light' ? 'dark' : 'light'
        })
    }

    public render(): React.ReactElement<any> {
        const theme = createTheme({
            palette: {
                mode: this.state.themeMode,
                background: {
                    default: this.state.themeMode == 'light' ? '#FFF' : '#35363a'
                }
            },
        });

        const randVidUrls: Array<string> = [
            'jnC2Bh5G1tM',
            '_M425oItHno',
            'x3KaUc4Ttuc',
            'f-5OEX7HurQ'
        ]

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div id='HTSP_Extension_Identifier-1983dd3617d04cc7b69ee9ea7af7fe90'></div>

                <IconButton className='toggleThemeButton' sx={{ ml: 1 }} onClick={() => this.toggleThemeMode()} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Rueckenuebungen themeMode={this.state.themeMode} />} />
                        <Route path="fragebogen" element={<Questionnaire />} />
                        <Route path="impressum" element={<Impressum />} />
                        <Route path="video" element={<VideoPage urlId={randVidUrls[Math.floor(Math.random() * randVidUrls.length)]} />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        );
    }
}