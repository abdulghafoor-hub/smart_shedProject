import { useState, useEffect } from "react";
import Charts from "./Charts";
import { FaArrowLeft } from "react-icons/fa";

function Details({ selectedItem, handleGoBack }) {
    useEffect(() => {
        // fetch data for selected item and update state
        // here is some problem
    }, [selectedItem]);

    return (
        <div>
            <Charts  title={selectedItem.title} prefix ={selectedItem.prefix?selectedItem.prefix:''}/>
            {/* display graph here */}
            <button className="bg-blue-500 text-white font-bold text-center px-2 m-2 ml-3 p-2 rounded-md hover:bg-blue-700 w-24"
             onClick={handleGoBack}> <span className="flex items-center justify-center"> <FaArrowLeft />&nbsp;&nbsp;Back</span></button>
        </div>
    );
}
export default Details;