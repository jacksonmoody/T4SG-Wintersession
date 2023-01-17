import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react'

function ResultsTable(props) {
    return (
        <TableContainer component={Paper} sx = {{width: 9/10}}>
            <Table>
                <TableHead>
                    <TableRow key = "header">
                    {props.header.map((header) => (
                        <TableCell>{header}</TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                        {props.body.map((row) => (
                            <TableRow key = {row[0]}>
                                {row.map((cell) => (
                                    <TableCell>{cell}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ResultsTable;