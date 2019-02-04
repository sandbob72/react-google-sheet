import React, { Component } from 'react';
import './App.css';
import Tabletop from 'tabletop';
import { Table } from 'reactstrap';
import MenuAppBar from './components/MenuAppBar';



class ENT_METHOD_DESC extends Component {
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

      students = data.slice(0,95)   //รับค่าจาก google sheet ตัดค่าที่ต้องการเก็บ
     
    // }

    // if (students.length !== 0)
    
    
    console.log('student',students)
    
    return (
      <div className="App">
      <MenuAppBar />
          <div className = "App">
            <h2>โครงการรับสมัครนักศึกษาใหม่</h2>
            <Table border = "1"  width = '50%' align="center">
              <thead>
                <tr>
                  <th>ชื่อโครงการ</th>
                  <th>จำนวนนักศึกษา</th>
                </tr>
              </thead>
              <tbody>
                {
                  students.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.ENT_METHOD_DESC}</td>
                        <td>{item.Number_ENT}</td>
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

export default ENT_METHOD_DESC;