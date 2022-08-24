import React, {useContext} from 'react';
import GlobalContext from "../context/GlobalContext";
import SvgIcon from "./UI/SvgIcon";

const CreateEventButton = () => {
  const {setShowEventModal} = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="sidebar__btn"
    >
      <SvgIcon id={'calendar_add'}/>
      <span>Create a note</span>
    </button>
  );
};

export default CreateEventButton;