import React, {useContext, useEffect, useState} from 'react';
import dayjs from "dayjs";
import {getMonth} from "../utils";
import GlobalContext from "../context/GlobalContext";
import SvgIcon from "./UI/SvgIcon";

const SmallCalendar = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex))
  }, [currentMonthIndex]);
  const {monthIndex, setSmallCalendarMonth, setSelectedDay, selectedDay} = useContext(GlobalContext);
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
      return 'small-calendar__content_current-day';
    } else if (currentDay === selectedD) {
      return 'small-calendar__content_selected'
    } else {
      return ''
    }
  }


  return (
    <div className="small-calendar">
      <header className="small-calendar__header">
        <p className="small-calendar__header_title">
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format('MMMM YYYY')}
        </p>
        <div className="small-calendar__header_arrows">
          <button onClick={handlePrevMonth}>
            <SvgIcon id={'arrow'} />
          </button>
          <button onClick={handleNextMonth}>
            <SvgIcon id={'arrow_right'} />
          </button>
        </div>
      </header>
      <div className="small-calendar__content">
        {currentMonth[0].map((day, index) => (
          <span key={index} className="small-calendar__content_title">
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
                    className={`small-calendar__content_num ${getDayClass(day)}`}>
                    <span className="small-calendar__content_num">{day.format('D')}</span>
                  </button>
                ))}
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default SmallCalendar;