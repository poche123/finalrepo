import "./table3.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useState, useEffect } from 'react';
import React from 'react';
import config from "../../config";

const List = () => {

  const [kpi18, setResultArray] = useState([]);

  useEffect(() => {
      const kpi18 = () => {
       axios.get(config.apiUrl + '/kpi18')
        .then(
          response => setResultArray(response.data))
      }
      kpi18();
    }, []);
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Assigned Organization</TableCell>
            <TableCell className="tableCell">January</TableCell>
            <TableCell className="tableCell">February</TableCell>
            <TableCell className="tableCell">March</TableCell>
            <TableCell className="tableCell">April</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {kpi18.map((row) => (
            <TableRow key={row.assigned_organzization}>
              <TableCell className="tableCell">{row.assigned_organization}</TableCell>
              <TableCell className="tableCell">{row.January_21.toFixed(2)} days </TableCell>
              <TableCell className="tableCell">{row.February_21.toFixed(2)} days </TableCell>
              <TableCell className="tableCell">{row.March_21.toFixed(2)} days </TableCell>
              <TableCell className="tableCell">{row.April_21.toFixed(2)} days </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
