import "./widget.scss";
import axios from "axios";
import { useState, useEffect } from 'react';
import React from 'react';
import config from "../../config";

const Widget = ({ type }) => {
  let data;

// KPI2
  
  const [kpi2, setResultArray] = useState([]);

  useEffect(() => {
      const kpi1 =  () => {
         axios.get(config.apiUrl + '/kpi2')
        .then(
          response => setResultArray(response.data))
      }
      kpi1();
    }, []);

// KPI3

const [kpi3, setResultArray2] = useState([]);

useEffect(() => {
    const kpi3 =  () => {
       axios.get('/kpi3')
      .then(
        response => setResultArray2(response.data))
    }
    kpi3();
  }, []);
// KPI4
const [kpi4, setResultArray3] = useState([]);

useEffect(() => {
    const kpi4 =  () => {
       axios.get('/kpi4')
      .then(
        response => setResultArray3(response.data))
    }
    kpi4();
  }, []);


  switch (type) {
    case "user":
      data = {
        title: "TOTAL INCIDENTS RAISED",
        dat : kpi2.count_column,
      };
      break;
    case "order":
      data = {
        title: "TOTAL INCIDENTS CLOSED",
        dat : kpi3.count_closed,
        link: "*Include some RAISED in 2019 and 2020",
      };
      break;
    case "earning":
      data = {
        title: "TOTAL INCIDENTS BACKLOG",
        dat : kpi4.count_backlog,
      };
      break
    default:
      ;
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
        <div className="percentage positive">
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
