import React, { useState, useEffect } from 'react';

const LioAi = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [data, setData] = useState([]);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    fetch("/lioRes.json")
    .then((res) => res.json())
    .then((json) => setData(json.querys))
    .catch((err) => console.error("Failed to fetch data:", err));
  }, []);

  const handleLioReply = () => {
    const userMessage = query.trim();
    if (!userMessage) return;

    const userQuery = userMessage.toLowerCase();
    setQuery("");
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setIsTyping(true);

    setTimeout(() => {
      let matched = false;
      let lioReply = "I am still learning 😁";
      let image = "";

      data.forEach((item) => {
        if (item.query.some((q) => userQuery.includes(q.toLowerCase()))) {
          matched = true;
          lioReply = item.response[lang] || item.response["en"] || lioReply;
          image = item.response.img || "";
        }
      });

      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: lioReply, img: image }
      ]);
    }, 1500);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen  pt-40 pb-10">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-primary">
          Welcome to Lio <sup className="text-primary text-sm">(BETA)</sup>
        </h1>
        <p className="mt-4 text-black">
          Lio is your new AI assistant for all things Lions International. Whether you have a question about a program, need to find a specific resource, or just want a recommendation — Lio is here to help.
        </p>
        <p className="mt-2 text-black">
          Keep in mind that Lio is still learning 🧠. We’re continuously working to improve your experience.
        </p>
        <p className="mt-2 text-black font-medium">
          Ready to get started? Just ask a question below. You can even follow up to refine your query for better results!
        </p>
        <p className='text-primary font-bold text-xl'>Note Lio is just in BETA He still need improvement and he makes some mistakes</p>
      </div>

      <div className="flex flex-col justify-between border border-gray-300 bg-gray-50 w-full max-w-md h-[500px] p-4 rounded-md">
        <div className="flex justify-between mb-2">
          <label className="text-sm text-gray-700">Language:</label>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="text-sm px-2 py-1 border rounded"
          >
            <option value="en">English</option>
            <option value="np">नेपाली</option>
          </select>
        </div>

        <div className="flex flex-col gap-4 overflow-y-auto flex-grow mb-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`px-4 py-2 rounded-lg max-w-[75%] ${
                msg.sender === "user"
                  ? "self-end bg-blue-100 text-gray-800"
                  : "self-start bg-gray-100 text-gray-800"
              }`}
            >
              <span
                className={`font-semibold mr-1 ${
                  msg.sender === "user" ? "text-blue-500" : "text-orange-500"
                }`}
              >
                {msg.sender === "user" ? "You:" : "Lio✨:"}
              </span>
              {msg.text}
              {msg.img && (
                <img
                  src={msg.img}
                  alt="response visual"
                  className="mt-2 rounded max-w-full h-auto"
                />
              )}
            </div>
          ))}

          {isTyping && (
            <div className="self-start bg-gray-200 text-gray-600 px-4 py-2 rounded-lg max-w-[75%] italic">
              Lio is Thinking...
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What is lion clubs"
            className="flex-grow border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
          <button
            className="bg-black text-white px-4 py-2 rounded cursor-pointer"
            onClick={handleLioReply}
            disabled={isTyping}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default LioAi;
