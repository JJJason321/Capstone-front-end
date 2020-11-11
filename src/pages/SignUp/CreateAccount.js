import React, { useEffect, useState } from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
} from './signin.element';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



const CreateAccount = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [id, setId] = useState()

    const [loading, setloding] = useState(true);

    const history = useHistory();

    useEffect(() => { 
        if(!loading){
            //console.log('this is from useEffect function:  ' + loading);
            //console.log(id);
            createClientTable();
        } 
    },[!loading])

    async function handleSubmit(event) {

        axios.post('http://localhost:8080/api/createaccount',
            {
                "username": email,
                "password": password,
                "client": "true"
            }).then(response => {
               // console.log(response.data.id);
                setId(response.data.id)
              //  console.log('i have following id: ' + response.id);

                alert('Account table created');
                setloding(false)
            }
            ).catch((error) => {
                alert('Email already existed')
            });


        event.preventDefault();

    }

    function backToHome() {

        history.push("/");
    }

    function createClientTable() {

        //console.log('createClient table called')
        //console.log(firstname);
        //console.log(lastname)
        //console.log(id)
        axios.post('http://localhost:8080/api/clients',
            {
                "firstName": firstname,
                "lastName": lastname,
                "account_id": id

            }).then(response => {
                // const data = response.data;
                // const id = response.id
                alert('You are all set!');
                //backToHome()
                backToHome()
            }
            ).catch((error) => {
                console.log(error)
                alert('Name Error')
            });
    }




    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form onSubmit={handleSubmit}>
                            <FormH1>Create your account</FormH1>


                            <FormLabel htmlFor='for'>First Name</FormLabel>
                            <FormInput autoFocus type='text' required
                                onChange={e => setFirstname(e.target.value)} />

                            <FormLabel htmlFor='for'>Last Name</FormLabel>
                            <FormInput type='text' required
                                onChange={e => setLastname(e.target.value)} />

                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required
                                onChange={e => setEmail(e.target.value)} />

                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='text' required
                                onChange={e => setPassword(e.target.value)} />

                            <FormButton type='submit' btncolor={false}>Create!</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default CreateAccount
