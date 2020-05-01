import React, { Component } from 'react'
import DataTable from '../../Components/DataTable'
import * as API from '../../Api'
import IconButton from '@material-ui/core/IconButton';
import Block from '@material-ui/icons/Block';
import Edit from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom'

export class Users extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            columns: [
                    
                { title: '#', field: 'id', type: 'numeric'},
                { title: 'User', field: 'username' },
                { title: 'Administrator', field: 'description', render: rowData => rowData.administrator ? 'Yes' : 'No'},
                { title: 'Date Created', field: 'created_at', type: 'date'},
                {
                    field: 'inactive',
                    title: 'Inactivate Job',                
                    render: rowData => <IconButton color="primary" aria-label="delete" component="span" onClick={(e) => console.log(rowData.code)}><Block /></IconButton>
                },
    
                {
                    field: 'edit',
                    title: 'Edit',
                    render: rowData => (
                        <div>
                            <Link to={`/users/edit/${rowData.id}`}><Edit /></Link>                        
                        </div>
                        )
                }            
    
                
            ],        
            Users: [
            ]
        }
    
    }
    
    loadData (table) {
        API.getAll(table)
        .then((data) => {            
            this.setState(() => ({
                data: data,
                loading: false
          }))                    
        })    
    }

    componentDidMount() {
        this.loadData('users')
    }

    render() {
        return (
            <div>
                <DataTable style={{maxWidth: '80%', marginLeft: '10%', padding: 10}} columns={this.state.columns} table={"users"} title="Users" data={this.state.data} isLoading={this.state.loading}/>
            </div>
        )
    }
}

export default Users


