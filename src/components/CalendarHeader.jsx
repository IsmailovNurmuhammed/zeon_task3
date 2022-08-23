import React, {useContext} from 'react';
import logo from '../assets/img/calendar.svg';
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";

const CalendarHeader = () => {
  const {monthIndex, setMonthIndex} = useContext(GlobalContext);
  // console.log(monthIndex);

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
    // console.log("+1")
  }

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
    // console.log("-1")
  }

  function handleReset() {
    setMonthIndex(monthIndex === dayjs().month()
      ? monthIndex + Math.random()
      : dayjs().month())
  }

  return (
    <header className="header">
      <img src={logo} alt="log" className="mr-2 w-12 h-12"/>
      <h1 className="mr-10 text-xl text-gray-500 font-bold">My Daily Notes</h1>
      <button
        onClick={handleReset}
        className="border rounded py-2 px-4 mr-5">
        Today
      </button>
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
      <h2 className="ml-4 text-xl-2 text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
};

export default CalendarHeader;