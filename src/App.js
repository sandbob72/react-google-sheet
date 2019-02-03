import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabletop from 'tabletop';
import { Table } from 'reactstrap';
import MenuAppBar from './components/MenuAppBar';
import SimpleTable from './components/SimpleTable'
import CustomPaginationActionsTable from './components/CustomPaginationActionsTable'
import DataStudent from './DataStudent'

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <MenuAppBar />
        <div>
          <DataStudent />
        </div>
        {/* <SimpleTable /> */}
      </div>
    );
  }
}

export default App;
