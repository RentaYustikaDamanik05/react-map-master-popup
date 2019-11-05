import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiExpansionPanelDetails);



export default function CustomizedExpansionPanels () {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const [state, setState] = React.useState({
        // tata guna lahan
        // showEks: false,
        tagunEks: false,
        tagunRen: false,
        PL2011: false,
        PL2012: false,
        PL2013: false,
        PL2014: false,
        PL2015: false,
        PL2016: false,
        PL2017: false,
        FKH: false,
        BD1: false,
        BD2: false,

        // Agroforesty
        Per: false,
        Pen: false,
        Pem: false,

        // Perhutanan sosial
        Persos: false,

        //Demplot
        SilvFish: false,
        SilvPas: false,
        Hortik: false,
        HHBK: false,
        PSP: false


    });

    const switchChange = name => event => { 
        setState({ ...state, [name]: event.target.checked });
    };
    
    
    

    return (
        <div>

          
            <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>PEMETAAN BATAS PARTISIPATIF</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <table width="100%" >
                        <FormControl component="fieldset">
                            {/* <h3> BATAS PARTISIPATIF</h3> */}
                            <FormGroup>
                                <FormControlLabel
                                    control={<Switch 
                                        
                                        checked={state.FKH} onChange={switchChange('FKH')} value="FKH" />}
                                    label="FUNGSI KAWASAN HUTAN"
                                />
                                       <p>this check? <span>{state.FKH ? 'on' : null}</span></p>
                                
                                       
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Switch checked={state.BD1} onChange={switchChange('BD1')} value="BD1" />}
                                    label="BATAS DESA (GARIS)"
                                    backgroundColor="primary"
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Switch checked={state.BD2} onChange={switchChange('BD2')} value="BD2" />}
                                    label="BATAS DESA (AREA)"
                                    backgroundColor="primary"
                                />
                            </FormGroup>
                        </FormControl>
                        <FormControl component="fieldset">
                            <h3>Tata Guna Lahan</h3>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Switch checked={state.tagunEks} onChange={switchChange('tagunEks')} value="tagunEks" />}
                                    label="TATA GUNA LAHAN (Eksisting"
                                    backgroundColor="primary"
                                />
                                <FormControlLabel
                                    control={<Switch checked={state.tagunRen} onChange={switchChange('tagunRen')} value="tagunRen" />}
                                    label="Tata Guna Lahan (Rencana"
                                    color="primary"

                                />

                            </FormGroup>
                        </FormControl>
                        <FormControl>
                            <h3>Penutupan Lahan</h3>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Switch checked={state.PL2011} onChange={switchChange('PL2011')} value="PL2011" />}
                                    label="Penutupan Lahan 2011"
                                    backgroundColor="primary"
                                />
                                <FormControlLabel
                                    control={<Switch checked={state.PL2012} onChange={switchChange('PL2012')} value="PL2012" />}
                                    label="Penutupan Lahan 2012"
                                    color="primary"
                                />
                                <FormControlLabel
                                    control={<Switch checked={state.PL2013} onChange={switchChange('PL2013')} value="PL2013" />}
                                    label="Penutupan Lahan 2013"

                                />

                                <FormControlLabel
                                    control={<Switch checked={state.PL2014} onChange={switchChange('PL2014')} value="PL2014" />}
                                    label="Penutupan Lahan 2014"
                                />

                                <FormControlLabel
                                    control={<Switch checked={state.PL2015} onChange={switchChange('PL2015')} value="PL2015" />}
                                    label="Penutupan Lahan 2015"

                                />

                                <FormControlLabel
                                    control={<Switch checked={state.PL2016} onChange={switchChange('PL2016')} value="PL2016" />}
                                    label="Penutupan Lahan 2016"

                                />

                                <FormControlLabel
                                    control={<Switch checked={state.PL2017} onChange={switchChange('PL2017')} value="PL2017" />}
                                    label="Penutupan Lahan 2017"

                                />
                            </FormGroup>
                        </FormControl>
                    </table>
                </ExpansionPanelDetails>
            </ExpansionPanel>



            <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>AGROFORESTRY</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <FormControl component="fieldset">
                        <h3> AGROFORESTRY</h3>
                        <FormGroup>
                            <FormControlLabel
                                control={<Switch checked={state.Per} onChange={switchChange('Per')} value="Per" />}
                                label="PERSAMAIAN"
                                backgroundColor="primary"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Switch checked={state.Pen} onChange={switchChange('Pen')} value="Pen" />}
                                label="PENANAMAN"
                                backgroundColor="primary"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Switch checked={state.Pem} onChange={switchChange('Pem')} value="Pem" />}
                                label="PEMELIHARAAN"
                                backgroundColor="primary"
                            />
                        </FormGroup>
                    </FormControl>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Perhutanan Sosial</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>

                    <FormControl component="fieldset">
                        <h3> Perhutanan Sosial</h3>
                        <FormGroup>
                            <FormControlLabel
                                control={<Switch checked={state.Persos} onChange={switchChange('Persos')} value="Persos" />}
                                label="Perhutanan Sosial"
                                backgroundColor="primary"
                            />
                        </FormGroup>
                    </FormControl>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>DEMPLOT</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>

                    <FormControl component="fieldset">
                        <h3>Demplot</h3>
                        <FormGroup>
                            <FormControlLabel
                                control={<Switch checked={state.SilvFish} onChange={switchChange('SilvFish')} value="SilvFish" />}
                                label="Silvofishery"
                                backgroundColor="primary"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Switch checked={state.SilvPas} onChange={switchChange('SilvPas')} value="SilvPas" />}
                                label="Silvopastural"
                                backgroundColor="primary"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Switch checked={state.Hortik} onChange={switchChange('Hortik')} value="Hortik" />}
                                label="Hortikultura"
                                backgroundColor="primary"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Switch checked={state.HHBK} onChange={switchChange('HHBK')} value="HHBK" />}
                                label="HHBK"
                                backgroundColor="primary"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Switch checked={state.PSP} onChange={switchChange('PSP')} value="PSP" />}
                                label="Perbaikan Sistem Perladangan"
                                backgroundColor="primary"
                            />
                        </FormGroup>
                    </FormControl>

                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
                    <Typography>PATROLI HUTAN</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>

                    <FormControl component="fieldset">
                        <h3>Patroli Hutan</h3>
                        <FormGroup>
                            <FormControlLabel
                                control={<Switch checked={state.WilPat} onChange={switchChange('WilPat')} value="WilPat" />}
                                label="Wilyah Patroli"
                                backgroundColor="primary"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Switch checked={state.JalPat} onChange={switchChange('JalPat')} value="JalPat" />}
                                label="Jalur Patroli"
                                backgroundColor="primary"
                            />
                        </FormGroup>

                        <FormGroup>
                            <FormControlLabel
                                control={<Switch checked={state.JalPat} onChange={switchChange('JalPat')} value="JalPat" />}
                                label="Temuan Patroli"
                                backgroundColor="primary"
                            />
                        </FormGroup>
                    </FormControl>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}