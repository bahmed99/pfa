import React from 'react'
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

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#718a8a',
        color: theme.palette.common.black,
        fontSize: 16,
        alignItems:'center',
        zindex:9999,
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
        length:90,
        marginBottom: '10px',
    },
    table: {
        minWidth: 850,
    },
    button: {
        padding: 10,
        width:77,
        height:30,
        fontSize:9,
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
const BootstrapButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        Color: 'white',
        fontSize: 12,
        width:75,
        height:40,
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

function CarsListEmployee() {
    const classes = useStyles();
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
            <br/>
            <TableContainer component={Paper}>
                <div className="tous">
                    <Table stickyHeader aria-label="sticky table" className={classes.table}>
                        <TableHead>
                            <TableRow>

                                <StyledTableCell>Model</StyledTableCell>
                                <StyledTableCell>Série</StyledTableCell>
                                <StyledTableCell>État</StyledTableCell>
                                <StyledTableCell>Kilométrage</StyledTableCell>
                                <StyledTableCell>Date Assurance</StyledTableCell>
                                <StyledTableCell>Age</StyledTableCell>
                                <StyledTableCell>Visite Technique</StyledTableCell>
                               
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {carsData.map((n) =>

                                <TableRow key={n.serie}>

                                    <StyledTableCell style={{ textAlign: 'left', color: '#292F36' }}> {n.model}</StyledTableCell>
                                    <StyledTableCell style={{ textAlign: 'left', color: '#292F36' }}> {n.serie}</StyledTableCell>
                                    <StyledTableCell style={{ textAlign: 'left', color: '#292F36' }}>{n.service}</StyledTableCell>
                                    <StyledTableCell style={{ textAlign: 'left', color: '#292F36' }}>{n.mileage}</StyledTableCell>
                                    <StyledTableCell style={{ textAlign: 'left', color: '#292F36' }}>{n.assuranceDate}</StyledTableCell>
                                    <StyledTableCell style={{ textAlign: 'left', color: '#292F36' }}>{n.age}</StyledTableCell>
                                    <StyledTableCell style={{ textAlign: 'left', color: '#292F36' }}>{n.techniqueVisitDate}</StyledTableCell>
                                    <StyledTableCell ><ButtonGroup size="small" aria-label="small outlined button group">

                                        <Modifier/>
                                        <ButtonEmploi/>
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

export default CarsListEmployee
