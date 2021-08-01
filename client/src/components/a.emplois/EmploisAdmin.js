import React from 'react'

import styled from "styled-components";
import FullCalendar from '@fullcalendar/react'

import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import frLocale from '@fullcalendar/core/locales/fr';

const events = [
    {
        resourceId: 1,
        title: "Lunch",
        start: "2021-08-01T13:00:00",
        end: "2021-08-01T14:00:00",
        eventContent: "🍱",
        index: "evt-0"
    },
    {
        resourceId: 2,
        title: "Hair Appointment",
        start: "2021-08-01T13:00:00",
        end: "2021-08-01T14:00:00",
        eventContent: "💇",
        index: "evt-1"
    },
    {
        resourceId: 3,
        title: "Nap Time",
        start: "2021-08-01T13:00:00",
        end: "2021-08-01T14:00:00",
        eventContent: "😴",
        index: "evt-2"
    },
   
    
    {
        resourceId: 4,
        title: "Sling Drinks at Moe's",
        start: "2021-08-01T15:00:00",
        end: "2021-08-01T16:00:00",
        eventContent: "🍺",
        index: "evt-5"
    },
   
    {
        resourceId: 5,
        title: "Drink at Moe's",
        start: "2021-08-01T13:00:00",
        end: "2021-08-01T14:00:00",
        eventContent: "🍺🍺🍺🍺🍺🍺🍺🍺",
        index: "evt-7"
    },
    
]
const resources = [
    {
        id: 1,
        title: "Homer Simpson",
        url:
            "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
    },
    {
        id: 2,
        title: "Marge Simpson",
        url: "https://static.simpsonswiki.com/images/0/0b/Marge_Simpson.png"
    },
    {
        id: 3,
        title: "Abraham Jebediah ",
        url:
            "https://vignette.wikia.nocookie.net/simpsons/images/a/a9/Abraham_Simpson.png/revision/latest?cb=20151011181838"
    },
    {
        id: 4,
        title: "Moe Szyslak",
        url:
            "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Moe_Szyslak.png/220px-Moe_Szyslak.png"
    },
    {
        id: 5,
        title: "Barney Gumble",
        url:
            "https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Barney_Gumble.png/220px-Barney_Gumble.png"
    }


]

export default function EmploisAdmin() {


    return (

       
            <FullCalendar
              
                schedulerLicenseKey={'GPL-My-Project-Is-Open-Source'}

                initialView='resourceTimelineDay'
                plugins={[resourceTimelinePlugin]}
                // sets height to height of resources.
                slotWidth={60}
                slotMinTime='08:00'
                slotMaxTime='20:00'
                locale='fr'
                locales={[frLocale]}
                slotDuration={'00:15:00'}

                views={{
                    resourceTimelineDay: {
                        titleFormat: {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            weekday: 'long',
                        },
                    },
                }}
                height={"auto"}

                resourceAreaHeaderContent={'Employés'}
                resourceAreaWidth={'25%'}

                resources={resources}
                resourceRender={ResourceContent}

                events={events}
                eventContent={EventContent}
                resourceLabelDidMount={ResourceContent}



            />
      

    )
}
function ResourceContent(resource) {
    
    console.log(resource.el)
    let icon =document.createElement('img');
    let url = resource.resource._resource.extendedProps.url;
    console.log(url)
    icon.src=url;
    icon.height="48"
  
    resource.el.querySelector('.fc-icon').appendChild(icon)
    

    resource.el.querySelector('.fc-datagrid-cell-main')
      .insertBefore(icon ,   resource.el.querySelector('.fc-datagrid-cell-main').firstChild);

  
   
}

function EventContent(eventInfo) {
   
    return (
        <>
            <b>{eventInfo.event.timeText}</b>
            <br />
            <i>{eventInfo.event.title}</i>
            <br />
            <i>{eventInfo.event._def.extendedProps.eventContent}</i>
        </>
    )

}



  