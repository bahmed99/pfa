import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { carsData } from './carsData';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Ajouter from "./Ajouter"
import Modifier from "./Modifier"
import ButtonEmploi from "./ButtonEmploi"


import {
    alpha,
    ThemeProvider,
    createTheme,
} from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
})(TextField);

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 'auto',
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);

const useStylesReddit = makeStyles((theme) => ({
    root: {
        border: '1px solid #e2e2e1',
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: '#fcfcfb',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            backgroundColor: '#fff',
        },
        '&$focused': {
            backgroundColor: '#fff',
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
        },
    },
    focused: {},
}));

function RedditTextField(props) {
    const classes = useStylesReddit();

    return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}



const ValidationTextField = withStyles({
    root: {
        '& input:valid + fieldset': {
            borderColor: 'green',
            borderWidth: 2,
        },
        '& input:invalid + fieldset': {
            borderColor: 'red',
            borderWidth: 2,
        },
        '& input:valid:focus + fieldset': {
            borderLeftWidth: 6,
            padding: '4px !important', // override inline-style
        },
    },
})(TextField);

const theme = createTheme({
    palette: {
        primary: green,
    },
});

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#718a8a',
        color: theme.palette.common.black,
        fontSize: 16,
        alignItems: 'center',
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);
const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 300,
        length: 90,
        marginBottom: '10px',
    },
    table: {
        minWidth: 850,
    },
    button: {
        padding: 10,
        width: 77,
        height: 30,
        fontSize: 9,
        border: '1px solid',
        backgroundColor: 'white',
        borderColor: '#3d3e42',
        fontFamily: [
            'Arial'
        ].join(','),
        '&:hover': {
            backgroundColor: '#369579',
            borderColor: '#369579',
            boxShadow: 'none',
        },
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}));

function deleteRow(arr,n){
   
   arr.splice(arr.indexOf(n),1)

}
/*function replaceByValue( json, field, oldvalue, newvalue ) {
    for( var k = 0; k < json.length; ++k ) {
        if( oldvalue == json[k][field] ) {
            json[k][field] = newvalue ;
        }
    }
    return json;
}*/
const BootstrapButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        Color: 'white',
        fontSize: 12,
        width: 75,
        height: 40,
        border: '1px solid',
        backgroundColor: 'white',
        borderColor: '#3d3e42',
        fontFamily: [
            'BlinkMacSystemFont'
        ].join(','),
        '&:hover': {
            backgroundColor: '#369579',
            borderColor: '#369579',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
    },
})(Button);



function CarsListAdmin() {
    const classes = useStyles();
    const [state,setState]=useState();
   
    return (
        <div>

            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Recherche"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>

            </Paper>
            <br />
            <TableContainer component={Paper}>
                <div className="tous">
                    <Table stickyHeader aria-label="sticky table" className={classes.table} >
                        
                        <TableHead>
                            <TableRow>

                                <StyledTableCell>Model</StyledTableCell>
                                <StyledTableCell>Série</StyledTableCell>
                                <StyledTableCell>État</StyledTableCell>
                                <StyledTableCell>Kilométrage</StyledTableCell>
                                <StyledTableCell>Date Assurance</StyledTableCell>
                                <StyledTableCell>Age</StyledTableCell>
                                <StyledTableCell>Visite Technique</StyledTableCell>
                                <StyledTableCell> <Ajouter /></StyledTableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {carsData.map((n) =>

                                <TableRow key={n.serie}>
                                    
                                    <StyledTableCell  style={{ textAlign: 'left', color: '#292F36' }}>  <InputBase
                                        className={classes.margin}
                                        defaultValue={n.model}
                                        inputProps={{ 'aria-label': 'naked' }}
                                    /></StyledTableCell>
                                    <StyledTableCell style={{ textAlign: 'left', color: '#292F36' }}>  <InputBase
                                        className={classes.margin}
                                        defaultValue={n.serie}
                                        
                                        inputProps={{ 'aria-label': 'naked' }}
                                    /></StyledTableCell>
                                    <StyledTableCell style={{ textAlign: 'left', color: '#292F36' }}> <InputBase
                                        className={classes.margin}
                                        defaultValue={n.mileage}
                                        inputProps={{ 'aria-label': 'naked' }}
                                    /></StyledTableCell>
                                    <StyledTableCell style={{ textAlign: 'left', color: '#292F36' }}> <InputBase
                                        className={classes.margin}
                                        defaultValue={n.service}
                                       
                                        inputProps={{ 'aria-label': 'naked' }}
                                    /></StyledTableCell>
                                    <StyledTableCell style={{ textAlign: 'left', color: '#292F36' }}>{n.assuranceDate}</StyledTableCell>
                                    <StyledTableCell style={{ textAlign: 'left', color: '#292F36' }}>{n.age}</StyledTableCell>
                                    <StyledTableCell style={{ textAlign: 'left', color: '#292F36' }}>{n.techniqueVisitDate}</StyledTableCell>
                                    <StyledTableCell ><ButtonGroup size="small" aria-label="small outlined button group">

                                        <Modifier />
                                        <IconButton   aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                        <ButtonEmploi />
                                    </ButtonGroup>

                                    </StyledTableCell>
                                </TableRow>


                            )}
                        </TableBody>
                    </Table>
                </div>

            </TableContainer>
            
        </div>
    )
}

export default CarsListAdmin
