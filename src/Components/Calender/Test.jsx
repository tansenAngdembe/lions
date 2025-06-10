import React, { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Test = () => {
  const {t} = useTranslation();
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.post('http://localhost:8080/api/v1/public/get-all-events');
        const formattedEvents = {};
        
        response.data.data.forEach(event => {
          const date = new Date(event.eventDate).toISOString().split('T')[0];
          formattedEvents[date] = {
            title: event.title,
            location: event.location,
            time: event.eventTime,
            description: event.description
          };
        });
        
        setEvents(formattedEvents);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const getEventForDate = (date) => {
    const dateString = date.toISOString().split("T")[0];
    return events[dateString];
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-full bg-[#FAB130] p-4 md:w-full h-max xl:h-max">
      <h1 className="text-center text-4xl text-black font-bold">
        {t("body.calender")}
      </h1>
      <div className="flex items-center flex-col xl:flex-row gap-20 justify-center bg-[#4185c1] p-4">
        <DayPicker
          className="bg-white p-4 rounded-xl [&_.rdp-day]:font-bold [&_.rdp-day]:tracking-wide"
          selected={selectedDate}
          onDayClick={handleDateSelect}
          modifiers={{
            event: (date) => events[date.toISOString().split("T")[0]],
          }}
          modifiersStyles={{
            event: {
              backgroundColor: "red",
              borderRadius: "50%",
              fontWeight: "bold",
            },
          }}
        />
        <div>
          {(!selectedDate) ? <img src="/logo/Quote.svg" alt="calender solgan" /> : ""}
          {selectedDate && (
            <div className="bg-white rounded-xl shadow-md mt-6 p-6 w-full max-w-xl space-y-4">
              {getEventForDate(selectedDate) ? (
                <>
                  <div className="flex gap-4 items-center">
                    <div className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">
                      Event Title
                    </div>
                    <div className="bg-gray-200 px-4 py-2 rounded flex-1">
                      {getEventForDate(selectedDate).title}
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="bg-blue-600 text-white font-bold px-4 py-1 rounded">
                      Location
                    </div>
                    <div className="bg-gray-200 px-4 py-2 rounded flex-1">
                      {getEventForDate(selectedDate).location}
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="bg-orange-600 text-white font-bold px-6 py-1 rounded">
                      Time
                    </div>
                    <div className="bg-gray-200 px-4 py-2 rounded flex-1">
                      {getEventForDate(selectedDate).time}
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="bg-green-600 text-white font-bold px-4 py-1 rounded">
                      Description
                    </div>
                    <div className="bg-gray-200 px-4 py-2 rounded flex-1">
                      {getEventForDate(selectedDate).description}
                    </div>
                  </div>
                </>
              ) : (
                <h4 className="text-red-500 text-center font-semibold">
                  No Event on this Date
                </h4>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Test;
