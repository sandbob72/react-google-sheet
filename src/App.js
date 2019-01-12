import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabletop from 'tabletop';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1x3oPRI8rmXRAC7YXLU85wDWYH9s0m7EYdfqBQrRZfKw',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }

  render() {
    const { data } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Google sheet
          </p>
          <div>
            {
              data.map(obj => {
                return (
                  <div key={obj.building}>
                    <li>{obj.building} {obj.name}</li>
                  </div>
                )
              })
            }
          </div>
        </header>

      </div>
    );
  }
}

export default App;
