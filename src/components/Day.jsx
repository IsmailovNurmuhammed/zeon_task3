import React, {useContext, useEffect, useState} from 'react';
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";

const Day = ({day, rowIndex}) => {
  const [dayEvents, setDayEvents] = useState([]);
  const {setSelectedDay, setShowEventModal, filteredEvents, setSelectedEvent} = useContext(GlobalContext);
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
      ? 'bg-blue-600 text-white rounded-full w-7'
      : '';
  }

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-end justify-end">
        {rowIndex === 0 &&
          <p className="m-2 text-sm">{day.format("ddd").toUpperCase()}</p>
        }
        <p className={`m-2 text-sm text-center ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
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
            className={`bg-${event.label}-500 p-1 mr-3 text-white text-sm rounded mb-1 truncate`}
          >
            {event.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day;