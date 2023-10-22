import React from "react";
import { useEffect } from "react";
import { FaSun, FaTint, FaRegLightbulb, FaWater, FaSmog } from 'react-icons/fa';
import { Link } from "react-router-dom";
function Temperatur({ title, description, handleClick }) {
  const iconSize = 36;
  let iconColor = 'currentColor';
  if (title === 'Temperature') {
    iconColor = 'yellow';
    <Link to="/temp"></Link>
  } else if (title === 'Humidity') {
    iconColor = 'blue';
  } else if (title === 'Lights') {
    iconColor = 'orange';
  } else if (title === 'Water Level') {
    iconColor = 'teal';
  } else if (title === 'Ammonia gas'){
    iconColor = 'white';
  }else if(title==='Carbon Mono oxide gas'){
    iconColor='white';
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
            : title === 'Ammonia gas'
              ? <FaSmog color={iconColor} size={iconSize} />
              :title==='Carbon Mono oxide gas'
                ?<FaSmog color={iconColor} size={iconSize} />
              : null;
  
  let waterLevel =(value)=> {
    let level=0;
    if (value === 0 )
      return level = 0;
    else if (value > 0 && value <= 180)
      return level = 5;
    else if (value > 0 && value <= 350)
      return level = 10;
    else if (value > 350 && value <= 700) {
      return level = 20;
    }
    else if (value > 700 && value <= 1050) {
      return level = 30;
    }
    else if (value > 1050 && value <= 1400) {
      return level = 40;
    }
    else if (value > 1400 && value <= 1750) {
      return level = 50;
    }
    else if (value > 1750 && value <= 2100) {
      return level = 60;
    }
    else if (value > 2100 && value <= 2450) {
      return level = 70;
    }
    else if (value > 2450 && value <= 2800) {
      return level = 80;
    }
    else if (value > 2800 && value <= 3100) {
      return level = 90;
    }
    else if (value > 3200 && value <= 3500) {
      return level = 100;
    }
    else {
      return level;
    }
  }
  useEffect(() => {
    // Code to execute whenever description changes
    console.log('Description changed:', description);
  }, [description]);
  return (
    <>
      <div
        className=" bg-gray-300 rounded-xl shadow-md my-3 mx-auto text-center font-bold w-[300px] h-[300px] lg:w-[380px] lg:h-[310px] md:w-[330px] md:h-[270px] transition duration-300 ease-out transform hover:-translate-y-1 hover:scale-105 hover:bg-gray-400"
        onClick={handleClick}>
        <h2 className="pt-10">{title}</h2>
        <h1 className="flex justify-center m-3 pt-3">{icon} </h1>
        <p className="pt-3">{title === 'Water Level' ? `${waterLevel(description)} %` : description}</p>
        <p className="text-gray-500 mt-7 text-sm">Click For Details</p>
      </div>
    </>
  );
}
export default Temperatur;