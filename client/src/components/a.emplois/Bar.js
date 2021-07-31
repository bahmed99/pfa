import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import frLocale from '@fullcalendar/core/locales/fr';
import Alert from "sweetalert2";
import axios from "axios"
import AjoutSeanceModal from "./Model"
import moment from 'moment'
export default function Bar() {
    const [title, setTitle] = useState("")

    const [data, setData] = useState([])
    const [ajoutSeanceModalOpen, setAjoutSeanceModalOpen] = useState(false)
    const [selectInfoData, setSelectInfoData] = useState(null);



    async function fetchSeances() {
        setData([])
        const seancesData = await getSeances();
        console.log(seancesData.data)
        seancesData.data.forEach(s => {
            let eventInfo = { title: s.title, start: s.start, end: s.end, eventContent: s.eventContent }
            setData(prevData => ([...prevData, eventInfo]))
        }
        )

    }

    function Select(selectInfo) {

        let calendarApi = selectInfo.view.calendar;

        //let title = prompt("Please enter a new title for your event");


        const startM = moment(new Date(selectInfo.start)).format("YYYY-MM-DDTHH:mm");
        const endM = moment(new Date(selectInfo.end)).format("YYYY-MM-DDTHH:mm");

        const isOverlapE = isAnOverlapEvent(startM, endM);

        if (!isOverlapE) {

            setSelectInfoData(selectInfo)
            setAjoutSeanceModalOpen(true)
            //    calendarApi.addEvent(
            //         {
            //             title,
            //             start: selectInfo.startStr,
            //             end: selectInfo.endStr,
            //             allDay: selectInfo.allDay,
            //         },true,
            //     );

        }
        calendarApi.unselect();

    };

    useEffect(() => {
        fetchSeances()
    }, [])



    function isAnOverlapEvent(eventStartDay, eventEndDay) {

        for (let i = 0; i < data.length; i++) {
            const eventA = data[i];
            if (eventStartDay > eventA.start && eventStartDay < eventA.end) {
                return true;
            }
            if (eventEndDay > eventA.start && eventEndDay < eventA.end) {

                return true;
            }
            if (eventStartDay <= eventA.start && eventEndDay >= eventA.end) {
                return true;
            }
        }
        return false;
    }

    function eventClick(eventClick) {
        Alert.fire({
            title: eventClick.event.title,
            html:
                `<div class="table-responsive">
          <table class="table">
          <tbody>
          <tr >
          <td>Title</td>
          <td><strong>` +
                eventClick.event.title +
                `</strong></td>
          </tr>
          <tr >
          <td>Start Time</td>
          <td><strong>
          ` +
                eventClick.event.start +
                `
          </strong></td>
          </tr>
          </tbody>
          </table>
          </div>`,

            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Remove Event",
            cancelButtonText: "Close"
        }).then(result => {
            if (result.value) {

                setTitle(eventClick.event.title)
                console.log(title)
                eventClick.event.remove()
                // setTimeout(() =>                 axios.delete(`http://localhost:3001/test/${title}`,{data:"title"}).then(res=>{console.log(res)}).catch((err)=>console.log("erreur"))
                // , 2000) 

                //   axios.get("http://localhost:3001/test").then(res=>{setData(res.data)})
                Alert.fire("Deleted!", "Your Event has been deleted.", "success");
            }
        });
    };
    return (
        <div style={{ width: "60%", "marginLeft": "auto", "marginRight": "auto" }}>
            <FullCalendar
                plugins={[timeGridPlugin, interactionPlugin, listPlugin]}
                events={data}
                selectMirror={true}
                themeSystem="bootstrap"
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
                selectable={true}
                eventLimit={true} // allow "more" link when too many events
                eventLimitText={"More"}
                dayMaxEvents={true}
                locale='fr'
                locales={[frLocale]}
                eventColor='#378006'
                allDaySlot={false}
                slotDuration='00:10:00'
                select={Select}
                eventClick={eventClick}
                eventOverlap={false}
                slotEventOverlap={false}
            // datesSet={(date)=>Add(date)}
            />
            <AjoutSeanceModal isOpen={ajoutSeanceModalOpen}
                setModal={setAjoutSeanceModalOpen}
                selectInfoData={selectInfoData}
                fetchSeances={data}
                setData={setData}
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
            <br />
            <b>{eventInfo.event._def.extendedProps.eventContent}</b>
        </>
    )
}


export async function getSeances() {
    const resp = await axios.get("http://localhost:3001/test")
        .catch(error => {
            return error.response;
        })
    return resp
}

