import React from 'react'

const Overview = () => {
  return (
  <> 
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-6 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-2">Fitness with also a heath life</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="md:w-1/3">
            <img src="/path/to/your/image.jpg" alt="Fitness" className="rounded-lg w-full" />
          </div>
        </div>

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-blue-500 text-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold">Workout</h2>
                <p className="text-3xl">4 hrs</p>
              </div>
              <div className="bg-orange-500 text-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold">Calories</h2>
                <p className="text-3xl">1600 kcal</p>
              </div>
              <div className="bg-purple-500 text-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold">Steps</h2>
                <p className="text-3xl">2200 steps</p>
              </div>
            </div>

            {/* Goal Progress */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Goal Progress</h2>
              <div className="flex justify-between items-center mb-4">
                <p>Weekly</p>
                <div className="relative">
                  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
              </div>
              <div>
                {/* Replace with actual chart */}
                <div className="h-32 bg-gray-200 rounded-lg">Chart goes here</div>
              </div>
            </div>

            {/* Posts */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex items-center mb-4">
                <img src="/path/to/avatar.jpg" alt="User Avatar" className="h-10 w-10 rounded-full mr-4" />
                <div>
                  <h3 className="text-lg font-bold">Aizhan Maratovna</h3>
                  <p className="text-gray-600">2 days ago</p>
                </div>
              </div>
              <p className="mb-4">I want to study Svelte JS Framework. What is the best resource should I use?</p>
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">svelte</span>
                  <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">javascript</span>
                  <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">recommendations</span>
                </div>
                <div className="flex space-x-4">
                  <span className="text-gray-600"><i className="fas fa-eye"></i> 125</span>
                  <span className="text-gray-600"><i className="fas fa-thumbs-up"></i> 155</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            {/* My Schedule */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">My Schedule</h2>
              <ul>
                <li className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-bold">Monday</h3>
                    <p>Stretch</p>
                  </div>
                  <span className="bg-yellow-500 text-white rounded-full px-4 py-2">08:00 AM</span>
                </li>
                <li className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-bold">Tuesday</h3>
                    <p>Back Stretch</p>
                  </div>
                  <span className="bg-yellow-500 text-white rounded-full px-4 py-2">08:00 AM</span>
                </li>
                <li className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-bold">Wednesday</h3>
                    <p>Yoga</p>
                  </div>
                  <span className="bg-yellow-500 text-white rounded-full px-4 py-2">08:00 AM</span>
                </li>
              </ul>
            </div>

            {/* Week Plan */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Week Plan</h2>
              <ul>
                <li className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-bold">Monday</h3>
                    <p>Pizza | Break Fast</p>
                  </div>
                  <span className="bg-orange-500 text-white rounded-full px-4 py-2">08:00 AM</span>
                </li>
                <li className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-bold">Tuesday</h3>
                    <p>Chicken | Lunch</p>
                  </div>
                  <span className="bg-orange-500 text-white rounded-full px-4 py-2">01:00 PM</span>
                </li>
                <li className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-bold">Wednesday</h3>
                    <p>Ice Cream | Dinner</p>
                  </div>
                  <span className="bg-orange-500 text-white rounded-full px-4 py-2">06:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</>
  )
}

export default Overview