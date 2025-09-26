import React from "react";

function About() {
  return (
    <div className="flex flex-col h-[84vh]">
      {/* Main content area  */}
      <main className="flex-1 container mx-auto px-6 py-16 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          About Jarurat Care
        </h1>
        {/* Introductory paragraph */}
        <p className="text-lg text-gray-700 mb-4">
          Jarurat Care is a simple patient records dashboard built with React
          and Redux. It demonstrates state management, API integration, and
          responsive design.
        </p>
        {/* Technologies used paragraph */}
        <p className="text-lg text-gray-700">
          Technologies used:{" "}
          <span className="font-semibold">React, Redux, Tailwind CSS</span>.
        </p>
      </main>
    </div>
  );
}

export default About;
