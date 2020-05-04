import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import 'typeface-roboto';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from "react-router-dom";


const styles = theme => ({
classes: {
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      display: 'flex',
      flexWrap: 'wrap'     

    },
  },
  paper : {
      width: '40%',
      marginLeft: '30%',
      padding: 10
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}
});



class Employee extends Component {
    render () {
    
    const employee = this.props.employee;
    const props = this.props;
    
    return (
        <div>
        <Typography variant="h3" component="h2" className={this.props.classes.paper} style={{textAlign: 'center'}}>
            {props.action}
        </Typography>

        {!props.isLoading && (
            <Paper elevation={3} className={this.props.classes.paper}>
                <form className={this.props.classes.root} noValidate autoComplete="off">
                <div>
                    <TextField required id="standard-required" label="Name" value={employee.name} placeholder="Placeholder" variant="outlined" InputLabelProps={{ shrink: true}}/>
                    
                    <TextField id="dob" label="D.O.B" type="date" variant="outlined" value={employee.dob} InputLabelProps={{ shrink: true}}/>

                    <TextField id="phone" label="Phone" defaultValue="" variant="outlined" value={employee.phone} InputLabelProps={{ shrink: true}}/>
                    
                    <TextField id="bonus" label="Bonus" name="bonus" type="number" variant="outlined" value={employee.bonus} InputLabelProps={{ shrink: true}}/>

                    <TextField id="bonus_type" select label="Bonus Type" value={employee.bonus_type} 
                    onChange={console.log('')} variant="outlined">          
                        <option key={'N'} value={'N'}>None</option>
                        <option key={'F'} value={'F'}>Foremen</option>
                        <option key={'L'} value={'L'}>Leading Hand</option>          
                    </TextField>

                    <TextField id="rdo_bal" label="RDO Balance" name="rdo_bal" type="number" variant="outlined" value={employee.rdo_bal} InputLabelProps={{ shrink: true}}/>
                    <TextField id="pld_bal" label="PLD Balance" name="pld_bal" type="number" variant="outlined" value={employee.pld} InputLabelProps={{ shrink: true}}/>
                    <TextField id="anl_bal" label="Annual Leave Balance" name="anl_bal" type="number" variant="outlined" value={employee.anl} InputLabelProps={{ shrink: true}}/>
                    <TextField id="anniversary_dt" label="Apprentice Anniversary Date" type="date" variant="outlined" value={employee.anniversary_dt} InputLabelProps={{ shrink: true}}/>
                    <TextField id="apprentice_year" select label="Apprentice Year" value={employee.apprentice_year}
                    onChange={console.log('')} variant="outlined">          
                        <option key={''} value={''}>-</option>            
                        <option key={'1'} value={'1'}>1st</option>          
                        <option key={'2'} value={'2'}>2nd</option>          
                        <option key={'3'} value={'3'}>3rd</option>          
                        <option key={'4'} value={'4'}>4rd</option>          
                    </TextField>
                    <TextField id="role" select label="Role" value={employee.location}
                    onChange={console.log('')} variant="outlined">          
                        <option key={'P'} value={'P'}>Plumber</option>
                        <option key={'A'} value={'A'}>Apprentice</option>
                        <option key={'O'} value={'O'}>Office</option>          
                        <option key={'L'} value={'L'}>Labourer</option>          
                        
                    </TextField>
                    <TextField id="company" select label="Company" value={employee.company}
                    onChange={console.log('')} variant="outlined">          
                        <option key={'C'} value={'C'}>Construction</option>
                        <option key={'M'} value={'M'}>Maintenance</option>            
                    </TextField>
                    <TextField id="inactive" select label="Inactive?" value={employee.inactive}
                    onChange={console.log('')} variant="outlined">          
                        <option key={'1'} value={'1'}>Yes</option>
                        <option key={'0'} value={'0'}>No</option>            
                    </TextField>
                    <div>
                        <ButtonGroup aria-label="outlined primary button group" style={{width: '80%', marginLeft: '10%'}}>
                            <Button variant="contained" color="secondary" style={{width: '50%', padding: '10px'}} component={Link} to={'/employees'}>Cancel</Button>                    
                            <Button variant="contained" color="primary" style={{width: '50%', padding: 10}}>Save</Button>
                        </ButtonGroup>
                    </div>
                    </div>
                </form>
            </Paper> 
            
        )}
    
            
        </div>
    );
    }
}

export default withStyles(styles)(Employee);