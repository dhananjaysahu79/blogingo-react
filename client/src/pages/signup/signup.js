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
} from './signup.elements';

import validate from "../../utils/validateInfo";
import useForm from "../../utils/useForm";

const SignUP = ({submitForm}) => {

    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    const [user, setUser] = useState({
        'name': '',
        'email': '',
        'password': '',
    });

    // const handleChange = (e) => {
    //    let field_name = e.target.name;
    //    let value = e.target.value;

    //    setUser({...user, [field_name]:value})
    // }

    const postData = async(e) => {
        
    }


    return (
    <Section>
        <Card>
          <Container>
            <Row>
                <Column>
                    <TextWrapper>
                    <BoldText>Sign UP</BoldText>

                    <ErrorText>{errors.username}</ErrorText>
                    <FormInput
                        name = 'username'
                        value = {values.username}
                        onChange = {handleChange}
                        placeholder = {'Your Full Name'}>
                    </FormInput>

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

                    <ErrorText>{errors.password2}</ErrorText>
                    <FormInput
                        name = 'password2'
                        onChange = {handleChange}
                        value = {values.password2}
                        placeholder = {'Re-Enter Password'}>
                    </FormInput>
                    <Button 
                        onClick = {handleSubmit}
                        marginTop = {'15px'} 
                        marginBottom = {'30px'}>
                        Sign UP
                    </Button>
                    <Row> 
                      <p>Already have an account?</p>
                      <SigninText to = '/blogingo/signin'>Sign in</SigninText>
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

export default SignUP;

 