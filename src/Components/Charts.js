import React, { useEffect, useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import firebase from "firebase/app";
import "firebase/database";
import moment from "moment";
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Charts = ({ title, prefix }) => {
  const [data1, setData] = useState(null);
  // var getDaysfromDate = (date) =>{
  //   var end = new Date() 
  //   var days = (end - date) / 1000 / 60 / 60 / 24;
  //   days = days - (end.getTimezoneOffset() - date.getTimezoneOffset()) / (60 * 24);
  //   return days
  // }
  // console.log(getDaysfromDate(new Date('20/5/2023')))
  const [options, setOptions] = useState({
    animationEnabled: true,
    title: {
      text: title,
    },
    axisX: {
      // valueFormatString: "MMM"
    },
    axisY: {
      title,
      prefix,
    },
    data: [
      {
        // yValueFormatString: "$#,###",
        // xValueFormatString: "MMMM",
        type: "spline",
        dataPoints: [],
      },
    ],
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (title === "Temperature") {
      await firebase
        .database()
        .ref("Temp")
        .on("value", (snapshot) => {
          const testData = snapshot.val();
          setOptions((pre) => {
            return {
              ...pre,
              data: [
                {
                  ...pre.data[0],
                  dataPoints: [
                    ...pre.data[0].dataPoints,
                    { y: testData.temp, x: new Date() },
                  ],
                },
              ],
            };
          });
        });

    } else if (title === "Humidity") {
      await firebase
        .database()
        .ref("Hum")
        .on("value", (snapshot) => {
          const testData = snapshot.val();
          setOptions((pre) => {
            return {
              ...pre,
              data: [
                {
                  ...pre.data[0],
                  dataPoints: [
                    ...pre.data[0].dataPoints,
                    { y: testData.humidity, x: new Date() },
                  ],
                },
              ],
            };
          });
        });

    } else if (title === "Carbon Mono oxide gas") {
      await firebase
        .database()
        .ref("Carbon Mono oxide")
        .on("value", (snapshot) => {
          const testData = snapshot.val();
          setOptions((pre) => {
            return {
              ...pre,
              data: [
                {
                  ...pre.data[0],
                  dataPoints: [
                    ...pre.data[0].dataPoints,
                    { y: testData.co, x: new Date() },
                  ],
                },
              ],
            };
          });
        });
    } else if (title === "Water Level") {
      await firebase
        .database()
        .ref("test")
        .on("value", (snapshot) => {
          const testData = snapshot.val();
          setOptions((pre) => {
            return {
              ...pre,
              data: [
                {
                  ...pre.data[0],
                  dataPoints: [
                    ...pre.data[0].dataPoints,
                    { y: testData.water, x: new Date() },
                  ],
                },
              ],
            };
          });
        });
    }
  };
  return <CanvasJSChart options={options}  />;
};

export default Charts;
