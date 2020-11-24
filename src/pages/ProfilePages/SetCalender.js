import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { DateTime } from 'luxon';
import {
    Container2,
    Container,
    FormWrap,
    FormContent,
    Form2,
    FormH1,
    FormLabel2,
    FormInput2,
    FormInput,
    FormRow,
    FormButton,
    FormSelect
} from './formelement';

const SetCalender = () => {

    const [UserId, setUserId] = useState()
    const [OnLoad, setOnLoad] = useState(true)
    const [AccId, setAccId] = useState();
   // const [OnLoad2, setOnLoad2] = useState(false);

    const [MondayStart, setMondayStart] = useState();
    const [MondayEnd, setMondayEnd] = useState();

    const [TuesdayStart, setTuesdayStart] = useState();
    const [TuesdayEnd, setTuesdayEnd] = useState();

    const [WednesdayStart, setWednesdayStart] = useState();
    const [WednesdayEnd, setWednesdayEnd] = useState();

    const [ThursdayStart, setThursdayStart] = useState();
    const [ThursdayEnd, setThursdayEnd] = useState();

    const [FridayStart, setFridayStart] = useState();
    const [FridayEnd, setFridayEnd] = useState();

    const [SaturdayStart, setSaturdayStart] = useState();
    const [SaturdayEnd, setSaturdayEnd] = useState();



    useEffect(() => {

        if (OnLoad) {
            setUserId(localStorage.getItem('userId'))
            loadEmpAcc()
        }

       

    })


    function loadEmpAcc() {
        console.log('User Id called: ' + UserId);
        const url = 'http://localhost:8080/api/employeeInfo/' + UserId;
        axios.get(url).then(response => {
          //  console.log(response.data);
            setAccId(response.data.id)
            //setOnLoad2(true);
        }).catch(e => {
            console.log(e)
        })

        //setOnLoad(false);
    }



    function handleSubmit(event) {
        event.preventDefault()
        //console.log('handleSubmit Called')
        /*
        console.log(MondayStart);
        console.log(MondayEnd);
        console.log(TuesdayStart);
        console.log(TuesdayEnd);
        console.log(WednesdayStart);
        console.log(WednesdayEnd);
        console.log(ThursdayStart);
        console.log(ThursdayEnd);
        console.log(FridayStart);
        console.log(FridayEnd);
        console.log(SaturdayStart);
        console.log(SaturdayEnd);
        */
        loadTime();
    }

    function loadTime() {

        //console.log('loadTime Called');

        const timeNow = DateTime.local() 
        const dayString = timeNow.toLocaleString(DateTime.DATETIME_HUGE);
        const weekDay = dayString.split(",", 1);
        
        createSchedule(weekDay)

    }

    function createSchedule(weekDay) {
       
        //console.log('Create Schedule function called, And today is: ' + weekDay[0]);

        if (weekDay[0] === "Saturday") {
          
            console.log("Saturday function called")
            const dayIndex = 6;

            createSchedulePart2(dayIndex)

        } else if (weekDay[0] === "Monday") {

            console.log("Monday function called")
            const dayIndex = 1;
            
            createSchedulePart2(dayIndex)

        } else if (weekDay[0] === "Tuesday") {

            console.log("Tuesday function called")
            const dayIndex = 2;

            createSchedulePart2(dayIndex)

        } else if (weekDay[0] === "Wednesday") {

            console.log("Wednesday function called")
            const dayIndex = 3;

            createSchedulePart2(dayIndex)

        } else if (weekDay[0] === "Thursday") {

            console.log("Thursday function called")
            const dayIndex = 4;
            
            createSchedulePart2(dayIndex)

        } else if (weekDay[0] === "Friday") {

            console.log("Friday function called")
            const dayIndex = 5;
            

            createSchedulePart2(dayIndex)

        } else if (weekDay[0] === "Sunday") {
            
            console.log("Sunday function called")
            const dayIndex = 7;
           
            createSchedulePart2(dayIndex)
        }
       
    }

    function createSchedulePart2(dayIndex){

        //console.log('function 2 called')

        var i = 0;
        var timeNow = DateTime.local()
        var year = timeNow.year;
        var month = timeNow.month;
        var day = timeNow.day;
        var daysInMonth = timeNow.daysInMonth;
        var startTime;
        var endTime;
        var schedules = []
        var inputDay = day.toLocaleString()
        var inputMonth = month.toLocaleString()
        var monthCount = 1;

        for (i; i < 90; i++) {

            //console.log(month);
            //console.log(inputMonth.length + " :input Month length");

            if (inputDay < '10') {
                // console.log(inputDay+ ' : input day value')
                day = "0" + day;
                // console.log(day);
            }

            if (inputMonth.length === 1) {
                //  console.log(inputMonth+ ' : input month value')
                month = "0" + month;
                inputMonth = month.toLocaleString()
                //  console.log(inputMonth);
            }

            if (dayIndex < 7) {
                //console.log('if runs: ' + dayIndex);
                if (dayIndex === 6) {
                    startTime = SaturdayStart;
                    endTime = SaturdayEnd;
                }
                if (dayIndex === 1) {
                    startTime = MondayStart;
                    endTime = MondayEnd;
                }
                if (dayIndex === 2) {
                    startTime = TuesdayStart;
                    endTime = TuesdayEnd;
                }
                if (dayIndex === 3) {
                    startTime = WednesdayStart;
                    endTime = WednesdayEnd;
                }
                if (dayIndex === 4) {
                    startTime = ThursdayStart;
                    endTime = ThursdayEnd;
                }
                if (dayIndex === 5) {
                    startTime = FridayStart;
                    endTime = FridayEnd;
                }
                //console.log(startTime);
                //console.log(endTime);
                const schedule = {
                    "employeeId": AccId,
                    "date": year + "-" + month + "-" + day,
                    "startTime": startTime,
                    "endTime": endTime
                }

                schedules.push(schedule)

            } else {

                //console.log('else: this would not run: ' + dayIndex);
                dayIndex = 0;
            }

            dayIndex++;
            inputDay++;
            day++
            //console.log(day);
            //console.log(month);
            if (day > daysInMonth) {
                day = 1;
                inputDay = 1;


                //console.log('GOes to next month next month');
                // console.log(monthCount);
                daysInMonth = DateTime.local().plus({ months: monthCount }).daysInMonth
                // console.log('new days in month:' + daysInMonth);

                month++;
                inputMonth = month.toLocaleString()

                monthCount++;

                if (month > 12) {
                    month = 1;
                    inputMonth = month.toLocaleString();
                    year++;
                }
            }

        }

        createSchedulePart3(schedules)

    }

    function createSchedulePart3(schedules) {
        /*
        console.log('function3 called')
        console.log(schedules);
        console.log(schedules.length);
        */
        const url = 'http://localhost:8080/api/addschedule'
         
        schedules.forEach(schedule => {
           // console.log(schedule);
            axios.post(url,schedule).then(response =>{
                //console.log(response)
            }).catch((error) =>{
                console.log(error);
            })
        });

        alert("You have set your schedule for next 90 days")

    }



    return (
        <div>
            You can set your work calender here!
            <Container2>               
                <FormWrap>
                    
                    <FormContent>
                      
                        <Form2 onSubmit={handleSubmit}>
                            <FormH1>
                                Set your working schedule for next 3 months.
                            </FormH1>
                            <FormRow>

                                <FormLabel2>Monday</FormLabel2>

                                <FormSelect onChange={e => setMondayStart(e.target.value)} required >
                                    <option value='' disabled selected>Start Time</option>
                                    <option value='9:00:00'>9:00 AM</option>
                                    <option value='13:00:00'>13:00 PM</option>
                                </FormSelect>
                                <FormSelect onChange={e => setMondayEnd(e.target.value)} required >
                                    <option value='' disabled selected>End Time</option>
                                    <option value='13:00:00'>13:00 AM</option>
                                    <option value='17:00:00'>17:00 PM</option>
                                </FormSelect>

                            </FormRow>
                            <FormRow>

                                <FormLabel2>Tuesday</FormLabel2>

                                <FormSelect onChange={e => setTuesdayStart(e.target.value)} required >
                                    <option value='' disabled selected>Start Time</option>
                                    <option value='9:00:00'>9:00 AM</option>
                                    <option value='13:00:00'>13:00 PM</option>
                                </FormSelect>
                                <FormSelect onChange={e => setTuesdayEnd(e.target.value)} required >
                                    <option value='' disabled selected>End Time</option>
                                    <option value='13:00:00'>13:00 PM</option>
                                    <option value='17:00:00'>17:00 PM</option>
                                </FormSelect>

                            </FormRow>
                            <FormRow>

                                <FormLabel2>Wednesday</FormLabel2>

                                <FormSelect onChange={e => setWednesdayStart(e.target.value)} required >
                                    <option value='' disabled selected>Start Time</option>
                                    <option value='9:00:00'>9:00 AM</option>
                                    <option value='13:00:00'>13:00 PM</option>
                                </FormSelect>
                                <FormSelect onChange={e => setWednesdayEnd(e.target.value)} required >
                                    <option value='' disabled selected>End Time</option>
                                    <option value='13:00:00'>13:00 PM</option>
                                    <option value='17:00:00'>17:00 PM</option>
                                </FormSelect>

                            </FormRow>
                            <FormRow>

                                <FormLabel2>Thursday</FormLabel2>

                                <FormSelect onChange={e => setThursdayStart(e.target.value)} required >
                                    <option value='' disabled selected>Start Time</option>
                                    <option value='9:00:00'>9:00 AM</option>
                                    <option value='13:00:00'>13:00 PM</option>
                                </FormSelect>
                                <FormSelect onChange={e => setThursdayEnd(e.target.value)} required >
                                    <option value='' disabled selected>End Time</option>
                                    <option value='13:00:00'>13:00 PM</option>
                                    <option value='17:00:00'>17:00 PM</option>
                                </FormSelect>

                            </FormRow>
                            <FormRow>

                                <FormLabel2>Friday</FormLabel2>

                                <FormSelect onChange={e => setFridayStart(e.target.value)} required >
                                    <option value='' disabled selected>Start Time</option>
                                    <option value='9:00:00'>9:00 AM</option>
                                    <option value='13:00:00'>13:00 PM</option>
                                </FormSelect>
                                <FormSelect onChange={e => setFridayEnd(e.target.value)} required >
                                    <option value='' disabled selected>End Time</option>
                                    <option value='13:00:00'>13:00 PM</option>
                                    <option value='17:00:00'>17:00 PM</option>
                                </FormSelect>

                            </FormRow>
                            <FormRow>

                                <FormLabel2>Saturday</FormLabel2>

                                <FormSelect onChange={e => setSaturdayStart(e.target.value)} required >
                                    <option value='' disabled selected>Start Time</option>
                                    <option value='9:00:00'>9:00 AM</option>
                                    <option value='13:00:00'>13:00 PM</option>
                                </FormSelect>
                                <FormSelect onChange={e => setSaturdayEnd(e.target.value)} required >
                                    <option value='' disabled selected>End Time</option>
                                    <option value='13:00:00'>13:00 PM</option>
                                    <option value='17:00:00'>17:00 PM</option>
                                </FormSelect>

                            </FormRow>
                            <FormButton>
                                Set Schedule
                            </FormButton>
                        </Form2>
                    </FormContent>
                </FormWrap>
            </Container2>
        </div>
    )
}

export default SetCalender
