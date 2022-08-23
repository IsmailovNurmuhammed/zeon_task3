import React, {useContext} from 'react';
import GlobalContext from "../context/GlobalContext";

const Labels = () => {
  const {labels, updateLabel} = useContext(GlobalContext);
  return (
    <React.Fragment>
      <p className="text-gray-500 font-bold mt-10 "> Label</p>
      {labels.map(({label: lbl, checked}, index) => (
        <label
          key={index}
          className="items-center mt-3 block text-indigo-500 text-gray-500 text-red-500 text-orange-500 text-lime-500 text-violet-500 text-yellow-500">
          <input
            type="checkbox"
            checked={checked}
            className={`form-checkbox h-5 w-5 text-${lbl}-500 rounded focus:ring-0 cursor-pointer `}
            onChange={() => updateLabel({label: lbl, checked: !checked})}
          />
          <span className="ml-2 text-gray-700 capitalize">{lbl}</span>
        </label>
      ))}
    </React.Fragment>
  )
    ;
};

export default Labels;