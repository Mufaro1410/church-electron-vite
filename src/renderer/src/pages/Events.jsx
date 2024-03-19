import '../App.css';
import { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

export default function Events(props) {
  const [myEventsList, setMyEventsList] = useState([])

  // useEffect(() => {
  //   const events = window.electronAPI.rendering('invoke', 'events')
  //   setMyEventsList(events)
  // }, [])

  const events = [
    {
      start: moment("2023-11-24T10:00:00").toDate(),
      end: moment("2023-11-24T11:00:00").toDate(),
      title: "MRI Registration",
      data: {
        type: "Reg",
      },
    },
    {
      start: moment("2023-11-25T14:00:00").toDate(),
      end: moment("2023-11-25T15:30:00").toDate(),
      title: "ENT Appointment",
      data: {
        type: "App",
      },
    },
  ];

  const addEvent = ({start, end}) => {
    setMyEventsList(...myEventsList, {start: start, end: end})
  }

  function selectedSlot(start, end) {
    console.log(start, end)
  }

  return (
    <div>
      <Calendar
        onSelectSlot={({ start, end }) => console.log('working')}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "95vh" }}
      />
    </div>
  );
}
