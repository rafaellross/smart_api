import React, { Component } from 'react'
import Employee from '../../Components/Employee'
import { withRouter } from "react-router-dom";
import * as API from '../../Api'

export class EditEmployee extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             employee: {},
             isLoading: true
        }
    }
    
    componentDidMount() {
        let id = this.props.match.params.id
        API.get('employees', id)
        .then((employee) => {            
            this.setState(() => ({
                employee: employee,  
                isLoading: false              
          }))                    
        })    

    }
    
    render() {
        return (
            <div>                
                <span>{this.state.id}</span>
                <Employee action="Edit Employee" employee={this.state.employee} isLoading={this.state.isLoading}/>                
            </div>
        )
    }
}

export default withRouter(EditEmployee)
