import "./chartright2.scss";
import axios from "axios";
import { useState, useEffect } from 'react';
import React from 'react';
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import config from "../../config";


const Chart = ({ aspect, title }) => {

  const [kpi14, setResultArray] = useState([]);

  useEffect(() => {
      const kpi14 = () => {
       axios.get(config.apiUrl + '/kpi14')
        .then(
          response => setResultArray(response.data))
      }
      kpi14();
    }, []);

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
       <BarChart
          width={500}
          height={300}
          data={kpi14}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis  />
          <Tooltip />
          
          <Bar dataKey="avgresolution" fill="green" />
          
          
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
