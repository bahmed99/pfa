import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import frLocale from '@fullcalendar/core/locales/fr';

import Alert from "sweetalert2";
export default function Bar() {
    return (
        <div style={{width:"60%","marginLeft":"auto","marginRight":"auto"}}>
            <FullCalendar
                plugins={[ timeGridPlugin,interactionPlugin,listPlugin]}
                events={[
                    { title: 'séance code', start: '2021-07-30T09:00:00',end:'2021-07-30T10:00:00',color:'red',
                    eventContent: 'This is a cool event'}
                  ]}
                eventContent={renderEventContent}
                initialView= 'timeGridWeek'
               headerToolbar={{
                left: "prev,next",
                center: "title",
                right: "timeGridWeek,timeGridDay,listWeek"
              }}

                slotMinTime= '08:00'
                slotMaxTime= '20:00'
                expandRows= {true}
     
                navLinks= {true} // can click day/week names to navigate views
                // editable= {true}
                selectable= {true}
                nowIndicator= {true}
                dayMaxEvents= {true}
                locale= 'fr'
                locales= {[  frLocale ]}
                eventColor= '#378006'
                allDaySlot={false}
                slotDuration= '00:10:00'
                select={Select}
                eventClick={eventClick}
                // datesSet={(date)=>Add(date)}
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
        <br/>
        <b>{eventInfo.event._def.extendedProps.eventContent}</b>
      </>
    )
  }

function Select(selectInfo) {
      console.log(selectInfo)
    let calendarApi = selectInfo.view.calendar;
    // selectInfo.view.enableModal();

    let title = prompt("Please enter a new title for your event");
    calendarApi.unselect(); 
    if (title) {
      calendarApi.addEvent(
        {
          // will render immediately. will call handleEventAdd
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
        },
        true
      ); // temporary=true, will get overwritten when reducer gives new events
    }
  };

  function eventClick (eventClick)  {
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
        eventClick.event.remove(); // It will remove event from the calendar
        Alert.fire("Deleted!", "Your Event has been deleted.", "success");
      }
    });
  };