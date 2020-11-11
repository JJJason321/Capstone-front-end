import React, { useEffect, useState } from 'react'
import { icons } from 'react-icons/lib'
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
    Text,
    FormButtonLink,
    NavIcon
} from './signin.element'
import axios from 'axios'
import { useAccountContext, useLoginContext } from '../../libs/ContextLib';
import { useHistory } from 'react-router-dom';
import { computeHeadingLevel } from '@testing-library/react';


const SignIn = () => {

    const [btncolor, setbtncolor] = useState(true)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    //const [accounts, setAccounts] = useState()


    const { login, setLogin } = useLoginContext();
    const { AuthenticatedAccount, setAuthenticatedAccount } = useAccountContext()

    const history = useHistory();
    //console.log(login);
    //console.log(AuthenticatedAccount);

    useEffect(() => {
        if (login) {
            //console.log('you can see this only if login = true')
            //console.log(AuthenticatedAccount);
        }
    }, [])



    async function handleSubmit(event) {
        event.preventDefault();

        axios.post('http://localhost:8080/api/signIn',
            {
                "username": email,
                "password": password
            }).then(response => {
                // console.log(response.data);
                const data = response.data;
                //console.log(data);
                setAuthenticatedAccount(data);
                //console.log(AuthenticatedAccount);
                alert('Successful login');
                /*
                setLogin(true);
                console.log(response.data);
                localStorage.setItem('user', response.data);
                console.log(response.data.id);
                localStorage.setItem('userId', response.data.id);
                console.log(response.data.client);
                localStorage.setItem('isClient', response.data.client);
                console.log(response.data.id);
                localStorage.setItem('userId', response.data.id);
                */
                setLocalStorage(response)
                backToHome()

            }
            ).catch((error) => {
                alert('Invalid Email or Password')
            });


    }
    function setLocalStorage(response) {
        setLogin(true);
        console.log(response.data);
        console.log(response.data.id);
        console.log(response.data.client);
        console.log(response.data.employee);
        console.log(response.data.admin);
        localStorage.setItem('user', response.data);
        localStorage.setItem('userId', response.data.id);
        localStorage.setItem('isClient', response.data.client);       
        localStorage.setItem('isEmployee', response.data.employee);     
        localStorage.setItem('isAdmin', response.data.admin);
    }



    function backToHome() {
        /*
        console.log("globale context account: " + accounts)
        console.log("account id:   " + AuthenticatedAccount)
        console.log('back to home')
        */
        //console.log("globale context account: " + AuthenticatedAccount)
        localStorage.setItem('login', true)
        history.push("/");
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon>
                        <NavIcon to='/' />
                        Ultra
                    </Icon>
                    <FormContent>
                        <Form onSubmit={handleSubmit} >
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required
                                onChange={e => setEmail(e.target.value)}
                                autoFocus
                            />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required
                                onChange={e => setPassword(e.target.value)}
                            />
                            <FormButton type='submit' btncolor={true}>Sign in</FormButton>
                            <Text>Forgot password?</Text>
                            <br></br>
                            <FormButtonLink to="create-account">
                                <FormButton>New to this place? Create an account!</FormButton>
                            </FormButtonLink>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
