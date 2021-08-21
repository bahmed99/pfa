import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import Formulaire2 from './Formulaire'
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
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
function Modifier(id) {
    const [show, setShow] = useState(false);
    const classes = useStyles();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div>

                        <IconButton onClick={handleShow} aria-label="edit">
                                            <EditIcon />
                                        </IconButton>

            <Modal className='loginbox-container' size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>

                </Modal.Header>

                <Formulaire2 id={id}/>
            </Modal>
        </div >
    )
}

export default Modifier

