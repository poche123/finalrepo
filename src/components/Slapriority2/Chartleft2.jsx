import "./chartleft2.scss";
import axios from "axios";
import { useState, useEffect } from 'react';
import React from 'react';
import {AreaChart, Area,  XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';
import config from "../../config";

const Chart = ({ aspect, title }) => {

  const [kpi13, setResultArray] = useState([]);

  useEffect(() => {
      const kpi13 = () => {
       axios.get(config.apiUrl + '/kpi13')
        .then(
          response => setResultArray(response.data))
      }
      kpi13();
    }, []);

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart width={730} height={250} data={kpi13}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="YES" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          <Area type="monotone" dataKey="NO" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
