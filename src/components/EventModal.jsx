import React, {useContext, useState} from 'react';
import GlobalContext from "../context/GlobalContext";

const labelsClasses = ['indigo', 'gray', 'lime', 'blue', 'red', 'yellow', "violet", "orange"];

const EventModal = () => {
  const {setShowEventModal, selectedDay, dispatchCalEvent, selectedEvent} = useContext(GlobalContext);
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : '');
  const [description, setDescription] = useState(selectedEvent ? selectedEvent.description : '');
  const [selectedLabel, setSelectedLabel] = useState(selectedEvent
    ? labelsClasses.find((label) => label === selectedEvent.label)
    : labelsClasses[0]);

  function handleSubmit(event) {
    event.preventDefault();
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

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-indigo-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <div>
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({type: 'delete', payload: selectedEvent});
                  setShowEventModal(false);
                }}
                className="material-icons-outlined text-gray-400 cursor-pointer">
              delete
              </span>
            )}
            <button onClick={() => setShowEventModal(false)}>
            <span className="material-icons-outlined text-gray-400">
              close
            </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div
              className="bg-lime-500 bg-red-500 bg-yellow-500 bg-violet-500 bg-indigo-500 bg-gray-500 bg-orange-500"></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
            <span className="material-icons-outlined text-gray-400">
              schedule
            </span>
            <p className="px-2">{selectedDay.format("dddd, MMMM DD")}</p>
            <span className="material-icons-outlined text-gray-400">
              segment
            </span>
            <input
              type="text"
              name="description"
              placeholder="Add a description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
            <span className="material-icons-outlined text-gray-400">
              bookmark_border
            </span>
            <div className="flex gap-x-2">
              {labelsClasses.map((lblClass, index) => (
                <span
                  key={index}
                  className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                  onClick={() => setSelectedLabel(lblClass)}
                >
                  {selectedLabel === lblClass && (
                    <span className="material-icons-outlined text-white text-sm">
                      check
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 cursor-pointer hover:bg-blue-600 px-6 py-2 text-white rounded"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
};

export default EventModal;