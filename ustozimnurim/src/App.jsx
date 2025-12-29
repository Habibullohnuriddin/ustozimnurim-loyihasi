import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-center text-sky-600">
          UstozimNurim
        </h1>
        <p className="mt-4 text-gray-600 text-center">
          React + Vite + Tailwind starter
        </p>
        <div className="mt-6 flex justify-center">
          <a
            className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
            href="#"
          >
            Boshlash
          </a>
        </div>
      </div>
    </div>
  );
}
