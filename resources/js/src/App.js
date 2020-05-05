import React, { Component } from 'react'

import { Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import  Home from './Scenes/Home'
import Jobs from './Scenes/Jobs';
import Users from './Scenes/Users';
import Employees from './Scenes/Employees';
import EditEmployee from './Scenes/Employees/edit';
import AddEmployee from './Scenes/Employees/add';

import Pdf from './Reports/PDF';
import ListEmployees from './Reports/Employees/list';




class App extends Component {
  
    componentDidMount() {
        //console.log(API.get(32));
      }
    

    render() {
    
        
        return (
          <div className="App">
            <NavBar/>            
            <Route exact path="/" component={Home}/>      
            <Route exact path="/jobs" component={Jobs}/>    
            <Route exact path="/users" component={Users}/>    
            <Route exact path="/employees" component={Employees}/>    
            <Route exact path="/employees/add" component={AddEmployee}/>   
            <Route exact path="/employees/:id" component={EditEmployee}/>   

            <Route exact path="/reports/employees" component={ListEmployees}/>   

            <Route exact path="/pdf" component={Pdf}/>                     
          </div>
        );
      }
}


export default App;
