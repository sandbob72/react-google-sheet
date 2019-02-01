import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabletop from 'tabletop';
import { Table } from 'reactstrap';
import MenuAppBar from './components/MenuAppBar';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1H1-mSpNovSe6qeM6hRi_rNblE1U2-D4MFjpHp3JhwZk',
      callback: googleData => {
        this.setState({
          data: googleData.Sheet1.elements
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
    // let students = []
    // console.log('data', data)
    // console.log('length', data.length)
    // if (data.Sheet1) {
    //   console.log('sheet1', data.Sheet1.elements);

    //   students = data.Sheet1.elements
    // }

    // if (students.length !== 0)
      return (
        <div className="App">

          <MenuAppBar />
          <div>
            <div>
              <Table border="1">
                <thead>
                  <tr>
                    <th> รหัสนักศึกษา</th>
                    <th>วิธี</th>
                    <th>ระดับ</th>

                  </tr>
                </thead>
                <tbody>
                {
                  data.map((item, index) => {
                    return (
                      <tr key={index}>
                       <td>{item.STUDENT_ID}</td>
                        <td>{item.ENT_METHOD_DESC}</td>
                        <td>{item.STUDY_LEVEL_NAME}</td>
                      </tr>


                    )
                  })
                }
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      );
    // else
    //   return (<div>No data</div>)
  }
}

export default App;
