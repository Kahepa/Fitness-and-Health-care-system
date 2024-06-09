
const Biometrics = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="bg-blue-100 rounded-lg shadow-lg p-6 flex-1">
          <h2 className="text-2xl font-bold mb-4 text-center">Full report</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Blood pressure</label>
              <input className="p-2 rounded bg-green-200 text-green-800" type="text" value="102/72" readOnly />
              <span className="p-2 rounded bg-gray-300 mt-2 inline-block text-center">mmhg</span>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Blood sugar</label>
              <input className="p-2 rounded bg-green-200 text-green-800" type="text" value="80" readOnly />
              <span className="p-2 rounded bg-gray-300 mt-2 inline-block text-center">mg/dl</span>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Heart rate</label>
              <input className="p-2 rounded bg-green-200 text-green-800" type="text" value="98" readOnly />
              <span className="p-2 rounded bg-gray-300 mt-2 inline-block text-center">bpm</span>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Weight</label>
              <input className="p-2 rounded bg-gray-200" type="text" value="55" readOnly />
              <div className="flex gap-2 mt-2">
                <button className="flex-1 p-2 rounded bg-gray-300">LBS</button>
                <button className="flex-1 p-2 rounded bg-gray-300">KG</button>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Height</label>
              <input className="p-2 rounded bg-gray-200" type="text" value="170" readOnly />
              <div className="flex gap-2 mt-2">
                <button className="flex-1 p-2 rounded bg-gray-300">FEET</button>
                <button className="flex-1 p-2 rounded bg-gray-300">CM</button>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Gender</label>
              <select className="p-2 rounded bg-gray-200">
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Age</label>
              <input className="p-2 rounded bg-gray-200" type="text" value="21" readOnly />
            </div>
          </div>
          <div className="mt-4">
            <button className="p-2 bg-gray-300 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m4-4H8m5 10a9 9 0 100-18 9 9 0 000 18z" />
              </svg>
              Download Report
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2">Blood Pressure</h3>
            <p className="text-2xl">102 / 72 mmhg</p>
            <p className="text-green-600">Normal</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2">Blood Sugar</h3>
            <p className="text-2xl">80 mg/dL</p>
            <p className="text-green-600">Normal</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2">Heart Rate</h3>
            <p className="text-2xl">98 bpm</p>
            <p className="text-green-600">Normal</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2">Intake Goal</h3>
            <p className="text-2xl text-blue-600">18000 ml / 25000 ml</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Biometrics