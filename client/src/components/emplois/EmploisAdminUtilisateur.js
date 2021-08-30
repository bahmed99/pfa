import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'

import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import frLocale from '@fullcalendar/core/locales/fr';
import Alert from "sweetalert2";


import '../../assets/css/components/emplois/style.css'

export default function EmploisAdminUtilisateur({ data }) {
    return (
        <div style={{ width: "80%", marginRight: "auto", marginLeft: "auto", marginTop: "100px" }}>
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
            `</strong></td>
            </tr>
            <tr >
            <td>Client</td>
            <td><strong>
            `+
            eventClick.event._def.extendedProps.eventContent
            +

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