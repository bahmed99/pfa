import Emplois from "./Emplois"
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import EventIcon from '@material-ui/icons/Event';
import IconButton from '@material-ui/core/IconButton';
import { withStyles, makeStyles } from '@material-ui/core/styles';


export default function ButtonEmploi() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const id= JSON.parse(localStorage.getItem("user"))._id
    return (
        <div>
                
                <IconButton onClick={handleShow} aria-label="today">
                                            <EventIcon />
                                        </IconButton>
            <Modal className='loginbox-container' size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>

                </Modal.Header>

                <Emplois id={id} />
            </Modal>
        </div>
    )
}
