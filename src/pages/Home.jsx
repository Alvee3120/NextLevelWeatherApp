import { useState } from "react";
import LocationModal from "../components/LocationModal";

export default function Home() {
  const [click, setClick] = useState(false);
  console.log(click);

  return (
    <div className="text-center">
      <h1 className=" text-6xl font-extrabold text-blue-300 ">
        Next Level <span className="text-blue-400">Weather</span>
      </h1>
      <p className="p-1 font-light text-xl text-gray-600 ">
        Check Your Weather Here!
      </p>
      <div>
        <button
          onClick={() => setClick(true)}
          type="button"
          className="text-lg font-medium hover:scale-105 bg-blue-400 rounded-2xl text-white mt-2 p-4 "
        >
          Check Weather
        </button>
        {click && <LocationModal />}
      </div>
    </div>
  );
}
