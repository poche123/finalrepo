import "./widget4.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import axios from "axios";
import { useState, useEffect } from 'react';
import React from 'react';
import config from "../../config";

const Widget = ({ type }) => {
  let data;

// KPI2
  
  const [kpi7, setResultArray] = useState([]);

  useEffect(() => {
      const kpi7 =  () => {
         axios.get(config.apiUrl + '/kpi7')
        .then(
          response => setResultArray(response.data))
      }
      kpi7();
    }, []);

// KPI3

const [kpi8, setResultArray2] = useState([]);

useEffect(() => {
    const kpi8 =  () => {
       axios.get(config.apiUrl + '/kpi8')
      .then(
        response => setResultArray2(response.data))
    }
    kpi8();
  }, []);
// KPI4
const [kpi9, setResultArray3] = useState([]);

useEffect(() => {
    const kpi9 =  () => {
       axios.get(config.apiUrl + '/kpi9')
      .then(
        response => setResultArray3(response.data))
    }
    kpi9();
  }, []);


  switch (type) {
    case "user":
      data = {
        title: "TOTAL INCIDENTS RAISED",
        dat : kpi7.Baja,
      };
      break;
    case "order":
      data = {
        title: "TOTAL INCIDENTS CLOSED",
        dat : kpi8.Baja,
        link: "*Include some RAISED in 2019 and 2020",
      };
      break;
    case "earning":
      data = {
        title: "TOTAL INCIDENTS BACKLOG",
        dat : kpi9.Baja,
      };
   
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
           {data.dat}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
      </div>
    </div>
  );
};

export default Widget;
