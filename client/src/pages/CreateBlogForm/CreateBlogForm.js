import React from 'react';
import {Container, Button} from '../../globalStyles';
import { useState, useEffect } from 'react';
import { Chip } from '@material-ui/core';

import {
    Section,
    Card,
    BoldText,
    FormInput,
    SigninText
} from '../signup/signup.elements';
import {
    Row,
    TextWrapper,
    Select,
    Column,
    Option,
    Input,
} from './CreateBlogForm.elements';

import useCreateBlogForm from '../../utils/useCreateBlogForm';
import validate from '../../utils/validateInfo';

const CreateBlogForm = ({submitForm}) => {

    const { handleChange, handleSubmit, values, errors } = useCreateBlogForm(
        submitForm,
        validate
    );
    var [selected_chips, setChips] = useState([
        false,false,false,false,false,false,false,
    ]);

    const handleChip = (index) => {
       let newArr = [...selected_chips]
       newArr[index] = !newArr[index]
       setChips(newArr);
    };

    var category = ['News','Technology','Travel','Food','Lifestyle','Finance','Articles'];
    var types = ['Tutorial','Experience','Story','Article']
    return (
        <Section>
            <Card>
              <Container>
                <Row>
                   <TextWrapper>
                    <BoldText>Create Blog</BoldText>
                    {category.map((value,index) => (
                        <Chip
                            name = {index}
                            onClick = {() => handleChip(index)}
                            color = 'primary'
                            style={
                                {border: '2px solid', margin: '6px'}   
                            } variant = {selected_chips[index]?'default':'outlined'} label = {value}/> 
                       ))}
                    <Column>
                        <Select
                           name = 'type'
                           onChange = {handleChange}
                           value = {values.type}
                        >
                            {types.map((value,index) => (
                                <Option>{value}</Option>
                            ))}
                        </Select>
                        <FormInput type = 'file'></FormInput>
                    </Column>
                    <FormInput 
                        name = 'title'
                        value = {values.title}
                        onChange = {handleChange}
                        placeholder = 'Blog Title'>
                    </FormInput>
                    <FormInput 
                        name = 'link'
                        value = {values.link}
                        onChange = {handleChange}
                        placeholder = 'Add a Youtube video Link, if any'></FormInput>
                    <Input 
                        contentEditable 
                        name = 'content'
                        value = {values.content}
                        onChange = {handleChange}
                        placeholder = 'Write your blog content here.'></Input>
                    <Button marginTop = {'15px'} marginBottom = {'30px'}>Submit</Button>
                    <Column>
                        <p>Wondering how to start?</p>
                        <SigninText>View tutorial</SigninText>
                    </Column>
                   </TextWrapper>
                </Row>
              </Container>
            </Card>
        </Section>
    );
}

export default CreateBlogForm;