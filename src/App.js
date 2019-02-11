import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabletop from 'tabletop';
import { Table } from 'reactstrap';
import MenuAppBar from './components/MenuAppBar';
import SimpleTable from './components/SimpleTable'
import CustomPaginationActionsTable from './components/CustomPaginationActionsTable'
import DataStudent from './DataStudent'
import DataStudentInEachProvince from './DataStudentInEachProvince'
import EntMethodDesc from './EntMethodDesc'
import StillStudent from './StillStudent'
import FacName from './FacName'
import FAC_NAME_THAI from './FacName';
import StudyLevel from './StudyLevel'
import GradYear from './GradYear'
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';


class App extends Component {

  render() {
    return (
      <div>
        <MenuAppBar />
        <div>
          {/* <DataStudent /> */}
          {/* <DataStudentInEachProvince /> */}
          {/* <EntMethodDesc /> */}
          {/* <StillStudent /> */}
          {/* <FAC_NAME_THAI /> */}
          {/* <StudyLevel /> */}
          {/* <GradYear/> */}
          {/* <CustomPaginationActionsTable /> */}
          {/* <Container>
            <Row sm="10"> */}
            {/* <Card> */}
            <a href="/"><Button outline color="danger">Home</Button></a><br></br>
            <a href="/DataStudentInEachProvince"><Button outline color="danger">จำนวนนักศึกษาแต่ละจังหวัด</Button></a><br></br>
            <a href="/DataStudent"><Button outline color="danger">สถานะนักศึกษา</Button></a><br></br>
            <a href="/EntMethodDesc"><Button outline color="danger">โครงการรับสมัครนักศึกษาใหม่</Button></a><br></br>
            <a href="/FacName"><Button outline color="danger">จำนวนนักศึกษาแต่ละะคณะ</Button></a><br></br>
            <a href="/GradYear"><Button outline color="danger">จำนวนนักศึกษาสำเร็จการศึกษาแต่ละปี</Button></a><br></br>
            <a href="/StillStudent"><Button outline color="danger">จำนวนนักศึกษาที่กำลังศึกษาอยู่</Button></a><br></br>
            <a href="/StudyLevel"><Button outline color="danger">จำนวนนักศึกษาระดับปริญญา</Button></a><br></br>
            {/* </Card> */}
            {/* </Row><br></br>
          </Container> */}

      </div>
        {/* <SimpleTable /> */ }
      </div >
    );
  }
}

export default App;
