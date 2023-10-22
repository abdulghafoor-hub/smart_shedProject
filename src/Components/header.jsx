import { FaHome, FaInfoCircle, FaBell } from "react-icons/fa";
// import { FiSun, FiMoon } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./notification.css";
import firebase from "firebase/app";
import "firebase/database";
import { useTheme } from "../Context/ThemeContext";


function Navbar() {
  const [notify, setNotify] = useState({});
  const notifications = [
    { id: 1, message: "Notification 1" },
    { id: 2, message: "Notification 2" },
    { id: 3, message: "Notification 3" },
    { id: 4, message: "Notification 4" },
    // Add more notifications as needed
  ];

  const getNotification = async () => {
    await firebase
      .database()
      .ref("StartDate")
      .on("value", (snapshot) => {
        const testData = snapshot.val();
        // console.log(testData)
        const start = new Date(testData.Date);
        console.log(start);
        const end = new Date();
        var days = (end - start) / 1000 / 60 / 60 / 24;
        days = Math.floor(
          days -
          (end.getTimezoneOffset() - start.getTimezoneOffset()) / (60 * 24)
        );
        console.log(days);
        // day1
        if (days <= 1) {
          setNotify({
            message:
              "Day 1: Provide chicks with a brooding temperature of around 95°F (35°C) and a humidity level of 60-70%. Chicks need 16-18 hours of light per day and access to clean water at all times.",
          });
        }

        // Day 2 6
        if (days > 1 && days <= 6) {
          setNotify({
            message:
              "Day 2-6 : Maintain the brooding temperature at 90-95°F (32-35°C) and gradually decrease the humidity level by 5% per day. Ensure that chicks have adequate access to water and are receiving enough ligh",
          });
        }

        if (days > 6 && days <= 14) {
          setNotify({
            message:
              "Day 7: Maintain the brooding temperature at 85-90°F (29-32°C) and continue to decrease the humidity level. Monitor chicks for signs of stress, dehydration, or respiratory problems.",
          });
        }
        if (days > 14 && days <= 21) {
          setNotify({
            message:
              "Maintain the brooding temperature at 70-75°F (21-24°C) and the humidity level at 40-50%. Chicks need around 14 hours of light per day and should have access to clean water at all times.",
          });
        }
      });
  };

  useEffect(() => {
    getNotification();
  }, []);
  const [isOpen, setIsOpen] = useState(false); // State to track the dropdown menu visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the dropdown menu visibility
  };

  const {themeMode, lightTheme, darkTheme} = useTheme();
  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked
    if (darkModeStatus) {
        darkTheme()
    } else {
        lightTheme()
    }
}
  return (
    <nav className="flex items-center justify-between bg-[#0e013d] text-white mx-auto mb-3">
      <div className="flex items-center p-2">
        <Link
          to="/main"
          className="text-2xl ml-11  hover:bg-sky-500 p-3 rounded-md"
        >
          <FaHome size={25} />{" "}
        </Link>
        <h1 className="font-bold text-lg ml-4">Smart-Shed</h1>
      </div>
      <ul className="flex items-center mr-10 p-2">
        <li className="mr-5 hover:bg-sky-500 p-3 rounded-md">
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode=== "dark"}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-white">Toggle Theme</span>
        </label>
        </li>
        <li className="mr-5 hover:bg-sky-500 p-3 rounded-md">
          <FaBell
            size={25}
            onClick={toggleDropdown}
            style={{ cursor: "pointer" }}
          />
          <span className="badge badge-light position-absolute top-2 bg-danger">
            1
          </span>
          {isOpen && (
            <div className="notification_bar">
              <ul className="d-flex justify-content-center align-items-center">
                <li className="py-4">{notify.message}</li>
              </ul>
            </div>
          )}
        </li>
        <li className="mr-5 hover:bg-sky-500 p-3 rounded-md">
          <Link to="info">
            <FaInfoCircle size={25} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
