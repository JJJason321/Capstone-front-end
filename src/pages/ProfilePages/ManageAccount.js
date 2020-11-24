

import axios from 'axios';
import React, { useState, useEffect } from 'react';

import {
    Container2,
    Button2,
    ButtonWrap,
    Table,
    TableWrap,
    TableContent,
    THeading,
    THead,
    TRow,
    TBody,
    Button3,
    FormWrap,
    FormContent,
    Form,
    FormButton,
    FormH1,
    FormLabel,
    FormInput,
    FormCheckbox
} from './formelement';

const ManageAccount = () => {

    const [onload, setOnload] = useState(true);
    const [onload2, setOnload2] = useState();
    const [onload3, setOnload3] = useState();
    const [accounts, setAccount] = useState();
    const [client, setClient] = useState();
    const [employee, setEmployee] = useState();
    const [clientList, setClientList] = useState();
    const [employeeList, setEmployeeList] = useState();
    const [btnClick, setBtnClick] = useState(0);
    const [page, setPage] = useState(true);

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [isAdmin, setIsAdmin] = useState(false);
    const [isEmp, setIsEmp] = useState(true);


    useEffect(() => {

        if (onload) {
            loadAccounts()
            //setOnload(false)
        }

        if (onload2) {
            //console.log('onload2 called')
            if (accounts) {
                //console.log("this will happen if accounts has something")
                //console.log('onload2 and accounts have data called')
                sortAccounts()
            }
        } else {
            //console.log(client)
            //console.log(employee)
            //console.log("loading over");


        }

        if (onload3) {
            //console.log('onload3 called')
            mapData()
        }

    })

    function mapData() {
        //console.log(client)
        const clientData = client.map((c) =>
            <TRow>
                <td>{c.id}</td>
                <td>{c.username}</td>
                <td>
                    <Button3 btncolor={true}>Reset password</Button3>
                    <Button3>Delete</Button3>
                </td>
            </TRow>
        )
        const employeeData = employee.map((e) =>
            <TRow>
                <td>{e.id}</td>
                <td>{e.username}</td>
                <td>
                    <Button3 btncolor={true}>Reset password</Button3>
                    <Button3>Delete</Button3>
                </td>
            </TRow>
        )
        setClientList(clientData)
        setEmployeeList(employeeData)
        setOnload3(false)
    }


    function loadAccounts() {
        //console.log('load account called')
        const url = 'http://localhost:8080/api/accounts';
        axios.get(url).then(
            response => {
                setAccount(response.data)
            }
        )
        setOnload(false)
        setOnload2(true)
    }

    function sortAccounts() {
        //  console.log("sort Accounts been called")
        var clients = []
        var employees = []
        var i;
        for (i = 0; i < accounts.length; i++) {
            //console.log(accounts[i]);
            if (accounts[i].client) {
                clients.push(accounts[i])
            } else {
                employees.push(accounts[i])
            }
        }
        // console.log('Here is clients: ' + clients[0].username)
        //   console.log('Here is employees: ' + employees)
        setClient(clients);
        setEmployee(employees);
        setOnload2(false);
        setOnload3(true)
    }

    function changeShow(p) {
        setBtnClick(p)
    }

    function addNewAccount() {
        // console.log('add new been clicked')
        setPage(!page)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(isAdmin);
        console.log(isEmp);
        console.log(username);
        console.log(password);

        axios.post('http://localhost:8080/api/createaccount',
            {
                "username": username,
                "password": password,
                "client": "false",
                "employee": isEmp,
                "admin": isAdmin

            }).then(response => {
                console.log(response.data);

                //  console.log('i have following id: ' + response.id);

                alert('Account table created');

            }
            ).catch((error) => {
                alert('Email already existed')
            });

    }

    function checkBoxChecked() {
        setIsAdmin(!isAdmin);
    }




    return (

        <>
        You can manage all accounts here
            <Container2>
                <Button2 btncolor={true} small={true} onClick={addNewAccount}>
                    {page ? 'Add New' : 'Go Back'}
                </Button2>

                {page ?
                    <>
                        <ButtonWrap>
                            <Button2 btncolor={true} onClick={() => changeShow(1)}>Show employee accounts</Button2>
                            <Button2 btncolor={false} onClick={() => changeShow(0)}>Show client accounts</Button2>
                        </ButtonWrap>
                        <TableWrap>
                            <TableContent>
                                <Table>
                                    <THeading>
                                        <TRow>
                                            <THead>Account Id</THead>
                                            <THead>Username</THead>
                                            <THead>Actions</THead>
                                        </TRow>
                                    </THeading>
                                    <TBody>
                                        {(btnClick) ?
                                            employeeList :
                                            clientList
                                        }
                                    </TBody>
                                </Table>

                            </TableContent>
                        </TableWrap>
                    </>
                    :
                    <>
                        <FormWrap>
                            <FormContent>
                                <Form onSubmit={handleSubmit}>
                                    <FormH1>Modify your infomation</FormH1>
                                    <FormLabel>Username</FormLabel>
                                    <FormInput type='email' required placeholder='email address'
                                        onChange={e => setUsername(e.target.value)}
                                    />
                                    <FormLabel>password</FormLabel>
                                    <FormInput type='text' required placeholder='password'
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                    <FormLabel>Administrator access?</FormLabel>
                                    <FormCheckbox type='checkbox'
                                        onChange={checkBoxChecked}
                                    />
                                    <FormButton type='submit' btncolor={false}>
                                        Create Account!
                            </FormButton>
                                </Form>
                            </FormContent>
                        </FormWrap>

                    </>
                }

            </Container2>
        </>

    )
}

export default ManageAccount
