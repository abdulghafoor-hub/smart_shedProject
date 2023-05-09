import { FaFan, FaLightbulb } from "react-icons/fa";

//this buttons is used for to control the environment in the farm the button click data will be sent to firebase 
// in boolon and this action will be take on that.
// the design of the buttons needs improvment 
function ButtonGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-2 py-4 font-bold">
      {/* Button for Fan */}
      <div className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded text-center ">
        <button >
          <span className="flex">Fan: &nbsp; <FaFan color="white" size={24} /></span>
          <span>ON/ Off</span>
        </button>
      </div>

      {/* Button for Spray */}
      <div className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded text-center">
        <button> spray: on/off</button>
      </div>


      {/* Button for Light */}
      <div className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded text-center">
        <button> <span className="flex">Light: &nbsp;  <FaLightbulb /></span> </button>
      </div>

      {/* Button for Water Level */}
      <div className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded text-center">
        <button> <span className="flex">Fan: &nbsp; <FaFan color="white" size={24} /></span>
          <span>ON/ Off</span>
        </button>
      </div>
    </div>
  );
}

export default ButtonGrid;