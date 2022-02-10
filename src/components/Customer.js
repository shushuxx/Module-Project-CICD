import React from "react";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function Customer({customer}) {
  return (
    <TableRow>  
      <TableCell><p>{customer.id}</p></TableCell>
      <TableCell><img src={customer.image} alt="profile image"/></TableCell>
      <TableCell><h2>{customer.name}</h2></TableCell>
      <TableCell><p>{customer.birthday}</p></TableCell>
      <TableCell><p>{customer.gender}</p></TableCell>
      <TableCell><p>{customer.job}</p></TableCell>
      <TableCell><p>{customer.email}</p></TableCell>
    </TableRow>
  );
}

export default Customer;
