import data from "./data"
import { useState, useEffect } from "react";
import Details from "./Datails";
import ButtonGrid from "./ControlButton";
import firebase from "firebase/app";
import "firebase/database";
import Temperatur from "./Temperatur";
import datajson from "./data";
function Main() {

  const [showDetails, setShowDetails] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const [data, setData] = useState(datajson);

  const fetchData = async () => {
    await firebase
      .database()
      .ref("Temp")
      .on("value", (snapshot) => {
        const testData = snapshot.val();
        setData((pre) => {
          data[0].description = testData.temp + " C";
          return pre;
        });
      });
    await firebase
      .database()
      .ref("Hum")
      .on("value", (snapshot) => {
        const testData = snapshot.val();
        setData((pre) => {
          data[1].description = testData.humidity + " %";
          return pre;
        });
      });
    await firebase
      .database()
      .ref("Carbon Monooxide")
      .on("value", (snapshot) => {
        const testData = snapshot.val();
        setData((pre) => {
          data[5].description = testData.co + " ppm";
          return pre;
        });
      });
    await firebase
      .database()
      .ref("test")
      .on("value", (snapshot) => {
        const testData = snapshot.val();
        setData((pre) => {
          data[3].description = testData.water ;
          return pre;
        });
      });
      await firebase
      .database()
      .ref("test/Light_intensity")
      .on("value", (snapshot) => {
        const testData = snapshot.val();
        setData((pre) => {
          data[2].description = testData + " Lux";
          return pre;
        });
      });
  };
  useEffect(() => {
    fetchData();
  }, [data]);
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
      ) :
        (<div>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 sm:mx-auto lg:mx-10">
            {data?.map((item, index) => (
              <Temperatur
                key={index}
                title={item.title}
                description={item.description}
                handleClick={() => handleClick(item)}
              />))}</div>
          <ButtonGrid />
        </div>
        )}
    </>
  );
}
export default Main;
