import React, { useState, useEffect} from 'react';
import axios from 'axios';

import { 
    FormWrap,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,  
    Button2
} from './formelement';

import './PersonalInfo.css'

import * as AiIcons from 'react-icons/ai';

const PersonalInfo = () => {

    const [onload, setOnload] = useState(true)
    //const [onload2, setOnload2] = useState(false)
    //const [account, setAccount] = useState()
    const [info, setInfo] = useState('no data right now')
    
    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [address, setAddress] = useState()
    const [phonenumber, setPhonenumber] = useState()

    const [formStatus, setFormStatus] = useState(false)

    useEffect(() => {

        if (onload) {
           // console.log('this is info tag at OnLoad1: ' + info)
            loadAccountInfo();
            //loadAccount();
          //  console.log('executed 2 functions, suppose to have some data')
            setOnload(false);
            //setOnload2(true)
        }



    })

/*
    function loadAccount() {
        const userId = localStorage.getItem('userId');
        const url = 'http://localhost:8080/api/accounts/' + userId;

        axios.get(url).then(response => {
           // setAccount(response.data);
            setOnload(false);

        }).catch(e => {
            console.log(e)
        })

    }
*/
    function loadAccountInfo() {
        const userId = localStorage.getItem('userId');
        //console.log(userId);
        const identity = localStorage.getItem('isClient');
        if (identity === 'true') {
            //console.log('i am a client')
            const url = 'http://localhost:8080/api/clientInfo/' + userId;
            axios.get(url).then(response => {
                //console.log(response.data);
                setInfo(response.data);
            }).catch(e => {
                console.log(e)
            })
        } else {
            //console.log('i am employee or owner')
            const url = 'http://localhost:8080/api/employeeInfo/' + userId;
            axios.get(url).then(response => {
         //       console.log(response.data);
                setInfo(response.data);
            }).catch(e => {
                console.log(e)
            })
        }

    }

    async function handleSubmit(event){
        event.preventDefault()
        const userId = localStorage.getItem('userId');
        const identity = localStorage.getItem('isClient');
        const data = {
            "firstName": firstname,
            "lastName": lastname,
            "account_id": userId,
            "address": address,
            "phoneNumber": phonenumber
        }
        console.log(data);
        if (identity ==='true'){
            const url = 'http://localhost:8080/api/updateclientinfo'
            axios.put(url,data).then(
                response => {
                    console.log(response.data);
                }
            )
        }else{
            const url = 'http://localhost:8080/api/updateemployeeinfo'
            axios.put(url,data).then(
                response => {
                    console.log(response.data);
                }
            )

        }


    }

    function editForm(){
        setFormStatus(!formStatus)
    }





    return (
        <>
        You can set your work calender here!
            <div className='formContainer'>
            
                <FormWrap>
                    <FormContent>
                        <Form onSubmit={handleSubmit} className='form' disabled={!formStatus}>
                            <FormH1>Modify your infomation</FormH1>
                            <FormLabel>First Name</FormLabel>
                            <FormInput type='text' required placeholder={info.firstName} 
                            disabled={!formStatus} onChange={e=> setFirstname(e.target.value)} />
                            <FormLabel>Last Name</FormLabel>
                            <FormInput type='text' required placeholder={info.lastName} 
                            disabled={!formStatus} onChange={e=> setLastname(e.target.value)} />
                            <FormLabel>Phone Number</FormLabel>
                            <FormInput type='text' required placeholder={info.phoneNumber} 
                            disabled={!formStatus} onChange={e=> setPhonenumber(e.target.value)} />
                            <FormLabel>Address</FormLabel>
                            <FormInput type='text' required placeholder={info.address} 
                            disabled={!formStatus} onChange={e=> setAddress(e.target.value)} />
                            <FormButton type='submit' btncolor={false}>
                                Update my infomation
                            </FormButton>
                        </Form>
                        <Button2 btncolor={!formStatus} onClick={editForm} small={true}>
                            {!formStatus ? 
                            <><AiIcons.AiFillUnlock /></> 
                            : 
                            <><AiIcons.AiFillLock /></> 
                            }
                            
                        </Button2>
                    </FormContent>
                </FormWrap>

            </div>

        </>
    )
}

export default PersonalInfo
