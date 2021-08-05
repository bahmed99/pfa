import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'

import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import frLocale from '@fullcalendar/core/locales/fr';
import Alert from "sweetalert2";
import axios from "axios"
import AjoutSeanceModal from "./ModelClient"
import './style.css'

export default function Emplois() {


    const [data, setData] = useState([])


    const [ajoutSeanceModalOpen, setAjoutSeanceModalOpen] = useState(false)
    const [selectInfoData, setSelectInfoData] = useState(null);



    async function fetchSeances() {
        setData([])
        const seancesData = await getSeances();

        seancesData.data.forEach(s => {
            let eventInfo = { title: s.title, start: s.start, end: s.end, eventContent: s.eventContent, color: s.color }
            setData(prevData => ([...prevData, eventInfo]))
        }
        )

    }


    useEffect(() => {
        fetchSeances()

    }, [])

    function eventClick(eventClick) {

        Alert.fire({
            title: "Informations",
            html:
                `<div class="table-responsive">
          <table class="table">
          <tbody>
          <tr >
          <td>Titre</td>
          <td><strong>` +
                eventClick.event.title +
                `</strong></td>
          </tr>
          <tr >
          <td>Début</td>
          <td><strong>
          ` +
                eventClick.event.startStr +
                `</strong></td>
                </tr>
                <tr >
                <td>Fin</td>
                <td><strong>
                `+ eventClick.event.endStr +


                `
          </strong></td>
          </tr>
          </tbody>
          </table>
          </div>`,

            confirmButtonColor: "#d33",

            confirmButtonText: "Fermer",

        })



    };


    return (
        <div style={{ width: "70%", marginRight: "auto", marginLeft: "auto", marginTop: '70px' }}>
            <div className="container textContainerCourses">
                <div>
                    <div className="breadcrumbs">
                        <div>
                            <h1>Votre Calendrier</h1>
                            <p>Étape obligatoire pour décrocher un jour l'examen du permis de conduire, <span className="strong-medium">le code de la route</span> fait peur à beaucoup
                                de candidats, alors que pour le réussir il suffit juste de bien y être préparé. C'est pour vous y aider que
                                iDrive Gears met à votre disposition <span className="strong-medium">des tests de code en ligne</span>, comprenant 30 questions <span className="strong-medium">conformes à
                                    celles de l'examen.</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
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
               

                />
                <AjoutSeanceModal isOpen={ajoutSeanceModalOpen}
                    setModal={setAjoutSeanceModalOpen}
                    selectInfoData={selectInfoData}
                    fetchSeances={data}
                    setData={setData}
                    
                />
            </div>
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


async function getSeances() {
    const resp = await axios.get(`http://localhost:3001/client/emplois`, {
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
