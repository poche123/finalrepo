import "./table1.scss";
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

  const [kpi6, setResultArray] = useState([]);

  useEffect(() => {
      const kpi6 = () => {
       axios.get(config.apiUrl + '/kpi6')
        .then(
          response => setResultArray(response.data))
      }
      kpi6();
    }, []);
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Incident Code</TableCell>
            <TableCell className="tableCell">Month</TableCell>
            <TableCell className="tableCell">Incident Type</TableCell>
            <TableCell className="tableCell">Assigned Organinzation</TableCell>
            <TableCell className="tableCell">Resolution Time</TableCell>
            <TableCell className="tableCell">Priority</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {kpi6.map((row) => (
            <TableRow key={row.incidenct_code}>
              <TableCell className="tableCell">{row.incidenct_code}</TableCell>
              <TableCell className="tableCell">{row.month} </TableCell>
              <TableCell className="tableCell">{row.inc_type}</TableCell>
              <TableCell className="tableCell">{row.assigned_organization}</TableCell>
              <TableCell className="tableCell">{row.resolution_time.toFixed(2)} hours</TableCell>
              <TableCell className="tableCell">{row.priority}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
