import React, {useContext, useState} from 'react';
import GlobalContext from "../context/GlobalContext";
import SvgIcon from "./UI/SvgIcon";

const labelsClasses = ['emerald-l', 'sky-l', 'violet-l', 'rose-l', 'amber-l', 'zinc-l'];

const EventModal = () => {
  const {setShowEventModal, selectedDay, dispatchCalEvent, selectedEvent} = useContext(GlobalContext);
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : '');
  const [description, setDescription] = useState(selectedEvent ? selectedEvent.description : '');
  const [selectedLabel, setSelectedLabel] = useState(selectedEvent
    ? labelsClasses.find((label) => label === selectedEvent.label)
    : labelsClasses[0]);


  const clickOutside = () => {
    setShowEventModal(false);
  }

  function handleSubmit(event) {

    if (title.trim() === '') {
      setTitle('');
      setDescription('');
    event.stopPropagation();
    } else {
      const calendarEvent = {
        title: title,
        description: description,
        label: selectedLabel,
        day: selectedDay.valueOf(),
        id: selectedEvent ? selectedEvent.id : Date.now(),
      };
      if (selectedEvent) {
        dispatchCalEvent({type: 'update', payload: calendarEvent});
      } else {
        dispatchCalEvent({type: 'push', payload: calendarEvent});
      }
      setShowEventModal(false);
    }

  }

  return (
    <div onClick={clickOutside} className="modal-wrapper">
      <form onClick={event => event.stopPropagation()} className="modal-block">
        <header className="modal__header">
          <SvgIcon id={"menu"}/>
          <div className="modal__header_icons">
            {selectedEvent && (
              <span onClick={() => {
                dispatchCalEvent({type: 'delete', payload: selectedEvent});
                setShowEventModal(false);
              }}>
                <SvgIcon id={"trash"}/>
              </span>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <SvgIcon id={"iks"}/>
            </button>
          </div>
        </header>
        <div className="modal__body">
          <div className="modal__body_content">
            <div
              className="modal__body_row">
              <input
                type="text"
                name="title"
                placeholder="Add title"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
                className="modal__body_input title-input focus:ring-0"
              />
            </div>
            <div className="modal__body_row">
              <SvgIcon id={"time"}/>
              <p className="px-2">{selectedDay.format("dddd, MMMM DD")}</p>
            </div>
            <div className="modal__body_row">
              <SvgIcon id={"description"}/>
              <input
                type="text"
                name="description"
                placeholder="Add a description"
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
                className="modal__body_input focus:ring-0"
              />
            </div>
            <div className="modal__body_row">
              <SvgIcon id={"bookmark"}/>
              <div className="modal__body_labels">
                {labelsClasses.map((lblClass, index) => (
                  <span
                    key={index}
                    className={`${lblClass} modal__body_label`}
                    onClick={() => setSelectedLabel(lblClass)}
                  >
                  {selectedLabel === lblClass && (
                    <SvgIcon id={"check"}/>
                  )}
                </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <footer className="modal__footer">
          <div className="modal__footer_inner">
            <button
              type="submit"
              onClick={handleSubmit}
              className="modal__footer_btn"
            >
              <span>
              Save
              </span>
            </button>
          </div>
        </footer>
      </form>
    </div>
  );
};

export default EventModal;