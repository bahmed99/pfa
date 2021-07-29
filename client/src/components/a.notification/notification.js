import { Calendar, momentLocalizer , Views} from 'react-big-calendar'
import moment from 'moment'
import React from 'react'
import events from "./events"
// import globalize from 'globalize'
import 'moment/locale/fr'
const localizer = momentLocalizer(moment)

// const globalizeLocalizer = localizer(globalize)
let allViews = Object.keys(Views).map(k => Views[k])


const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

  
function Notification() {
   
  return (
    <Calendar
    events={events}
    views={allViews}
    step={60}
    showMultiDayTimes
    components={{
      timeSlotWrapper: ColoredDateCellWrapper,
    }}
    defaultDate={new Date(2015, 3, 1)}
    culture={"fr"}
    localizer={localizer}
    messages={{next:"Suivant",previous:"Précédent",today:"Aujourd'hui",month:"Mois",week:"Semaine",day:"Jour",work_week:"Semaine De Travail"}}
    
  />
  )}

export default Notification
