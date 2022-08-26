import React, {useContext, useEffect, useState} from 'react';
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";
import {log} from "@craco/craco/lib/logger";

const Day = ({day, rowIndex, colIndex}) => {
  const [dayEvents, setDayEvents] = useState([]);
  const {
    setSelectedDay,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);
  // console.log(savedEvents);

  useEffect(() => {
    // console.log(savedEvents)
    const events = filteredEvents.filter((event) =>
      dayjs(event.day).format('DD-MM-YY') === day.format('DD-MM-YY'));
    setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day
      .format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'calendar__day_current'
      : '';
  }

  function defineCurrentMonth(day) {
    if (day.format("M") === day.format("M")) {
      return '';
    } else {
      return 'not-this-month-day';
    }
  }

  // console.log(day.daysInMonth())
  console.log(day.endOf("month").date());
  return (
    <div
      className={`calendar__day  ${colIndex === 5 ? 'last-days' : ''} ${colIndex === 6 ? 'last-days' : ''} ${day.format('D') === "1" ? "first-day-month" : ''}`}>
      <header className="calendar__day_header">
        {rowIndex === 0 &&
          <p className="calendar__day_name">{day.format("ddd").toUpperCase()}</p>
        }
        <p className={`calendar__day_num ${getCurrentDayClass()} `}>
          {day.format("D") === "1"
            ? `${day.format("D")} ${day.format("MMMM")}`
            : day.format("D")
          }
        </p>
      </header>
      <div
        className="calendar__day_body"
        onClick={() => {
          setSelectedDay(day);
          setShowEventModal(true)
        }
        }
      >
        {dayEvents.map((event, index) => (
          <div
            key={index}
            onClick={() => setSelectedEvent(event)}
            className={`${event.label} calendar__day_note`}
          >
            {event.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day;