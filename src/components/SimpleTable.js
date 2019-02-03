//import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tabletop from 'tabletop';
//import { Table } from 'reactstrap';
import React, { Component } from 'react';


// const styles = theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing.unit * 3,
//     overflowX: 'auto',
//   },
//   table: {
//     minWidth: 700,
//   },
// });

class SimpleTable extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1pYEnNPGP5vNpTFBMXo0ceg6CaPt7K9pucKRW-1OHn8Y',
      callback: googleData => {
        this.setState({
          data: googleData.Sheet2.elements
        })

        console.log('data1: ', googleData)
        console.log('data1 sheet1: ', googleData.Sheet1)
        console.log('data1 sheet2: ', googleData.Sheet2)
      },
      simpleSheet: false
    })
  }

  render() {
    const { data } = this.state
    let students = []
    console.log('data', data)
    console.log('length', data.length)

    return (
      <div className="App">
        <div className="App">
          <h2>โครงการที่รับนักศึกษาใหม่</h2>
            <h1>PSU Student</h1>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>FAC_NAME_THAI</TableCell>
                    <TableCell>จำนวน</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell >{item.FAC_NAME_THAI}</TableCell>
                        <TableCell>{item.จำนวนนักศึกษา}</TableCell>
                      </TableRow>
                    )
                  })
                  }
                </TableBody>
              </Table>
            </Paper>
          </div>
          {/* <Table border="1" width='50%' align="center">
            <thead>
              <tr>
                <th>คณะ</th>
                <th>จำนวนนักศึกษา</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.ENT_METHOD_DESC}</td>
                      <td>{item.จำนวนคนที่เข้าโครงการ}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table> */}
        </div>
  

    );
    // else
    //   return (<div>No data</div>)
  }
}

export default SimpleTable;

// let id = 0;
// function createData(name, calories, fat, carbs, protein) {
//   id += 1;
//   return { id, name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// const data = [];


// init = () => {
//   Tabletop.init({
//     key: '1H1-mSpNovSe6qeM6hRi_rNblE1U2-D4MFjpHp3JhwZk',
//     callback: SimpleTable,
//     simpleSheet: false
//   })
// }

// function SimpleTable(props) {
//   const { classes } = props;

// function componentDidMount() {
//   Tabletop.init({
//     key: '1H1-mSpNovSe6qeM6hRi_rNblE1U2-D4MFjpHp3JhwZk',
//     callback: googleData =>  googleData.Sheet1.elements,
//     simpleSheet: false
//   })
// }
//   return (
{/* <div className={classes.root}>
  <h1>PSU Student</h1>
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>โครงการ)</TableCell>
          <TableCell>จำนวน</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item, index) => {
          return (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {item.ENT_METHOD_DES}
              </TableCell>
              <TableCell align="right">{item.จำนวนคนที่เข้าโครงการ}</TableCell>
            </TableRow>
          )
        })
        }
      </TableBody>
    </Table>
  </Paper>
</div> */}
//   );
// }


// // SimpleTable.propTypes = {
// //   classes: PropTypes.object.isRequired,
// // };

// export default withStyles(styles)(SimpleTable);