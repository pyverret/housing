import React from 'react';
import TableTag from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createHeader (header) {
    const cells: JSX.Element[] = [];

    for (let i = 0; i < header.length; i++) {
        const tableCell: JSX.Element = <TableCell key={header[i]}>{header[i]}</TableCell>;

        cells.push(tableCell);
    }

    return cells;
};

function createData (content) {
    const cells: JSX.Element[] = [];

    for(let i = 0; i < content.length; i++) {
        const tableCell: JSX.Element = <TableCell key={content[i]}>{content[i]}</TableCell>;

        cells.push(tableCell);
    }

    return cells;
}

export default function Table ({header, data, prefix}): JSX.Element {
    return (
        <TableContainer component={Paper}>
            <TableTag>
                <TableHead>
                    <TableRow>
                        {createHeader(header)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(({title, content}) => (
                        <TableRow key={prefix + title.toString()}>
                            {createData(content)}
                        </TableRow>
                    ))}
                </TableBody>
            </TableTag>
        </TableContainer>
    );
}