import React, { useState, useEffect } from "react";
import {
  FaFan,
  FaSprayCan,
  FaHandPaper,
  FaLightbulb,
  FaTemperatureHigh,
  FaSyncAlt
} from "react-icons/fa";
import firebase from "firebase";

function ButtonGrid() {
  const [isManual, setIsManual] = useState(false);
  const [isLedActive, setIsLedActive] = useState(false);
  const [isFanActive, setIsFanActive] = useState(false);
  const [isSprayActive, setIsSprayActive] = useState(false);
  const [isHeaterActive, setIsHeaterActive] = useState(false);

  useEffect(() => {
    // Read initial values from the database and set the state variables
    const fetchData = async () => {
      try {
        const controlStatusRef = firebase.database().ref("test/control_status");
        controlStatusRef.on("value", (snapshot) => {
          setIsManual(snapshot.val());
        });
        const fanStatusRef = firebase.database().ref("test/fan_status");
        fanStatusRef.on("value", (snapshot) => {
          setIsFanActive(snapshot.val());
        });

        const ledStatusRef = firebase.database().ref("test/led_status");
        ledStatusRef.on("value", (snapshot) => {
          setIsLedActive(snapshot.val());
        });

        const sprayStatusRef = firebase.database().ref("test/spray_status");
        sprayStatusRef.on("value", (snapshot) => {
          setIsSprayActive(snapshot.val());
        });

        const heaterStatusRef = firebase.database().ref("test/heater_status");
        heaterStatusRef.on("value", (snapshot) => {
          setIsHeaterActive(snapshot.val());
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    // Cleanup by unsubscribing from the database listeners
    return () => {
      firebase.database().ref("test/control_status").off("value");
      firebase.database().ref("test/fan_status").off("value");
      firebase.database().ref("test/led_status").off("value");
      firebase.database().ref("test/spray_status").off("value");
      firebase.database().ref("test/heater_status").off("value");
    };
  }, []);
  const handleControl = () => {
    setIsManual(!isManual);
    firebase.database().ref("test/control_status").set(!isManual);
  }
  const handleFanClick = () => {
    setIsFanActive(!isFanActive);
    firebase.database().ref("test/fan_status").set(!isFanActive);
  };

  const handleLedClick = () => {
    setIsLedActive(!isLedActive);
    firebase.database().ref("test/led_status").set(!isLedActive);
  };

  const handleSprayClick = () => {
    setIsSprayActive(!isSprayActive);
    firebase.database().ref("test/spray_status").set(!isSprayActive);
  };

  const handleHeaterClick = () => {
    setIsHeaterActive(!isHeaterActive);
    firebase.database().ref("test/heater_status").set(!isHeaterActive);
  };

  return (
    <>
      <div className="grid grid-cols-1 mt-4">
        <div onClick={handleControl}
          className={`${isManual ? "bg-blue-700" : "bg-blue-500"} flex
       hover:bg-blue-700 text-white p-2 mx-auto rounded-full items-center justify-center w-[290px] lg:w-[380px]`}>
          <span className="bg-black p-[4px] rounded-xl"> {isManual ? <FaHandPaper size={24} color={"#ffffff"} /> :
            <FaSyncAlt size={24} color={"#ffffff"} />}
          </span>
          <button className="ml-5">
           <h1 className="text-xl font-extrabold"> {isManual ? "Manual" : "Auto"}</h1>
          </button>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 lg:mx-5 py-3 font-bold">
          {/* Button for Fan */}
          <div onClick={handleFanClick}
            className={`${isFanActive ? "bg-blue-700" : "bg-blue-500"} flex
       hover:bg-blue-700 text-white p-2 mx-auto rounded-full items-center justify-center w-[290px] lg:w-[400px]`}>
            <span className="bg-black p-[4px] rounded-xl">
              <FaFan size={24} color={isFanActive ? "#ffffff" : "#c3dafe"} />
            </span>
            <button className="ml-5">
              {isFanActive ? "Fan ON" : "Fan OFF"}
            </button>
          </div>

          {/* Button for Spray */}
          <div onClick={handleSprayClick}
            className={`${isSprayActive ? "bg-blue-700" : "bg-blue-500"} flex
         hover:bg-blue-700 text-white p-2 mx-auto rounded-full items-center justify-center w-[290px] lg:w-[400px]`}>
            <span className="bg-black p-[4px] rounded-xl">
              <FaSprayCan size={24} color={isSprayActive ? "#ffffff" : "#c3dafe"} />
            </span>
            <button className="ml-5" >
              {isSprayActive ? "Spray ON" : "Spray OFF"}
            </button>
          </div>

          {/* Button for Light */}
          <div onClick={handleLedClick}
            className={`${isLedActive ? "bg-blue-700" : "bg-blue-500"} flex
         hover:bg-blue-700 text-white p-2 mx-auto rounded-full items-center justify-center  w-[290px] lg:w-[400px]`}>
            <span className="bg-black p-[4px] rounded-xl felx-start">
              <FaLightbulb size={24} color={isLedActive ? "#ffffff" : "#c3dafe"} />
            </span>
            <button className="ml-5">
              {isLedActive ? "Light ON" : "Light OFF"}
            </button>
          </div>

          {/* Button for Heater */}
          <div onClick={handleHeaterClick}
            className={`${isHeaterActive ? "bg-blue-700" : "bg-blue-500"} flex
       hover:bg-blue-700 text-white p-2 mx-auto rounded-full items-center justify-center  w-[290px] lg:w-[400px]`} >
            <span className="bg-black p-[4px] rounded-xl">
              <FaTemperatureHigh size={24} color={isHeaterActive ? "#ffffff" : "#c3dafe"} />
            </span>
            <button className="ml-5">
              {isHeaterActive ? "Heater ON" : "Heater OFF"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ButtonGrid;
