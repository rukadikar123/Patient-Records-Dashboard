import React from "react";
import { Link } from "react-router-dom";

// Home component – landing page of Jarurat Care
function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-blue-50 text-center py-30  px-4 flex-1">
        {/* Page heading */}
        <h1 className="text-4xl font-bold text-blue-900">
          Welcome to Jarurat Care
        </h1>
        {/* Introductory text */}
        <p className="mt-4 text-lg text-gray-700">
          Manage and view patient records easily and securely.
        </p>
        {/* Button link to view patients page */}
        <Link
          to="/patients"
          className="inline-block mt-6 px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800"
        >
          View Patients
        </Link>
      </section>
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {/* Feature card 1 */}
          <div className="bg-blue-50 rounded-xl p-6 text-center shadow hover:shadow-md">
            <h3 className="text-xl font-semibold text-blue-900">
              View Records
            </h3>
            <p className="mt-2 text-gray-600">
              Access all patient information in one place.
            </p>
          </div>
          {/* Feature card 2 */}
          <div className="bg-blue-50 rounded-xl p-6 text-center shadow hover:shadow-md">
            <h3 className="text-xl font-semibold text-blue-900">
              Search Patients
            </h3>
            <p className="mt-2 text-gray-600">
              Find patients quickly with our search tool.
            </p>
          </div>
          {/* Feature card 3 */}
          <div className="bg-blue-50 rounded-xl p-6 text-center shadow hover:shadow-md">
            <h3 className="text-xl font-semibold text-blue-900">
              Add New Patients
            </h3>
            <p className="mt-2 text-gray-600">
              Easily add new patients to the dashboard.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
