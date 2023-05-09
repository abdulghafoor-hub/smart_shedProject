import data from "./data"
import Temp from "./temp"
import { useState } from "react";
import Details from "./Datails";
import ButtonGrid from "./ControlButton";
function Main() {

   const [showDetails, setShowDetails] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (index) => {
    setSelectedItem(index);
    setShowDetails(true);
  };

  const handleGoBack = () => {
    setShowDetails(false);
    setSelectedItem(null);
  };

  return (
    <>
      {showDetails ? (
        <Details selectedItem={selectedItem} handleGoBack={handleGoBack} data1={data} />
      ) : (
        <div className="flex flex-wrap ">
          {data.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-3 shadow-lg">
              <Temp 
                title={item.title}
                description={item.description}
                handleClick={() => handleClick(index)}
              />
            </div>  
          ))}
          
        </div>
      )}
      <ButtonGrid/>
    </>
  ); 
}
export default Main;
