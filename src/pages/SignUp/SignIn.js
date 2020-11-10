import React, { useState } from 'react'
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
import checkLogin from '../../libs/CheckLogin'
import axios from 'axios'

const SignIn = () => {

    const [btncolor, setbtncolor] = useState(true)
    const [logged , setlogged] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [accounts, setAccounts] = useState()

    async function handleSubmit(event){
        console.log(email)
        console.log(password)  
        console.log('this is from handleSubmit')

        axios.post('http://localhost:8080/api/signIn',
        {
            "username" : email,
            "password" : password
        }).then(
            res =>{
                console.log('axios executed')
                console.log(res.data);
                setAccounts(res.data)
                setlogged(true)
                alert("welcome !")
            }
        ).catch(
            e=>{
                console.log(e.code)
                alert("Incorrect password")
            }
        );
    }

    console.log("after axios")
    console.log(accounts)

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon>
                        <NavIcon to='/' />
                        Ultra
                    </Icon>
                    <FormContent>
                        <Form onSubmit={handleSubmit}>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required 
                                onChange={e=> setEmail(e.target.value)} 
                                autoFocus
                            />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required 
                                onChange={e=> setPassword(e.target.value)}
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
