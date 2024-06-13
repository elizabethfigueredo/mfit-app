// src/components/WorkoutCard.js

import Navigation from "../components/Navigation";
import Calories from "../components/details/Calories";
import Cover from "../components/details/Cover";
import Personal from "../components/details/Personal";
import Program from "../components/details/Program";

const WorkoutDetails = () => {
  return (
    <>
    <Cover/>
    <Calories/>
    <Personal/>
    <Program/>
    <Navigation/>
    </>
  );
};

export default WorkoutDetails;

<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">

<div className="md:flex">
  <div className="md:flex-shrink-0">
    <img className="h-48 w-full object-cover md:h-full md:w-48" src="image_url" alt="Workout" />
  </div>

    <div className="mt-4 flex items-center">
      <span className="text-yellow-500">★★★★☆</span>
      <span className="ml-2 text-sm text-gray-500">(10k reviews)</span>
    </div>
    
  </div>
</div>