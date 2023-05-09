import { FaHome, FaInfoCircle, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom'
 
function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#0e013d] text-white mx-auto">
      <div className="flex items-center p-2">
        <Link to="/" className="text-2xl ml-11  hover:bg-sky-500 p-2 rounded-md"><FaHome size={25} /> </Link>
        <h1 className="font-bold text-lg ml-4">Smart-Shed</h1>
      </div>
      <ul className="flex items-center mr-10 p-2">
      
        <li className="mr-5 hover:bg-sky-500 p-2 rounded-md">
          <FaBell size={25} />
        </li>
        <li className="mr-5 hover:bg-sky-500 p-2 rounded-md">
          <Link to="info" >
            <FaInfoCircle size={25} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;