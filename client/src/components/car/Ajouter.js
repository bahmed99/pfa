import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import Formulaire from './Formulaire'
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 300,
        marginBottom: '10px',
    },
    table: {
        minWidth: 850,
    },
    button: {
        padding: 10,
        width:100,
        height:35,
        marginLeft:5,
        fontSize:12,
        border: '1px solid',
        backgroundColor: 'white',
        borderColor: '#3d3e42',
        fontFamily: [
            '"Segoe UI Symbol"',
            
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
function Ajouter() {
    const [show, setShow] = useState(false);
    const classes = useStyles();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div>

                        <Button onClick={handleShow}
                                variant="contained"
                                size="small"
                                className={classes.button}
                                startIcon={<AddIcon />}>
                                Ajouter
                                </Button>

            <Modal className='loginbox-container' size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>

                </Modal.Header>

                <Formulaire />
            </Modal>
        </div >
    )
}

export default Ajouter

