import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'

import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import frLocale from '@fullcalendar/core/locales/fr';
import Alert from "sweetalert2";
import axios from "axios"
import moment from 'moment'
import './style.css'
import ModalSupprimerSeance from '../a.emplois/ModalSupprimerSeance'
import ModalClientAjouter from '../a.emplois/ModalClientAjouter'

import EmploisClientAlert from './EmploisClientAlert'

import 
{
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Modal,
    Label
} from "reactstrap";
import { set } from 'date-fns';



export default function Emplois({ id, supprimerSeanceModalOpen, setSupprimerSeanceModalOpen , dataUtilisateur , setDataUtilisateur}) {

    const [selectInfoData, setSelectInfoData] = useState(null);
    const [data, setData] = useState([])
    const [ajoutSeanceModalOpen, setAjoutSeanceModalOpen] = useState(false)
    const [data2, setData2] = useState([])


    async function fetchSeances() {
        setData([])
        const seancesData = await getSeances(id);

        seancesData.data.forEach(s => {
            let eventInfo = { title: s.title, start: s.start, end: s.end, eventContent: s.eventContent, color: s.color }
            setData(prevData => ([...prevData, eventInfo]))
        }
        )

    }
    async function fetchSeancesEmployés() {
        setData2([])
        const seancesData = await getSeancesEmployee();

        seancesData.data.forEach(s => {
            let eventInfo = { title: s.title, start: s.start, end: s.end, eventContent: s.eventContent, color: s.color }
            setData2(prevData => ([...prevData, eventInfo]))
        }
        )

    }


    useEffect(() => {
        fetchSeances()
        fetchSeancesEmployés() 
    }, [])


//eventClick.event.title
//eventClick.event.startStr
//eventClick.event.endStr
    function eventClick(eventClick) {
        setTitle(eventClick.event.title)
        setEndStr(eventClick.event.endStr)
        setStart(eventClick.event.start)
        setStartStr(eventClick.event.startStr)
        setAjoutSeanceModalOpen1(true)
        setColor(eventClick.event._def.ui.backgroundColor)
        // Alert.fire({
        //     title: "Informations",
        //     html:
        //         `<div class="table-responsive">
        //   <table class="table">
        //   <tbody>
        //   <tr >
        //   <td>Titre</td>
        //   <td><strong>` +
        //         eventClick.event.title +
        //         `</strong></td>
        //   </tr>
        //   <tr >
        //   <td>Début</td>
        //   <td><strong>
        //   ` +
        //         eventClick.event.startStr +
        //         `</strong></td>
        //         </tr>
        //         <tr >
        //         <td>Fin</td>
        //         <td><strong>
        //         `+ eventClick.event.endStr +


        //         `
        //   </strong></td>
        //   </tr>
        //   </tbody>
        //   </table>
        //   </div>`,

        //     confirmButtonColor: "#d33",

        //     confirmButtonText: "Fermer",

        // })
    };

    function Select(selectInfo) {

        let calendarApi = selectInfo.view.calendar;

        const startM = moment(new Date(selectInfo.start)).format("YYYY-MM-DDTHH:mm");
        const endM = moment(new Date(selectInfo.end)).format("YYYY-MM-DDTHH:mm");

        const isOverlapE = isAnOverlapEvent(startM, endM);

        if (!isOverlapE) {

             setSelectInfoData(selectInfo)
             setAjoutSeanceModalOpen(true)

        }
        calendarApi.unselect();

    };

    function isAnOverlapEvent(eventStartDay, eventEndDay) {

        for (let i = 0; i < data2.length; i++) {
            const eventA = data2[i];


            if (moment(eventStartDay).isAfter(eventA.start) && moment(eventStartDay).isBefore(eventA.end)) {
                return true;
            }

            if (moment(eventEndDay).isAfter(eventA.start) && moment(eventEndDay).isBefore(eventA.end)) {
                return true;
            }

            if (moment(eventStartDay).isSameOrBefore(eventA.start) && moment(eventEndDay).isSameOrAfter(eventA.end)) {
                return true;
            }
        }
        return false;
    }
    const [ajoutSeanceModalOpen1, setAjoutSeanceModalOpen1] = useState(false)
    const [title, setTitle] = useState("")
    const [startStr, setStartStr] = useState("")
    const [endStr, setEndStr] = useState("")
    const [start, setStart] = useState("")
    const [color,setColor] = useState("")

    return (
        <div style={{ width: "70%", marginRight: "auto", marginLeft: "auto", marginTop: '70px' }}>
            <div id='calendrier' style={{ marginTop: '70px' }}>
                <FullCalendar
                    plugins={[timeGridPlugin, interactionPlugin, listPlugin]}
                    events={data}
                    selectMirror={true}
                    nowIndicator={true}
                    eventContent={renderEventContent}
                    initialView='timeGridWeek'
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "timeGridWeek,timeGridDay,listWeek"
                    }}


                    slotMinTime='08:00'
                    slotMaxTime='20:00'
                    // expandRows={true}

                    navLinks={true}
                    // editable= {true}

                    eventLimit={true}
                    eventLimitText={"More"}
                    dayMaxEvents={true}
                    locale='fr'
                    locales={[frLocale]}
                    allDaySlot={false}
                    slotDuration='00:10:00'
                    eventClick={eventClick}
                    eventOverlap={false}
                    slotEventOverlap={false}
                    selectable={true}
                    select={Select}

                />
                <ModalSupprimerSeance isOpen={supprimerSeanceModalOpen} setModal={setSupprimerSeanceModalOpen}
                    fetchSeances={data}
                    setData={setData}
                    id={id} />

                 <ModalClientAjouter 
                 dataUtilisateur={dataUtilisateur}
                 setModal={setAjoutSeanceModalOpen}
                 selectInfoData={selectInfoData}
                 fetchSeances={data}
                 setData={setData}
                 setDataUtilisateur={setDataUtilisateur}
                 isOpen={ajoutSeanceModalOpen}
                 />   
            </div>
            <EmploisClientAlert isOpen={ajoutSeanceModalOpen1} 

            setModal={setAjoutSeanceModalOpen1}
            title={title}
            startStr={startStr}
            endStr={endStr}
            start = {start}
            color={color}
            id={id}
            dataUtilisateur={dataUtilisateur}
            setDataUtilisateur={setDataUtilisateur}
            setDataEmplois={setData} />
        </div>
    )
}

function renderEventContent(eventInfo) {

    return (
        <>
            <b>{eventInfo.timeText}</b>
            <br />
            <i>{eventInfo.event.title}</i>
        </>
    )
}


async function getSeances(id) {
    const resp = await axios.get(`http://localhost:3001/employe/emplois/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("jwt")
        }
    })
        .catch(error => {
            return error.response;
        })
    return resp
}



async function getSeancesEmployee() {
    const resp = await axios.get("http://localhost:3001/employe/emplois", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("jwt")
        }
    })
        .catch(error => {
            return error.response;
        })
    return resp
}