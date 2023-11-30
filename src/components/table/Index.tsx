import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  tangua:string,
  itauna: string,
  patos: string
) {
  return { name, tangua, itauna, patos};
}

const rows = [
  createData('Ácido Graxo Livre em Ácido Oleico (máx.)', '5,0%', '5,0%','5,0%', ),
  createData('Extrato Etéreo (mín.)', '98,0%', '98,0%', '98,0%'),
  createData('Índice de Acidez em Ácido Oleico (máx.)', '10,0%', '10,0%', '10,0%'),
  createData('Sólidos Insolúveis (máx.)', '1,0%', '1,0%', '1,0%'),
  createData('Umidade (máx.)', '1,0%', '1,0%','1,0%', ),
  createData('EPA + DHA (mín.)', '6,0%', '6,0%', '6,0%'),
  
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> <strong>Parâmetros</strong></TableCell>
            <TableCell align="right"> <strong>Itaúna</strong> </TableCell>
            <TableCell align="right"> <strong> Patos de Minas</strong> </TableCell>
            <TableCell align="right"> <strong> Tanguá</strong> </TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.itauna}</TableCell>
              <TableCell align="right">{row.patos}</TableCell>
              <TableCell align="right">{row.tangua}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}