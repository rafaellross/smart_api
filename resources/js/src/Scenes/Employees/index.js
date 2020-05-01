import React, { Component } from 'react'
import DataTable from '../../Components/DataTable'
import * as API from '../../Api'
import * as Helpers from '../../Helpers'
import IconButton from '@material-ui/core/IconButton';
import Block from '@material-ui/icons/Block';
import Edit from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom'

export class Employees extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            columns: [
                    
                { title: '#', field: 'id', width: 5},
                { title: 'Name', field: 'name', render: rowData => <span>{Helpers.capitaliseString(rowData.name.toLowerCase())}</span> },
                { title: 'D.O.B', field: 'dob', type: 'date' },
                { title: 'Phone', field: 'phone' },
                { title: 'RDO', field: 'rdo_bal' },
                { title: 'PLD', field: 'pld' },            
                { title: 'Annual Leave Balance', field: 'anl' },                            
                { 
                    title: 'Role', 
                    field: 'location',
                    render: rowData => <span>{this.getRole(rowData.location)}</span>
                    
                },    
                { title: 'Apprentice Year', field: 'apprentice_year' },                                                            
                { title: 'Apprentice Rollover', field: 'anniversary_dt', type: 'date' },                                                                            
                {
                    field: 'inactive',
                    title: 'Inactivate Employee',   
                    width: 10,             
                    render: rowData => <IconButton color="primary" aria-label="delete" component="span" onClick={() => this.update(rowData)}><Block /></IconButton>
                },

    
                {
                    field: 'edit',
                    title: 'Edit',
                    render: rowData => (
                        <div>
                            <Link to={`/employees/edit/${rowData.id}`}><Edit /></Link>                        
                        </div>
                        )
                }            
    
                
            ],        
            employees: [
            ]
        }
    }
    


    getRole(role){
        switch (role) {
            case 'P':                
                return 'Plumber';                                
            case 'O':
                return 'Office'

            case 'A':
                return 'Apprentice';
            case 'L':
                return 'Labourer';                
            default:
                return 'Default' + role;
        }

    }

    loadData(table) {
        API.getAll(table)
        .then((data) => {            
            this.setState(() => ({
                data: data.filter(employee => !employee.inactive),
                loading: false
          }))                    
        })    
    }

    update(model){
        API.update('employees', model)
        .then((data) => {            
            console.log(data)
        })    

    }

    componentDidMount(){
        this.loadData('employees')
    }

    render() {
        return (
            <div>
                <DataTable style={{maxWidth: '90%', marginLeft: '5%'}} columns={this.state.columns} table={"employees"} title="Employees" data={this.state.data} isLoading={this.state.loading}/>
            </div>
        )
    }
}

export default Employees


