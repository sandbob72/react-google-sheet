import React, { Component } from 'react';
import './App.css';
import Tabletop from 'tabletop';
import { Table } from 'reactstrap';
import MenuAppBar from './components/MenuAppBar';



class DataStudent extends Component {
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
    let students2 = []
    let students3 = []
    let students4 = []
    let students5 = []
    let students6 = []
    let students7 = []
    let students8 = []
    let students9 = []
    let students10 = []
    
    // console.log('data', data)
    // console.log('length', data.length)
    // if (data.Sheet1) {
    //   console.log('sheet1', data.Sheet1.elements);

      students = data.slice(0,3)   //รับค่าจาก google sheet ตัดค่าที่ต้องการเก็บ
      students2 = data.slice(5,7)
      students3 = data.slice(10,12)
      students4 = data.slice(15,17)
      students5 = data.slice(20,22)
      students6 = data.slice(25,27)
      students7 = data.slice(31,33)
      students8 = data.slice(36,38)
      students9 = data.slice(41,43)
      students10 = data.slice(46,48)
     
    // }

    // if (students.length !== 0)
    
    
    console.log('student',students)
    console.log('student2',students2)
    return (
      <div className="App">
      <MenuAppBar />
          <div className = "App">
            <h2>สถานะนักศึกษา</h2>
            <Table border = "1"  width = '50%' align="center">
              <thead>
                <tr>
                  <th>Gender</th>
                  <th>กำลังศึกษา</th>
                </tr>
              </thead>
              <tbody>
                {
                  students.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.Gender}</td>
                        <td>{item.Studying}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>

            <Table border = "1"  width = '50%' align="center">
              <thead>
                <tr>
                  <th>Gender</th>
                  <th>สละสิทธิ์</th>
                </tr>
              </thead>
              <tbody>
                {
                  students2.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.Gender}</td>
                        <td>{item.Studying}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>

            <Table border = "1"  width = '50%' align="center">
              <thead>
                <tr>
                  <th>Gender</th>
                  <th>ลาออก</th>
                </tr>
              </thead>
              <tbody>
                {
                  students3.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.Gender}</td>
                        <td>{item.Studying}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>

            <Table border = "1"  width = '50%' align="center">
              <thead>
                <tr>
                  <th>Gender</th>
                  <th>สำเร็จการศึกษา</th>
                </tr>
              </thead>
              <tbody>
                {
                  students4.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.Gender}</td>
                        <td>{item.Studying}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>

            <Table border = "1"  width = '50%' align="center">
              <thead>
                <tr>
                  <th>Gender</th>
                  <th>ไม่มาลงทะเบียน</th>
                </tr>
              </thead>
              <tbody>
                {
                  students5.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.Gender}</td>
                        <td>{item.Studying}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>

            <Table border = "1"  width = '50%' align="center">
              <thead>
                <tr>
                  <th>Gender</th>
                  <th>ไม่มารายงานตัว</th>
                </tr>
              </thead>
              <tbody>
                {
                  students6.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.Gender}</td>
                        <td>{item.Studying}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>

            <Table border = "1"  width = '50%' align="center">
              <thead>
                <tr>
                  <th>Gender</th>
                  <th>ตกออก</th>
                </tr>
              </thead>
              <tbody>
                {
                  students7.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.Gender}</td>
                        <td>{item.Studying}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>

            <Table border = "1"  width = '50%' align="center">
              <thead>
                <tr>
                  <th>Gender</th>
                  <th>สิ้นสุดสภาพเป็นผู้ร่วมเรียน</th>
                </tr>
              </thead>
              <tbody>
                {
                  students8.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.Gender}</td>
                        <td>{item.Studying}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>

            <Table border = "1"  width = '50%' align="center">
              <thead>
                <tr>
                  <th>Gender</th>
                  <th>โอนย้ายมหาวิทยาลัย</th>
                </tr>
              </thead>
              <tbody>
                {
                  students9.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.Gender}</td>
                        <td>{item.Studying}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>

            <Table border = "1"  width = '50%' align="center">
              <thead>
                <tr>
                  <th>Gender</th>
                  <th>โอนย้ายคณะ</th>
                </tr>
              </thead>
              <tbody>
                {
                  students10.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.Gender}</td>
                        <td>{item.Studying}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>



          </div>
          
      </div>
    );
    // else
    //   return (<div>No data</div>)
  }
}

export default DataStudent;
