
import React from "react";
import "./Formulaire.css";
import { Col } from "react-bootstrap";
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { useState, useEffect, useParams } from 'react'
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
        borderColor: '#3d3e42',
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
export default function Formulaire2(idCar, data) {
    const classes = useStyles();
    const [service, setService] = React.useState('');
    const [model, setModel] = useState("");
    const [serie, setSerie] = useState("");
    
    const [item, setItem] = React.useState({
        entre: false,
        vign: false,
        visite: false,
        assur:false,
      });
    const [mileage, setMileage] = useState("");
    const [age, setAge] = useState("");
    const [assuranceDate, setAssuranceDate] = useState("");
    const [technicVisitDate, setTechnicVisitDate] = useState("");
    const [pic, setPic] = useState("");
    const {entre,vign,visite,assur}=item;
    function handleModelChange(e) {
        setModel(e.target.value)
    }
    function handlePicChange(e) {
        setPic(e.target.value)
    }
    const handleChangeService = (event) => {
        setService(event.target.value);
    };
    const handleChangeItem = (event) => {
        setItem({ ...item, [event.target.name]: event.target.checked });
    };
    function handleSerieChange(e) {
        setSerie(e.target.value)
    }
    function handleAssuranceDateChange(e) {
        setAssuranceDate(e.target.value)
    }
    function handletechnicVisitDateChange(e) {
        setTechnicVisitDate(e.target.value)
    }
    function handleMileageChange(e) {
        setMileage(e.target.value)
    }
    function handleAgeChange(e) {
        setAge(e.target.value)
    }
    function handleSave() {
        const newCar = {
            carId: idCar,
            item: item,
            service: service,
            technicVisitDate: technicVisitDate,
            assuranceDate: assuranceDate,


        }
        console.log(newCar)

        fetch(`http://localhost:3001/car/check`, {
            method: "PATCH",
            body: JSON.stringify(newCar),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err))
    }

    return (
        <div className="login-box">
            <h1 className="titleH1">Veuillez remplir tous les champs</h1>
            <div className="loginbox-container">
                <Col>
                    <div className="left">
                        <form className={classes.root} noValidate autoComplete="off">
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">État</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={service}
                                    onChange={handleChangeService}
                                >
                                    <MenuItem value={1}>En Service</MenuItem>
                                    <MenuItem value={0}>Hors Service</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl >
                                <FormLabel component="legend">Assign responsibility</FormLabel>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox checked={entre} onChange={handleChangeItem} name="entre" />}
                                        label="Entretien"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={vign} onChange={handleChangeItem} name="vign" />}
                                        label="Vignette"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={assur} onChange={handleChangeItem} name="assur" />}
                                        label="assurance"
                                    />
                                </FormGroup>
                            </FormControl>

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
                                        value={assuranceDate}
                                        label="Date de l'Assurance"
                                        type="date"
                                        defaultValue="aaaa-mm-jj"
                                        className={classes.textField}
                                        onChange={handleAssuranceDateChange}
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
                                        value={technicVisitDate}
                                        onChange={handletechnicVisitDateChange}
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                            </form>
                            <div>
                                <br />

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
                                <input accept="image/*" className={classes.input} id="icon-button-file" value={pic} type="file" />
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
                            <BootstrapButton onClick={handleSave} variant="contained" color="primary" disableRipple className={classes.margin}>
                                Enregistrer
                            </BootstrapButton>
                        </div>

                    </div>
                </Col>

            </div>
        </div >

    )
}
