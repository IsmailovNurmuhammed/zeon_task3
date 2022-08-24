import React, {useContext} from 'react';
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";
import SvgIcon from "./UI/SvgIcon";

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
      <div className="header__logo">
        <SvgIcon id={'calendar'}/>
      </div>
      <h1 className="header__title">My Daily Notes</h1>
      <button
        onClick={handleReset}
        className="header__today">
        <SvgIcon id={'calendar_today'}/>Today
      </button>
      <div className="header__month_btns">
        <button onClick={handlePrevMonth}>
          <SvgIcon id={'arrow'}/>
        </button>
        <h2 className="header__month_name">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
        <button onClick={handleNextMonth}>
          <SvgIcon id={'arrow_right'}/>
        </button>
      </div>

    </header>
  );
};

export default CalendarHeader;