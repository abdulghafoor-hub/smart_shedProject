import { useState, useEffect } from "react";

 
function Details({ selectedItem, handleGoBack , data1}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        // fetch data for selected item and update state
        // here is some problem
         setData(data1);
    }, [selectedItem]);

    return (
        <div>
            <h2>Details for {data.title}</h2>
            {/* display graph here */}
            <button className="bg-blue-500 text-white font-bold text-center px-2 ml-1 rounded-md hover:bg-blue-700" onClick={handleGoBack}>Go Back</button>
        </div>
    );
}
export default Details;