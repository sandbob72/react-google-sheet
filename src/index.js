import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router,Route,Link,browserHistory} from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import DataStudentInEachProvince from './DataStudentInEachProvince'
import DataStudent from './DataStudent'
import EntMethodDesc from './EntMethodDesc'
import FacName from './FacName'
import GradYear from './GradYear'
import StillStudent from './StillStudent'
import StudyLevel from './StudyLevel'

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/DataStudentInEachProvince" component={DataStudentInEachProvince}/>
    <Route path="/DataStudent" component={DataStudent}/>
    <Route path="/EntMethodDesc" component={EntMethodDesc}/>
    <Route path="/FacName" component={FacName}/>
    <Route path="/GradYear" component={GradYear}/>
    <Route path="/StillStudent" component={StillStudent}/>
    <Route path="/StudyLevel" component={StudyLevel}/>
 
    </Router>,document.getElementById('root'));
 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
