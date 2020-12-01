import axios from 'axios'
import React, { useState, useEffect } from 'react'

import {
    Container2,
    
    FormWrap,
    FormContent,
    Form2,
    FormH1,
    FormButton,
    FormLabel2,
    FormRow,
    FormSelect,
    CalendarWrap
} from './formelement';

import {

    KeyboardDatePicker,
    MuiPickersUtilsProvider,
  } from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';
import formatISO from 'date-fns/formatISO';
import { DateTime } from 'luxon';

import { useHistory } from 'react-router-dom';






const Appointment = () => {

    const [timeNow,setTimeNow] = useState(DateTime.local())
    const [selectedDate, setSelectedDate] = useState();
    const [calendarDate, setCalendarDate] = useState();
    
    const [onLoad, setOnLoad] = useState(true);
    const [onLoad2, setOnLoad2] = useState(false);
    const [onLoad3, setOnLoad3] = useState(false);
    const [onLoad4, setOnLoad4] = useState(false);


    const [EmployeeList, setEmployeeList] = useState();
    const [EmpJsx, setEmpJsx] = useState();
    
    const [scheduleJSON, setScheduleJSON] = useState();
    const [timeJsx,setTimeJsx] = useState();

    const [selectedTime, setSelectedTime] = useState();

    const [empId, setEmpId] = useState();
    const [userId, setUserId] = useState()

    const history = useHistory();

    useEffect(() => {
        
        if(selectedDate){
           // console.log('useeffect selected date called:')
           // console.log(selectedDate)
            //var String = selectedDate.split(" ", 3)
        }

        if(onLoad)
        {
            setUserId(localStorage.getItem('userId'))
            loadEmployees()           
        }

        if(onLoad2){

            if(EmployeeList){
                
               // console.log(EmployeeList);
                const jsx = (

                    EmployeeList.map((item,index) => 
                        
                        <>
                        <option value={index}>{item.firstName} {item.lastName}</option>
                        </>

                        )
                )
                setEmpJsx(jsx);
                setOnLoad2(false);
            }
            //setOnLoad2(false);
        }

        if(onLoad3){
            if(scheduleJSON){
                //console.log('gets schedules and start next steps');
                //console.log(scheduleJSON);
                createScheduleJSX(scheduleJSON);
                setOnLoad3(false);
            }
        }

        if(onLoad4){
            //console.log(timeJsx);
        }

        
        

    })

    function createScheduleJSX(){
        //console.log("create schedule called");
        
        const schedule = scheduleJSON.schedule;

        const startTime = schedule.startTime;     
        const endTime = schedule.endTime;

        var startHour = startTime.substring(0,2);
        var endHour = endTime.substring(0,2);

        const isAllDay = scheduleJSON.isAllDay;
        const takenTime = scheduleJSON.takenTime;

        //console.log(scheduleJSON);
        //console.log(takenTime);


        //console.log('is All Day ? : ' + isAllDay);
        //console.log(startTime,endTime);
        //console.log(startHour, endHour);

        var availSlots = [];
        //console.log('before true and false: ' + availSlots);
        if(isAllDay){
            //console.log("true runs")
            for(var i = startHour; i<endHour; i++){
               //  console.log(i);
                availSlots.push(i+":00:00");
            }
            //console.log(availSlots);

            const Jsx = (
                availSlots.map(item=>
                    <>
                    <option value={item}>{item}</option>
                    </>
                    )
            )
            
            setTimeJsx(Jsx);
            setOnLoad4(true);
            
        }else{
            //console.log("false runs")
            const takenList = [];
            for(var i = 0; i<takenTime.length; i++){
                takenList.push(takenTime[i].startTime.substring(0,2));
            }
            
            //console.log(takenList);

            takenList.sort();
            //console.log(takenList);
            //console.log("size of takenList: " + takenList.length);
            //console.log(takenList[0]);
            var x = startHour;
            var i = 0;
            for(i; i<takenList.length;i++){
                
                console.log("Comparing to this -> " + takenList[i]);
                //console.log(takenList.length);
                //console.log(i);

                for(x; x<endHour; x++){
                    
                    //console.log(takenList[i]);
                    if(x!=takenList[i]){
                        //console.log(x+' - add to availslotlist!')
                        //console.log(x+" " + test1);
                        availSlots.push(x+":00:00");
                        //console.log("add one into list: " + availSlots);
                        
                    }else{
                        i++;
                        //console.log("did not add anything: " + availSlots);
                    }

                }
            }
            //console.log(availSlots);


            /*
            for(startHour; startHour<endHour; startHour++){
                
                for(var j=0; j<takenList.length; j++){
                    
                    console.log(j);

                    if(startHour==takenList[j]){
                        console.log(startHour+" = ?" + takenList[j])
                        console.log("They are same");
                        break;
                    }else{
                        console.log("different!")
                        console.log(startHour)
                        availSlots.push(startHour+":00:00");
                        j++;
                    }


                }

                //console.log(startHour)
                //availSlots.push(startHour+":00:00");
                   
            }
            */


            const Jsx = (
                availSlots.map(item=>
                    <>
                    <option value={item}>{item}</option>
                    </>

                    )

            )
            
            setTimeJsx(Jsx);
            setOnLoad4(true);

        }
      


    }

    function loadEmployees(){
        //console.log('load Employeee runs');
        
        const url = 'http://localhost:8080/api/employees'
        axios.get(url).then(
            response =>{
              //  console.log(response.data);
                setEmployeeList(response.data);
                
            }).catch(e=>{
                console.log(e)
            })
        
        setOnLoad2(true);
        setOnLoad(false);

    }


    const handleDateChange = (date) => {
        
        const dateString = formatISO(date);
        const resDate = dateString.substring(0,10);
        
        //console.log("This is after formatISO: " + dateString);
        //console.log("This is after formatISO sub string: " + resDate);


        setSelectedDate(resDate);
        setCalendarDate(date);
        

    }

    function handleSelection(e){
        //console.log(EmployeeList);
        //console.log('index is: ' + e)
        //console.log("Selected Date is: " + selectedDate)

        if(!selectedDate){
            alert('Please select a date first!');
        }

        const obj = {
            "date":selectedDate,
            "account_id":EmployeeList[e].account_id,
            "employee_id":EmployeeList[e].id
        }

        setEmpId(EmployeeList[e].account_id);

        //console.log(obj);

        const url = 'http://localhost:8080/api/findopenschedule';
        
        axios.post(url,obj).then(
            res => {
                //console.log(res.data)
                setScheduleJSON(res.data);
                setOnLoad3(true);
            }
        ).catch(
            error =>{
                console.log(error)
                
        })

    }

    function handleSubmit(event){
        event.preventDefault()
        //console.log("handleSubmit!")
        //console.log(selectedTime);
        var endTime = (selectedTime.substring(0,2))
        endTime++;
        endTime = endTime + ":00:00";
        //console.log(endTime);
        
        //console.log(selectedDate);
        const obj = {
            "startTime": selectedTime,
            "endTime": endTime,
            "date": selectedDate,
            "accountProvider": empId,
            "accountReceiver":  userId
        }
        //console.log('This is what sent out: ' + obj);
        
        const url = 'http://localhost:8080/api/createappointment'
        axios.post(url,obj)
        .then(res => {
                //console.log(res.data);
            }
        ).catch(err=>{
            console.log(err)
        })
        
        history.push('/profile')
    }

    const calenderGroup = (


        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker 
        onChange={handleDateChange}
        variant="dialog" 
        format="MM/dd/yyyy"
        value={calendarDate}
        />
        </MuiPickersUtilsProvider>)
    

    return (
        <>
        
            
            <Container2>
                <FormWrap>
                    <FormContent>
                        <Form2 onSubmit={handleSubmit}>
                            <FormH1>Create Your Appointmnet!</FormH1>
                            <FormRow>
                                <FormLabel2>Select a date</FormLabel2>
                                <CalendarWrap>
                                    {calenderGroup}
                                </CalendarWrap>
                            </FormRow>

                            <FormRow>
                                <FormLabel2>Select an employee</FormLabel2>
                                
                                    <FormSelect onChange={e => handleSelection(e.target.value) }  required >
                                        <option value='' disabled selected>Employee List</option>
                                        {EmpJsx}
                                    </FormSelect>
                            </FormRow>
                            <FormRow>
                                <FormLabel2>Select a time</FormLabel2>
                                    <FormSelect onChange={e=>setSelectedTime(e.target.value)}
                                    required >
                                        <option value='' disabled selected>Available Time</option>
                                        { onLoad4 ? timeJsx : <option>loading</option>}
                                    </FormSelect>
                            </FormRow>
                            <FormButton type='submit' btncolor={false}>
                                Make Appointment!
                            </FormButton>

                        </Form2>
                    </FormContent>
                </FormWrap>
            </Container2>
        </>
    )
}

export default Appointment
