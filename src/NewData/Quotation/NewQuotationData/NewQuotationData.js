import React from 'react'
import "./NewQuotationData.css";
import NewSurvey from '../../Images/NewSurvey.png';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export default function NewQuotationList() {

    const navigate = useNavigate()

    function movetobackQuotation() {
        navigate("/Quotation")
    }


    return (
        <div className='ContainerSurvey'>
            <div className='ContainerSurveyMain'>
                <h1 class="SurveyTitle">Quotation List</h1>
                <p class="SurveyRight">Total Quotation List: 0</p>
            </div>
            <p class="SurveyPara">All the changes made in the survey list linked to the quotation will also be changed in the quotation - (कोटेशन से जुड़ी सर्वे लिस्ट में किये गए सभी परिवर्तन कोटेशन में भी बदल जाएंगे)</p>
            <div className='ContainerSurveySub'>
                <p className='imageSurvey'><img src={NewSurvey} alt="" width={250}></img></p>
                <p className='SurveyCenter'>Add New Data</p>
                <p className='SurveyCenterM'>Generate Your First Document & Start Managing Your Business Digitally
                </p>
                <hr />
                <button onClick={movetobackQuotation} className='SurveyButton'>Add New Quotation List</button>
            </div>
            <div>
                < TableContainer component={Paper} >
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="left">#</StyledTableCell>
                                <StyledTableCell align="left">Quotation Details</StyledTableCell>
                                <StyledTableCell align="left">Customer Details</StyledTableCell>
                                <StyledTableCell align="left">Location</StyledTableCell>
                                <StyledTableCell align="left">Freight</StyledTableCell>
                                <StyledTableCell align="left">&#160;</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{row.calories}</StyledTableCell>
                                    <StyledTableCell align="left">{row.fat}</StyledTableCell>
                                    <StyledTableCell align="left">{row.carbs}</StyledTableCell>
                                    <StyledTableCell align="left">{row.protein}</StyledTableCell>
                                    <StyledTableCell align="left">Save PDF</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer >
            </div>
        </div >
    )
}

