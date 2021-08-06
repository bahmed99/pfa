
import React from "react";
import "./Formulaire.css";
import { Col } from "react-bootstrap";
import TextField from '@material-ui/core/TextField';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        display: 'none',
      },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    }
}));
const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      color: '#00000',
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#3d3e42',
      borderColor:'#3d3e42',
      fontFamily: [
        '"Segoe UI Symbol"',
        '"Apple Color Emoji"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#00e7e7',
        borderColor: '#00e7e7',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
    },
  })(Button);
export default function Formulaire() {
    const classes = useStyles();
    const [service, setService] = React.useState('');

    const handleChange = (event) => {
        setService(event.target.value);
    };
    return (
        <div className="login-box">
            <h1 className="titleH1">Veuillez remplir tous les champs</h1>
            <div className="loginbox-container">
                <Col>
                    <div className="left">
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField required id="standard-required" label="Marque" size="small" />
                            <TextField required id="standard-required" label="Série" size="small" />
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">État</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={service}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={1}>En Service</MenuItem>
                                    <MenuItem value={0}>Hors Service</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField required id="standard-required" label="Age" size="small" />
                            <TextField required id="standard-required" label="Kilométrage" size="small" />


                        </form>

                    </div>
                </Col>
                <Col>
                    <div classNme="right">

                        <div>
                            <form className={classes.container} noValidate>
                                <div>
                                    <br />
                                    <br />
                                    <TextField
                                        id="datea"
                                        label="Date de l'Assurance"
                                        type="date"
                                        defaultValue="aaaa-mm-jj"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <br />
                                    <br />
                                </div>

                                <div>
                                    <TextField
                                        id="datevt"
                                        label="Date de la visite technique"
                                        type="date"
                                        defaultValue="aaaa-mm-jj"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                            </form>
                            <div>
                                <br/>
                                
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" color="default" component="span">
                                    Photo
                                </Button>
                            </label>
                            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                            <label htmlFor="icon-button-file">
                                <IconButton color="default" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                            </div>
                        </div>

                        <br />
                        <br />
                        <div>
                        <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>
                        Enregistrer 
                        </BootstrapButton>
                        </div>

                    </div>
                </Col>

            </div>
        </div >

    )
}
