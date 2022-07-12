import { FC } from "react";

const App: FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-xl w-full mx-auto px-4 py-32">
        <form className="bg-white rounded-lg px-8 py-12 shadow-lg">
          <h1 className="text-orange-600 text-xl font-semibold mb-8">
            Order Package
          </h1>
          <label className="block">
            <span className="block mb-1 text-gray-600">Your name</span>
            <input
              className="w-full rounded-lg border-gray-300 focus:ring-0 focus:border-orange-600 py-3"
              type="text"
            />
          </label>
          <label className="block mt-6">
            <input
              type="checkbox"
              className="text-orange-600 w-5 h-5 border-gray-300 focus:ring-0 focus:ring-offset-0"
            />
            <span className="ml-2 text-gray-600">Send receipt to email?</span>
          </label>
          <label className="block mt-6">
            <span className="block mb-1 text-gray-600">Email</span>
            <input
              className="w-full rounded-lg border-gray-300 focus:ring-0 focus:border-orange-600  py-3"
              type="text"
            />
          </label>
          <button className="mt-12 w-full bg-orange-600 rounded-lg px-6 py-3 text-white font-medium">
            Order Package
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
