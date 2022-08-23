import React, {useContext, useEffect, useState} from 'react';
import dayjs from "dayjs";
import {getMonth} from "../utils";
import GlobalContext from "../context/GlobalContext";

const SmallCalendar = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex))
  }, [currentMonthIndex]);
  const {monthIndex,setSmallCalendarMonth, setSelectedDay, selectedDay} = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonthIndex(monthIndex)
  }, [monthIndex])

  function handlePrevMonth() {
    setCurrentMonthIndex(currentMonthIndex - 1);
  }

  function handleNextMonth() {
    setCurrentMonthIndex(currentMonthIndex + 1);
  }

  function getDayClass(day) {
    const format = 'DD-MM-YY';
    const nowDay = dayjs().format(format);
    const currentDay = day.format(format);
    const selectedD = selectedDay && selectedDay.format(format);
    if (nowDay === currentDay) {
      return 'bg-blue-500 rounded-full text-white';
    } else if (currentDay === selectedD) {
      return 'bg-blue-100 rounded-full text-blue-600 text-bold'
    }else {
      return ''}
  }


  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-600 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format('MMMM YYYY')}
        </p>
        <div>
          <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
          </button>
          <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-7">
        {currentMonth[0].map((day, index) => (
          <span key={index} className="text-sm py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, index) =>
          (
            <React.Fragment key={index}>
              {row.map((day, i) =>
                (
                  <button
                    onClick={() => {
                      setSmallCalendarMonth(currentMonthIndex)
                      setSelectedDay(day)
                    }}
                    key={i}
                    className={`py-1 w-full ${getDayClass(day)}`}>
                    <span className="text-sm">{day.format('D')}</span>
                  </button>
                ))}
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default SmallCalendar;