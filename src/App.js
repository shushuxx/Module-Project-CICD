import "./App.css";
import React from "react";
import Customer from "./components/Customer";
import { Component } from "react/cjs/react.production.min";
import Paper from '@mui/material/Paper';
import { Table } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableBody } from "@mui/material";
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";
import { withStyles } from '@mui/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

function App() {
  // render() {
  const customers = [
    {
    'id': 1,
    'image': "https://placeimg.com/64/64/1",
    'name': "Peter Parker",
    'birthday': 20020810,
    'gender': "Male",
    'job': "nice neigborhood",
    'email': "spider@marvel.com",
  },
  {
    'id': 2,
    'image': "https://placeimg.com/64/64/2",
    'name': "Zendaya Coleman",
    'birthday': 19960901,
    'gender': "Female",
    'job': "Acter",
    'email': "girl@crush.com",
  },
  {
    'id': 3,
    'image': "https://placeimg.com/64/64/3",
    'name': "Timothee Chalamet",
    'birthday': 19951227,
    'gender': "Male",
    'job': "Influencer",
    'email': "dune@child.com",
  }
]
  // return <Customer customer={customers.map} />;
  class App extends Component {
    renden() {
      const { classes } = this.props;
      return (
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableBody>
              <TableHead>
                <TableRow>
                  <TableCell>번호</TableCell>
                  <TableCell>이미지</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>생년월일</TableCell>
                  <TableCell>성별</TableCell>
                  <TableCell>직업</TableCell>
                  <TableCell>이메일</TableCell>
                  </TableRow>
              </TableHead>
          {
            customers.map(c => {
              return (
                <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
                email={c.email}
                />
                );
            })
          }
          </TableBody>
          </Table>
        </Paper>
      )
    }
  }
}

export default withStyles(styles)(App);
