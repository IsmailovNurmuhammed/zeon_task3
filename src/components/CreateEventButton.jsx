import React, {useContext} from 'react';
import plusImg from '../assets/img/add.svg';
import GlobalContext from "../context/GlobalContext";

const CreateEventButton = () => {
  const {setShowEventModal} = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="transition border p-2 rounded-full flex items-center shadow-md hover:shadow-xl"
    >
      <img src={plusImg} alt="plus" className="w-7 h-7"/>
      <span className="pl-3 pr-7">Create</span>
    </button>
  );
};

export default CreateEventButton;