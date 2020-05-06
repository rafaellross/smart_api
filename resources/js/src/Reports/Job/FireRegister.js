import React, { Component } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import * as API from '../../Api';
import {Table, TableCell, TableHeader, TableBody, DataTableCell} from '@david.kucsai/react-pdf-table'


const debug = false

// Create styles
const styles = StyleSheet.create({
    page: {
        width: 600,
        padding: '1cm'
    },

});



//Creates style for report's header

const stylesHeader = StyleSheet.create({

    title: { 
        textAlign: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#ff9900',
        fontSize: '12pt',
        fontWeight: 'bold',
        height: 30,
        padding: '8px 0'
    },
    row: {
        flexDirection: 'row'
    },
    rowsTitle: {
        textAlign: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        width: 100,
        fontSize: '12pt'
    },
    rowsDetail: {
        textAlign: 'left',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        width: 535,
        fontSize: '12pt',
        paddingLeft: 5

    },
    logo: {
        textAlign: 'left',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        width: 150,        
        paddingLeft: 5,
        borderBottom: 0,
        borderTop: 0

    }
  });


//Creates style for report's table

const stylesTable = StyleSheet.create({
    header: {
        textAlign: 'center',
        backgroundColor: '#ff9900',
        height: 25,
        fontSize: '10pt',
    },
    cell: {
        textAlign: 'center',
        fontSize: '10pt',
        
    },

    photo: {
        height: '47.85px'
    }
})

const projects = {
      name: '608 Tonkin St Cronulla (Richard Crooks)',
      date: new Date().toLocaleDateString()
}



export class FireRegister extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            project : {
                name: '',
                date: new Date().toLocaleDateString()
          },

          penetrations: [],
          isLoading: true
                       
        }
    }

    componentDidMount() {
        API.getAll('fire_identification', this.props.match.params.id)
        .then((penetrations) => {          
            this.setState(() => ({
                penetrations: penetrations,
                isLoading: false,
                project: {
                    name: penetrations[0].description,
                    date: new Date().toLocaleDateString()
                }    
            }))  
        })           
    
    }
    
    


    render() {
        const project = this.state.project
        if (!this.state.isLoading) {

        
        return (
            <PDFViewer width={'100%'} height={900}>
            <Document>
                <Page size="A4" style={styles.page} debug={debug} orientation="landscape">
                    <View fixed>            
                        <View debug={debug} >
                            <Text style={stylesHeader.title}>PENETRATION INSPECTION</Text>                    
                        </View>
                        <View debug={debug} style={stylesHeader.row}>
                            <Text style={stylesHeader.rowsTitle}>Project Name:</Text>                    
                            <Text style={stylesHeader.rowsDetail}>{project.name}</Text>  
                            <Text style={stylesHeader.logo}></Text>                      
                        </View>
                        <View debug={debug} style={stylesHeader.row}>
                            <Text style={stylesHeader.rowsTitle}>Contact:</Text>                    
                            <Text style={stylesHeader.rowsDetail}>Smart Plumbing Solutions</Text>                    
                            <Text style={stylesHeader.logo}></Text>                      
                        </View>
                        <View debug={debug} style={stylesHeader.row}>
                            <Text style={stylesHeader.rowsTitle}>Phone:</Text>                    
                            <Text style={stylesHeader.rowsDetail}>1300 007 6278</Text>                    
                            <Text style={stylesHeader.logo}></Text>                      
                        </View>
                        <View debug={debug} style={stylesHeader.row}>
                            <Text style={stylesHeader.rowsTitle}>Address:</Text>                    
                            <Text style={stylesHeader.rowsDetail}>1/17 Chester Street, Annandale NSW 2038</Text>                    
                            <Text style={stylesHeader.logo}></Text>                      
                        </View>
                        <View debug={debug} style={stylesHeader.row}>
                            <Text style={stylesHeader.rowsTitle}>Date:</Text>                    
                            <Text style={stylesHeader.rowsDetail}>{project.date}</Text>                    
                            <Text style={[stylesHeader.logo, {borderBottom: 1}]}></Text>                      
                            <Image style={{ position: 'absolute', right: 20, top: -55, width: '100px' }} src="/img/logo.jpg"/>
                        </View>                            
                        <View style={{marginTop: 15}}>
                        <TableHeader >
                                <TableCell style={stylesTable.header} weighting={0.70}>Reference</TableCell>
                                <TableCell style={stylesTable.header}>Drawing</TableCell>
                                <TableCell style={stylesTable.header}>Photo</TableCell>
                                <TableCell style={stylesTable.header} >FRL</TableCell>
                                <TableCell style={stylesTable.header}>Installed By</TableCell>
                                <TableCell style={stylesTable.header}>Installation Date</TableCell>
                                <TableCell style={stylesTable.header}>Manufacturer</TableCell>
                        </TableHeader>        
                        </View>        
                    </View>        
                    <View>
                    <Table data={this.state.penetrations}>
                            <TableBody>
                                <DataTableCell getContent={(r) => r.fire_number} style={stylesTable.cell} weighting={0.70}/>
                                <DataTableCell getContent={(r) => r.drawing} style={stylesTable.cell}/>
                                <DataTableCell getContent={(r) => <Image style={stylesTable.photo} src={r.fire_photo}/>}/>
                                <DataTableCell getContent={(r) => r.fire_resist_level} style={stylesTable.cell}/>
                                <DataTableCell getContent={(r) => r.install_by} style={stylesTable.cell}/>
                                <DataTableCell getContent={(r) => r.formated_date} style={stylesTable.cell}/>
                                <DataTableCell getContent={(r) => r.manufacturer} style={stylesTable.cell}/>                                
                            </TableBody>
                        </Table>                
                    </View>
                </Page>
            </Document>
            </PDFViewer>
        
        )
        } else {
            return (<h1>Loading...</h1>)
        }
    }
}

export default FireRegister