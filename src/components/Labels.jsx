import React, {useContext} from 'react';
import GlobalContext from "../context/GlobalContext";

const Labels = () => {
  const {labels, updateLabel} = useContext(GlobalContext);
  return (
    <React.Fragment>
      <div className="sidebar__labels">
      <p className="sidebar__labels_title"> Label</p>
        {labels.map(({label: lbl, checked}, index) => (
          <label
            key={index}
            className="sidebar__labels_label">
            <input
              type="checkbox"
              checked={checked}
              className={`${lbl} filter__label`}
              onChange={() => updateLabel({label: lbl, checked: !checked})}
            />
            <span>{lbl}</span>
          </label>
        ))}
      </div>
    </React.Fragment>
  )
    ;
};

export default Labels;