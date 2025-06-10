import React, { useState, useRef, useEffect } from 'react';
import lioResData from './lioRes.json';

const LioAi = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [lang, setLang] = useState("en");
  const data = lioResData.querys;
  const messagesContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleLioReply = () => {
    const userMessage = query.trim();
    if (!userMessage) return;

    const userQuery = userMessage.toLowerCase();
    setQuery("");
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setIsTyping(true);

    setTimeout(() => {
      let matched = false;
      let lioReply = "";
      let image = "";

      // First try to find a matching query
      for (const item of data) {
        // Check if any query in the array exactly matches or is a complete word in the user's query
        const hasMatch = item.query.some((q) => {
          const queryWords = q.toLowerCase().split(/\s+/);
          const userWords = userQuery.split(/\s+/);
          
          // Check for exact match
          if (userQuery === q.toLowerCase()) return true;
          
          // Check if all words in the query are present in the user's message
          return queryWords.every(word => 
            userWords.some(userWord => userWord === word)
          );
        });

        if (hasMatch) {
          matched = true;
          lioReply = item.response[lang] || item.response["en"];
          image = item.response.img || "";
          break;
        }
      }

      // If no match found, use the wildcard response (first item in data)
      if (!matched) {
        const wildcardResponse = data[0].response;
        lioReply = wildcardResponse[lang] || wildcardResponse["en"];
        image = wildcardResponse.img || "";
      }

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
          Keep in mind that Lio is still learning 🧠. We're continuously working to improve your experience.
        </p>
        <p className="mt-2 text-black font-medium">
          Ready to get started? Just ask a question below. You can even follow up to refine your query for better results!
        </p>
        <p className='text-primary font-bold text-xl'>Note Lio is just in BETA He still need improvement and he makes some mistakes</p>
      </div>

      <div className="flex flex-col justify-between border border-gray-300 bg-white w-full max-w-4xl h-[600px] p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Lio AI Assistant</h2>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="text-sm px-3 py-1.5 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="en">English</option>
            <option value="np">नेपाली</option>
          </select>
        </div>

        <div 
          ref={messagesContainerRef}
          className="flex flex-col gap-4 overflow-y-auto flex-grow mb-4 px-2 scroll-smooth"
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                msg.sender === "user" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`px-4 py-2.5 rounded-2xl max-w-[85%] ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <span
                  className={`font-medium text-sm mb-1 block ${
                    msg.sender === "user" ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  {msg.sender === "user" ? "You" : "Lio✨"}
                </span>
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="self-start bg-gray-100 text-gray-600 px-4 py-2.5 rounded-2xl max-w-[85%]">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Lio is typing</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask me anything about Lions International..."
            className="flex-grow border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !isTyping) {
                handleLioReply();
              }
            }}
          />
          <button
            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
              isTyping
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
            onClick={handleLioReply}
            disabled={isTyping}
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default LioAi;
