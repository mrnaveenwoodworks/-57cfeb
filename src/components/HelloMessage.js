import React, { useState, useEffect } from "react";

const HelloMessage = () => {
  const [greeting, setGreeting] = useState("Hello, World!");
  const [colorIndex, setColorIndex] = useState(0);
  const colors = [
    "text-purple-600",
    "text-pink-600",
    "text-blue-600",
    "text-indigo-600"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    const greetings = [
      "Hello, World!",
      "Bonjour, le monde!",
      "Hola, Mundo!",
      "こんにちは世界!"
    ];
    const currentIndex = greetings.indexOf(greeting);
    const nextIndex = (currentIndex + 1) % greetings.length;
    setGreeting(greetings[nextIndex]);
  };

  return (
    <div className="relative">
      <h1 
        className={`text-5xl font-bold ${colors[colorIndex]} cursor-pointer transition-colors duration-500 text-shadow hover:scale-105 transform`}
        onClick={handleClick}
      >
        {greeting}
      </h1>
      <div className="absolute -top-4 -right-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><path d="M84.27,171.73l-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3a7.92,7.92,0,0,1,0,14.86l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="176" y1="16" x2="176" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="224" y1="72" x2="224" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="152" y1="40" x2="200" y2="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="208" y1="88" x2="240" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
      </div>
      <div className="mt-4 bg-gradient-to-r from-purple-400 to-pink-400 h-1 w-32 mx-auto rounded-full"></div>
    </div>
  );
};

export default HelloMessage;