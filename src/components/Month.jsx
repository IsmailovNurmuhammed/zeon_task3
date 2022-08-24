import React from 'react';
import Day from "./Day";

const Month = ({month}) => {
  return (
    <div className="calendar ">
      {month.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((day, i) => (
            <Day day={day} key={i} colIndex={i} rowIndex={index} />
          ) )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Month;