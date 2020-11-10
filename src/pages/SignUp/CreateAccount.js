import React from 'react'
import { Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text,
    FormButtonLink
} from './signin.element';

const CreateAccount = () => {
    return (
        <>
        <Container>
            <FormWrap>
            <FormContent>
                        <Form action="#">
                            <FormH1>Create your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='text' required></FormInput>
                            <FormButton type='submit' btncolor={false}>Create!</FormButton>
                        </Form>
                    </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default CreateAccount
