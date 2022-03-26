import "./chartright4.scss";
import axios from "axios";
import { useState, useEffect } from 'react';
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import config from "../../config";




const Chart = ({ aspect, title }) => {

  const [kpi20, setResultArray] = useState([]);

  useEffect(() => {
      const kpi20 = () => {
       axios.get(config.apiUrl + '/kpi20')
        .then(
          response => setResultArray(response.data))
      }
      kpi20();
    }, []);

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
       <BarChart
          width={500}
          height={300}
          data={kpi20}
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
