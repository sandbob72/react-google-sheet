import React, { Component } from 'react';
import './App.css';
import Tabletop from 'tabletop';
import { Table } from 'reactstrap';
import MenuAppBar from './components/MenuAppBar';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';



class DataStudentInEachProvince extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1q66ZlEv6Rj8_BT1h7Dw78kTL-ietR6deNufgflj8n3c',
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


    // console.log('data', data)
    // console.log('length', data.length)
    // if (data.Sheet1) {
    //   console.log('sheet1', data.Sheet1.elements);

    students = data.slice(0, 75)   //รับค่าจาก google sheet ตัดค่าที่ต้องการเก็บ

    // }

    // if (students.length !== 0)


    console.log('student', students)

    return (
      <div className="App">
        <MenuAppBar />
        <div className="App">
          <h2>นักศึกษาที่อยู่แต่ละจังหวัด</h2>
          <Card>
            <Table border="1" width='50%' align="center">
              <thead>
                <tr>
                  <th>ชื่อจังหวัด</th>
                  <th>จำนวนนักศึกษา</th>
                </tr>
              </thead>
              <tbody>
                {
                  students.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.Birth_Province}</td>
                        <td>{item.Number_Student_Province}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </Card>
        </div>

      </div>
    );
    // else
    //   return (<div>No data</div>)
  }
}

export default DataStudentInEachProvince;
