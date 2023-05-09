import React from "react";
import { FaSun, FaTint, FaRegLightbulb, FaWater } from 'react-icons/fa';

function Temp({ title, description, handleClick }) {
  const iconSize = 36;
  let iconColor = 'currentColor';

  if (title === 'Temperature') {
    iconColor = 'yellow';
    iconColor = 'blue';
  } else if (title === 'Humidity') {
  } else if (title === 'Lights') {
    iconColor = 'orange';
  } else if (title === 'Water Level') {
    iconColor = 'teal';
  }

  const icon =
    title === 'Temperature'
      ? <FaSun color={iconColor} size={iconSize} />
      : title === 'Humidity'
        ? <FaTint color={iconColor} size={iconSize} />
        : title === 'Lights'
          ? <FaRegLightbulb color={iconColor} size={iconSize} />
          : title === 'Water Level'
            ? <FaWater color={iconColor} size={iconSize} />
            : null;
 
  return (
    <>
      <div
        className=" bg-gray-300 rounded-lg shadow-lg my-3 text-center font-bold  h-64 transition duration-300 ease-out transform hover:-translate-y-1 hover:scale-105 hover:bg-gray-400"
        onClick={handleClick}> 
        
        <h2 className="pt-8">{title}</h2>
        <h1 className="flex justify-center m-3">{icon} </h1>
        <p>{description}</p>
        <p className="text-gray-500 mt-5 text-sm">Click For Details</p>
        </div>
    </>
  );
}
export default Temp;