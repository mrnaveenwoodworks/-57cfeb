import React from "react";
import HelloMessage from "./components/HelloMessage";
import "./styles.css";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="text-center p-8 bg-white bg-opacity-90 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
        <HelloMessage />
        <p className="mt-4 text-gray-600 italic">
          Welcome to your stylish React application
        </p>
        <div className="mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="80" height="80"><rect width="256" height="256" fill="none"/><polyline points="48 152 48 216 208 216 208 152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="88" y1="172" x2="168" y2="172" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="100.3" y1="102.23" x2="175.48" y2="129.59" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="135.73" y1="40.87" x2="197.01" y2="92.29" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
        </div>
      </div>
    </div>
  );
}

export default App;