import { FaWhatsapp, FaFacebook, FaPhone } from "react-icons/fa";

// simpel footer section.
function Aboutus() {
  return (
    <div className=" bg-[#0e013d]  flex justify-center items-center text-white h-32 mt-8">
      <div className="mx-auto">
        <h1 className="text-blod text-xl">Smart shed</h1>
        <p>Control Environment</p>
      </div>
      <div className="mx-auto">
        <h1 className="text-xl">Contact US</h1>
        <p className="inline-block m-2 p-2 hover:bg-green-400 rounded-lg transition duration-300 ease-out transform hover:-translate-y-1 hover:scale-105">
          <FaWhatsapp size={24} />
        </p>
        <p className="inline-block m-2 p-2 hover:bg-blue-600 rounded-md transition duration-300 ease-out transform hover:-translate-y-1 hover:scale-105">
          <FaFacebook size={24} />
        </p>
        <p className="inline-block m-2 p-2 hover:bg-blue-400 rounded-md transition duration-300 ease-out transform hover:-translate-y-1 hover:scale-105">
          <FaPhone size={24} />
        </p>
      </div>
    </div>
  );
}
export default Aboutus;
