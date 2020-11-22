
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import './List.css';
import { Button3 } from './formelement';


const List = () => {

    //const [account, setAccount] = useState();

    const [onload, setOnload] = useState(true);
    const [onload2, setOnload2] = useState();
    const [appointments, setAppointments] = useState();
    const [data, setData] = useState();

    useEffect(() => {
        
        if(onload){
        loadAppointment()
        }

        if(onload2){
           // console.log('onload2 executeds')
            const data = appointments.map((appointment)=>
            <tr>
                <td>{appointment.id}</td>
                <td>{appointment.date}</td>
                <td>{appointment.startTime}</td>
                <td>{appointment.endTime}</td>
                <td className="buttonClass">
                    <Button3 btncolor={true}>Details</Button3>
                    <Button3>Invoice</Button3>
                </td>
            </tr>
            )
            setData(data);
            setOnload2(false)
        }

    })

    function loadAppointment() {
        const userId = localStorage.getItem('userId');
        //console.log('load all appointments related with this account');
        const url = 'http://localhost:8080/api/appointmentlist/' + userId;
        //console.log('url for load appointments:' + url)
        axios.get(url).then(response => {
            //console.log(response.data);
            setAppointments(response.data);
            setOnload(false);
            setOnload2(true)
        }).catch(e => {
            console.log(e)
        })
    }

    function getData(){


    }
    
    

    return (
        <div>
            You can view all your appointment here!
            
            <div className='tableContainer'>
                <Table striped bordered hover className='tableView'>
                    <thead className='tableHead'>
                        <tr className='tableRow'>
                            <th>Appointment ID</th>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th className='buttonSection'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='tablebody'>
                        
                        {data}
                            
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default List
