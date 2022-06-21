import React, { Component } from 'react'
import "./Table.css"

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            candidates: [
                {  name: 'Aaron Blackford', phone: 6743247098,email:'aaronblackford@gmail.com', date: '02-10-2021', aadhar: '9084 2893 1234', pan: 'DHGRO7621',status: '● Interviewed ' },
                {  name: 'Adam C', phone: 6743247098,email:'adamc@gmail.com', date: '02-10-2021', aadhar: '9084 2893 1234', pan: 'DHGRO7621',status: '● Offer Accepted ' },
                {  name: 'Sarah Thomas', phone: 6743247098,email:'sarahthomas@gmail.com', date: '02-10-2021', aadhar: '9084 2893 1234', pan: 'DHGRO7621',status: '● Offer rolled ' },
                {  name: 'Ashley B',phone: 6743247098,email:'ashleyb@gmail.com', date: '02-10-2021', aadhar: '9084 2893 1234', pan: 'DHGRO7621',status: ' ● Absconded '},
                {  name: 'Jack Harlow',phone: 6743247098,email:'jackharlow@gmail.com', date: '02-10-2021', aadhar: '9084 2893 1234', pan: 'DHGRO7621',status: '● Absconded '}
            ]
        }
    }
    renderTableHeader() {
        let header = Object.keys(this.state.candidates[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toLocaleUpperCase()}</th>
        })
    }
    renderTableData() {
        return this.state.candidates.map((candidate, index) => {
            const { id, name, phone, email,date,aadhar,pan,status } = candidate
            return (
                <tr key={id}>
                    <td>{name}</td>
                    <td>{phone}</td>
                    <td>{email}</td>
                    <td>{date}</td>
                    <td>{aadhar}</td>
                    <td>{pan}</td>
                    <td>{status}</td>
                    <td><button style={{backgroundColor:'#3f5581', color: 'white', borderRadius: '5px', borderColor: '#3f5581'}} >Track</button></td>
                    <td><button style={{backgroundColor:'whitesmoke',color:'#909090' ,borderRadius: '5px', borderColor: 'whitesmoke'}}>Edit</button></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <table id='candidates'>
                    <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Table;