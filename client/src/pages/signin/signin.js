import React, {useState} from "react";
import {Container, Button} from '../../globalStyles';
import signupimg from '../../images/signupimg.svg';

import {
    Section,
    Card,
    FormWrapper,
    Row,
    Column,
    TextWrapper,
    Img,
    FormInput,
    BoldText,
    SigninText,
    ErrorText
} from './signin.elements';

import validate from "../../utils/validateInfo";
import useForm from "../../utils/useForm";

const SignIN = ({submitForm}) => {

    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );


    return (
    <Section>
        <Card>
          <Container>
            <Row>
                <Column>
                    <TextWrapper>
                    <BoldText>Sign In</BoldText>

                    <ErrorText>{errors.email}</ErrorText>
                    <FormInput
                        name = 'email'
                        value = {values.email}
                        onChange = {handleChange}
                        placeholder = {'Your Email'}>
                    </FormInput>

                    <ErrorText>{errors.password1}</ErrorText>
                    <FormInput
                        name = 'password1'
                        value = {values.password1}
                        onChange = {handleChange}
                        placeholder = {'Password'}>
                    </FormInput>

                    <Button 
                        onClick = {handleSubmit}
                        marginTop = {'15px'} 
                        marginBottom = {'30px'}>
                        Sign UP
                    </Button>
                    <Row> 
                      <p>Don't have an account?</p>
                      <SigninText to = '/blogingo/signup'>Sign up</SigninText>
                    </Row>
                    </TextWrapper>
                </Column>
                <Column>
                <Img src = {signupimg}></Img>
                </Column>
            </Row>
          </Container>
        </Card>
    </Section>
    );
}

export default SignIN;

 