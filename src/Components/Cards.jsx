import React from 'react';
import { Link } from 'react-router-dom';
function Cards() {
  return (
    <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">
            Our Facilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">
                    Academic Programs
                </h3>
                <p className="text-gray-600 mb-4">
                    Explore our diverse academic programs designed to provide you with a comprehensive education and valuable skills for your future career.
                </p>
                <Link to="/academic-programs" className="text-blue-500 hover:text-blue-700 font-semibold">
                    Learn More
                </Link>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">
                    Research Opportunities
                </h3>
                <p className="text-gray-600 mb-4">
                    Engage in cutting-edge research projects and contribute to groundbreaking discoveries in your field of interest.
                </p>
                <Link to="/research" className="text-blue-500 hover:text-blue-700 font-semibold">
                    Learn More
                </Link>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">
                    Student Life
                </h3>
                <p className="text-gray-600 mb-4">
                    Experience a vibrant campus life with various clubs, organizations, and events that foster personal growth and community engagement.
                </p>
                <Link to="/student-life" className="text-blue-500 hover:text-blue-700 font-semibold">
                    Learn More
                </Link>
            </div>
        </div>
    </div>
  );
}

export default Cards;