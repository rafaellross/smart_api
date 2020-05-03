import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable, {MTableToolbar} from 'material-table'

import * as API from '../../Api';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Chip from '@material-ui/core/Chip';

class DataTable extends React.Component {

    render() {
      return (
        <MaterialTable 
          style={this.props.style}
          title={this.props.title}
          columns={this.props.columns}
          data={this.props.data}                  
          options={{            
            selection: true,
            exportButton: true,
            pageSizeOptions: [30, 60, 120, 240, 1000],
            pageSize: 30,
            
          }}

          components={{
            Toolbar: props => (
              <div>
                <MTableToolbar {...props} />
                <div style={{padding: '0px 10px'}}>
                <Fab color="secondary" aria-label="add">
                  <AddIcon />
                </Fab>                  
                </div>

              </div>
            ),
          }}

          
          

          actions={[
              {
                tooltip: 'Remove All Selected Users',
                icon: 'delete',
                onClick: (evt, data) => alert('You want to delete ' + data.length + ' rows')
              },
              {
                icon: 'print',
                tooltip: 'Print Selecteds',
                onClick: (event, data) => alert("You printed " + data.length)
              }
      
          ]}
        />
      )
    }
  }
export default DataTable
