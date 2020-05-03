import React, { Component } from 'react'
import DataTable from '../../Components/DataTable'
import * as API from '../../Api'
import * as Helpers from '../../Helpers'
import IconButton from '@material-ui/core/IconButton';
import Block from '@material-ui/icons/Block';
import Edit from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom'
import Switch from '@material-ui/core/Switch';

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
                    title: 'Active?',                
                    render: rowData => (
                        <Switch
                                checked={rowData.inactive === 1 || rowData.inactive ? false : true}
                                onChange={() => this.enableDisableEmployee(rowData.id)}
                                color="primary"
                                name="checkedB"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />                        
                    )                    
                
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
    
    enableDisableEmployee(id) {
        
        let employees = this.state.data.map((employee) => employee.id !== id ? employee :     
        Object.assign({}, employee, {inactive: !employee.inactive}));        
        this.setState(() => ({
            data: employees            
        }))                
        
        API.update('employees', employees.filter(employee => employee.id === id)[0])
        .then((employee) => {
            console.log(employee)
        })
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
                return '-';
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


