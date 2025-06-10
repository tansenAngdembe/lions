import React, { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Test = () => {
  const { t } = useTranslation();
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


  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Header Section */}


      {/* Main Content */}
      <div className="min-h-screen w-full justify-center mx-auto px-4 sm:px-6 lg:px-8 py-8  bg-[#00529B] place-content-center">
        <div className=" bg-[#00529B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h1 className="text-3xl font-bold text-gray-900 text-center">
              {t("body.calender")}
            </h1>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-16 items-start justify-center">
          {/* Calendar Section */}
          <div className="w-full xl:w-auto bg-white p-6 rounded-xl shadow-sm">
            <DayPicker
              className="[&_.rdp-day]:font-bold  [&_.rdp-day]:tracking-wide"
              selected={selectedDate}
              onDayClick={handleDateSelect}
              modifiers={{
                event: (date) => events[date.toISOString().split("T")[0]],
              }}
              modifiersStyles={{
                event: {
                  backgroundColor: "red",
                  marginTop:"8px",
                  marginLeft:"6px",
                  fontWeight: "normal", // or "lighter"
                  width: "27px",
                  height: "27px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  
                  // margin: "auto",
                  // fontSize: "0.75rem",             

              },
              }}
            />
          </div>

          {/* Event Details Section */}
          <div className="w-full xl:w-[600px]">
            {!selectedDate ? (
              <div className="bg-white rounded-xl shadow-sm p-8 flex justify-center items-center h-full">
                <img
                  src="/logo/Quote.svg"
                  alt="calendar slogan"
                  className="max-w-full h-auto"
                />
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
                {getEventForDate(selectedDate) ? (
                  <>
                    <div className="flex gap-4 items-center">
                      <div className="bg-yellow-400 text-black font-bold px-3 py-1 rounded whitespace-nowrap">
                        Event Title
                      </div>
                      <div className="bg-gray-100 px-4 py-2 rounded flex-1">
                        {getEventForDate(selectedDate).title}
                      </div>
                    </div>

                    <div className="flex gap-4 items-center">
                      <div className="bg-blue-600 text-white font-bold px-4 py-1 rounded whitespace-nowrap">
                        Location
                      </div>
                      <div className="bg-gray-100 px-4 py-2 rounded flex-1">
                        {getEventForDate(selectedDate).location}
                      </div>
                    </div>

                    <div className="flex gap-4 items-center">
                      <div className="bg-orange-600 text-white font-bold px-6 py-1 rounded whitespace-nowrap">
                        Time
                      </div>
                      <div className="bg-gray-100 px-4 py-2 rounded flex-1">
                        {getEventForDate(selectedDate).time}
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-green-600 text-white font-bold px-4 py-1 rounded whitespace-nowrap">
                        Description
                      </div>
                      <div className="bg-gray-100 px-4 py-2 rounded flex-1">
                        {getEventForDate(selectedDate).description}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <h4 className="text-red-500 text-lg font-semibold">
                      No Event on this Date
                    </h4>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
