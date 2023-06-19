import * as React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './Questionnaire.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ButtonGroup from '@mui/material/ButtonGroup';

import { ReactComponent as Spine } from '../../assets/svg/spine.svg';
import { IQuestionnaireState } from './IQuestionnaireState';
import Slider from '@mui/material/Slider';
import { Link } from 'react-router-dom';
import { touchRippleClasses } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';

export default class Questionnaire extends React.Component<any, IQuestionnaireState> {
    constructor(props: any) {
        super(props);

        this.state = {
            pageNum: 1,
            exerciseIntervalMins: 60,
            score: 0
        };
    }

    private handleButtonClasses = (e: any) => {
        const buttons = e.target.parentElement.querySelectorAll('.MuiButton-outlined');
        buttons.forEach((button: any) => {
            button.classList.remove('checked');
        });

        e.target.classList.add('checked');
    }

    public render(): React.ReactElement<any> {
        const marks = [{ value: 0, label: 'keine Schmerzen' }, { value: 100, label: 'stärkste vorstellbare Schmerzen' }]
        const buttons = [
            <Button onClick={(e: any) => this.handleButtonClasses(e)} key="zero">0</Button>,
            <Button onClick={(e: any) => this.handleButtonClasses(e)} key="one">1</Button>,
            <Button onClick={(e: any) => this.handleButtonClasses(e)} key="two">2</Button>,
            <Button onClick={(e: any) => this.handleButtonClasses(e)} key="three">3</Button>,
            <Button onClick={(e: any) => this.handleButtonClasses(e)} key="four">4</Button>,
            <Button onClick={(e: any) => this.handleButtonClasses(e)} key="five">5</Button>,
            <Button onClick={(e: any) => this.handleButtonClasses(e)} key="six">6</Button>,
        ];
        const buttonsLabel = [
            <Button key="zero">Nie</Button>,
            <Button key="one"></Button>,
            <Button key="two"></Button>,
            <Button key="three"></Button>,
            <Button key="four"></Button>,
            <Button key="five"></Button>,
            <Button key="six">Jedesmal</Button>,
        ];

        return (
            <>
                <Grid container sx={{ height: '100vh', overflow: 'hidden' }}>
                    <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <Spine className={`spine page${this.state.pageNum}`} />
                    </Grid>
                    <Grid item xs={7} sx={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
                        <FormControl sx={{ minWidth: '30vw' }}>
                            {
                                this.state.pageNum == 1 &&
                                <ol type='1' className='questions page1'>
                                    <li>
                                        <FormLabel>Welches Geschlecht haben Sie?</FormLabel>
                                        <RadioGroup row>
                                            <FormControlLabel value="1*9" control={<Radio />} label="weiblich" />
                                            <FormControlLabel value="0" control={<Radio />} label="männlich" />
                                        </RadioGroup>
                                    </li>
                                    <li>
                                        <FormLabel>Was ist Ihr höchster Schulabschluss?</FormLabel>
                                        <RadioGroup row>
                                            <FormControlLabel value="0.000000000000001" control={<Radio />} label="kein Abschluss" />
                                            <FormControlLabel value="2.000000000000001*-6" control={<Radio />} label="Fachhochschulreife" />
                                            <FormControlLabel value="4.000000000000001*-6" control={<Radio />} label="Universität" />
                                            <FormControlLabel value="0" control={<Radio />} label="Hauptschule" />
                                            <FormControlLabel value="3.000000000000001*-6" control={<Radio />} label="Abitur" />
                                            <FormControlLabel value="4*-6" control={<Radio />} label="Postgraduiert (Dr.)" />
                                            <FormControlLabel value="1*-6" control={<Radio />} label="Mittlere Reife" />
                                            <FormControlLabel value="3*-6" control={<Radio />} label="Fachhochschule" />
                                        </RadioGroup>
                                    </li>
                                    <li>
                                        <FormLabel>Haben Sie ihre aktuellen Rückenschmerzen schon länger als 1 Woche?</FormLabel>
                                        <RadioGroup row>
                                            <FormControlLabel value="0" control={<Radio />} label="Ja" />
                                            <FormControlLabel value="1*-15" control={<Radio />} label="Nein" />
                                        </RadioGroup>
                                    </li>
                                    <li>
                                        <FormLabel>Haben Sie außer Rückenschmerzen noch andere Schmerzen?</FormLabel>
                                        <RadioGroup row>
                                            <FormControlLabel value="0" control={<Radio />} label="Ja" />
                                            <FormControlLabel value="1*-14" control={<Radio />} label="Nein" />
                                        </RadioGroup>
                                    </li>
                                </ol>
                            }
                            {
                                this.state.pageNum == 2 &&
                                <ol type='1' start={5} className='questions page2'>
                                    <li>
                                        <FormLabel>Wie stark waren Ihre Rückenschmerzen in der letzten Woche durchschnittlich?</FormLabel>
                                        <Slider
                                            defaultValue={50}
                                            valueLabelDisplay="auto"
                                            step={10}
                                            min={0}
                                            max={100}
                                            marks={marks}
                                        />
                                    </li>
                                    <li>
                                        <FormLabel>Wie stark waren Ihre Rückenschmerzen in der letzten Woche, wenn es am besten war?</FormLabel>
                                        <Slider
                                            defaultValue={50}
                                            valueLabelDisplay="auto"
                                            step={10}
                                            min={0}
                                            max={100}
                                            marks={marks}
                                        />
                                    </li>
                                    <li>
                                        <FormLabel>Wie stark dürften Ihre Beschwerden noch sein, wenn die Behandlungerfolgreich ist?</FormLabel>
                                        <Slider
                                            defaultValue={50}
                                            valueLabelDisplay="auto"
                                            step={10}
                                            min={0}
                                            max={100}
                                            marks={marks}
                                        />
                                    </li>
                                    <li>
                                        <FormLabel>Hilft Ihnen - nach Ihrer bisherigen Erfahrung - Massage ihre Rückenschmerzen zu lindern?</FormLabel>
                                        <RadioGroup row>
                                            <FormControlLabel value="0" control={<Radio />} label="nein" />
                                            <FormControlLabel value="1*18" control={<Radio />} label="ja" />
                                            <FormControlLabel value="0.000000000000001" control={<Radio />} label="ich weiß nicht" />
                                        </RadioGroup>
                                    </li>
                                </ol>
                            }
                            {
                                this.state.pageNum == 3 &&
                                <>
                                    <ol type='1' start={9} className='questionsLast page3'>
                                        <li>
                                            <FormLabel>Wenn Sie in den vergangenen 14 Tagen Ihre Schmerzen bewusst registriert haben, wie oft sind Ihnen die folgenden Gedanken und Gefühle durch den Kopf gegangen?</FormLabel>
                                        </li>
                                        <ol type='a'>
                                            <li className='formLabel'>
                                                <div className='form'>
                                                    <FormLabel></FormLabel>
                                                    <ButtonGroup variant="text" size="small">{buttonsLabel}</ButtonGroup>
                                                </div>
                                            </li>
                                            <li value="1">
                                                <div className='form'>
                                                    <FormLabel>Was kann nur dahinter stecken?</FormLabel>
                                                    <ButtonGroup size="small">{buttons}</ButtonGroup>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='form'>
                                                    <FormLabel>Warum muss ich nur diese schwere Last ertragen?</FormLabel>
                                                    <ButtonGroup size="small">{buttons}</ButtonGroup>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='form'>
                                                    <FormLabel>Ich glaube beinahe, die gehen überhaupt nichtwieder weg.</FormLabel>
                                                    <ButtonGroup size="small">{buttons}</ButtonGroup>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='form'>
                                                    <FormLabel>Diese üblen Schmerzen verderben mir aber auch alles!</FormLabel>
                                                    <ButtonGroup size="small">{buttons}</ButtonGroup>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='form'>
                                                    <FormLabel>Was bedeutet das nur?</FormLabel>
                                                    <ButtonGroup size="small">{buttons}</ButtonGroup>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='form'>
                                                    <FormLabel>Ich werde doch keinen Tumor haben?</FormLabel>
                                                    <ButtonGroup size="small">{buttons}</ButtonGroup>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='form'>
                                                    <FormLabel>Bald ertrage ich es nicht mehr länger!</FormLabel>
                                                    <ButtonGroup size="small">{buttons}</ButtonGroup>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='form'>
                                                    <FormLabel>Ob ich die gleiche, schlimme Krankheit habe wie...</FormLabel>
                                                    <ButtonGroup size="small">{buttons}</ButtonGroup>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='form'>
                                                    <FormLabel>Ach, das wird überhaupt nicht besser.</FormLabel>
                                                    <ButtonGroup size="small">{buttons}</ButtonGroup>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='form'>
                                                    <FormLabel>Hach, jetzt ist wieder der ganze Tag verdorben.</FormLabel>
                                                    <ButtonGroup size="small">{buttons}</ButtonGroup>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='form'>
                                                    <FormLabel>Das Leben mit diesen Schmerzenist kaum noch lebenswert!</FormLabel>
                                                    <ButtonGroup size="small">{buttons}</ButtonGroup>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='form'>
                                                    <FormLabel>Was mache ich nur, wenn siejetzt wieder schlimmer werden?</FormLabel>
                                                    <ButtonGroup size="small">{buttons}</ButtonGroup>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='form'>
                                                    <FormLabel>Wie lange muss ich diese Schmerzen noch ertragen?</FormLabel>
                                                    <ButtonGroup size="small">{buttons}</ButtonGroup>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='form'>
                                                    <FormLabel>Es wird doch keine schlimmeKrankheit dahinterstecken?</FormLabel>
                                                    <ButtonGroup size="small">{buttons}</ButtonGroup>
                                                </div>
                                            </li>
                                        </ol>
                                    </ol>

                                    <ol type='1' start={10} className='questionsLast page3'>
                                        <li>
                                            <FormLabel>Wie war Ihr Befinden in den letzten 14 Tagen?</FormLabel>
                                        </li>
                                        <ol type='a'>
                                            <li className='formLabel'>
                                                <div className='form'>
                                                    <FormLabel></FormLabel>
                                                    <ButtonGroup variant="text" size="small">{buttonsLabel}</ButtonGroup>
                                                </div>
                                            </li>
                                            <li value="1">
                                                <div className='form'>
                                                    <FormLabel>Ich fühle mich bedrückt, schwermütig und traurig.</FormLabel>
                                                    <ButtonGroup size="small">{buttons}</ButtonGroup>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='form'>
                                                    <FormLabel>Ich weine plötzlich oder mir ist oft zum Weinen zumute.</FormLabel>
                                                    <ButtonGroup size="small">{buttons}</ButtonGroup>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='form'>
                                                    <FormLabel>Ich kann nachts schlecht einschlafen.</FormLabel>
                                                    <ButtonGroup size="small">{buttons}</ButtonGroup>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='form'>
                                                    <FormLabel>Ich bin unruhig und kann nicht stillhalten.</FormLabel>
                                                    <ButtonGroup size="small">{buttons}</ButtonGroup>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='form'>
                                                    <FormLabel>Ich tue Dinge, die ich früher tat, immer noch gern.</FormLabel>
                                                    <ButtonGroup size="small">{buttons}</ButtonGroup>
                                                </div>
                                            </li>
                                        </ol>
                                    </ol>
                                </>
                            }
                            {
                                this.state.pageNum == 4 &&
                                <div>
                                    <FormLabel>Wie oft möchtest du an deine Übungen erinnert werden?</FormLabel>
                                    <Slider
                                        defaultValue={60}
                                        valueLabelDisplay="auto"
                                        step={10}
                                        min={30}
                                        max={180}
                                        value={this.state.exerciseIntervalMins}
                                        onChange={(e, v) => this.setState({exerciseIntervalMins: v as number})}
                                        marks
                                    />
                                    <FormLabel className='exerciseIntervalMinsLabel'>Alle <div className='exerciseIntervalMins'>{this.state.exerciseIntervalMins}</div> Minuten.</FormLabel>
                                    <Link to="/"><Button onClick={() => this.saveFragebogen()} className='backHome' variant="contained">Fertig</Button></Link>
                                </div>
                            }
                            {
                                (this.state.pageNum == 1 ||
                                    this.state.pageNum == 2 ||
                                    this.state.pageNum == 3) &&
                                <Button
                                    className='nextButton'
                                    variant="contained"
                                    endIcon={<NavigateNextIcon />}
                                    onClick={() => this.calculatePersona()}
                                >
                                    Weiter
                                </Button>
                            }
                        </FormControl>
                    </Grid>
                </Grid>
            </>
        );
    }

    private saveFragebogen = () => {
        window.localStorage.setItem('score', this.state.score.toString());
        window.localStorage.setItem('exerciseIntervalMins', this.state.exerciseIntervalMins.toString());

        document.dispatchEvent(new CustomEvent('saveUserPreference', 
        {
            detail: {
                interval: this.state.exerciseIntervalMins
            }
        }));
    }

    private calculatePersona = () => {
        const checkedSpansPage1 = document.querySelectorAll('.page1 .Mui-checked');
        const inputsPage2 = document.querySelectorAll('.page2 .MuiSlider-thumb input');
        let page1Value = 0;
        let page2SliderValues = 0;
        let page3Value = 13;
        if (!(checkedSpansPage1 && inputsPage2))
            return;
        
        checkedSpansPage1.forEach((s, i) => {
            page1Value += this.cEval(s.querySelector('input')?.value);
        })

        inputsPage2.forEach((i, index) => {
            if (index != 0) {
                page2SliderValues += this.cEval(i.ariaValueNow);
            }
            
            page2SliderValues *= 1/2;
        })

        console.log(page1Value+page2SliderValues);

        this.setState({
            pageNum: this.state.pageNum + 1,
            score: page1Value + page2SliderValues + page3Value
        });
    }

    private cEval = (fn: any) => {
        return new Function('return '+ fn)();
    }
}