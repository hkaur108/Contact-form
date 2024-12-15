import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Heading from './Heading';
import Row from 'react-bootstrap/Row';
import MessageComponent from './MessageComponent';


const schema =yup.object({
    firstName:yup.string().required("First Name is required"),
    lastName:yup.string().required('Last name is required'),
    email:yup.string().email('Email is not valid').required('Email is required'),
    message:yup.string().required('message is required'),
    queryType:yup.string().required('Query Type is required'),
    checkBox:yup.string().required('To Submit this form, please consent to be contacted'),
})

type FormValues={
    firstName:string,
    lastName:string ,
    email:string,
    queryType:string,
    checkBox:string,
    message:string
}

const defaultValues={
            firstName:"",
            lastName:"",
            email:"",
            queryType:"",
            checkBox:"",
            message:""

}

export default function ContactForm() {
    const[isDisplayMessage,setisDisplayMessage] =useState(false);
    const {register,handleSubmit,control,formState,reset}=useForm<FormValues>({
        defaultValues:{
            firstName:"",
            lastName:"",
            email:"",
            queryType:"",
            checkBox:"",
            message:""

        },
        resolver:yupResolver(schema)
    });
    const {errors,isSubmitSuccessful}=formState;
    const onSubmit=()=>{
       if(isSubmitSuccessful){
            console.log("form has been submitted")
            reset(
                
                defaultValues
                
            )
            setisDisplayMessage(true)
       }
    }
    const handleReset =()=>{

    }
  return (
    <>
    {(isDisplayMessage) && <MessageComponent/>}
        <Form className="form-styling " onSubmit={handleSubmit(onSubmit)} noValidate>
        <Heading/>
        <Row className='mb-3'>
        <Form.Group  as={Col} lg={6} md={6} sm={12} controlId="firstName">
            <Form.Label for="firstName" className='text-secondary'>First name </Form.Label>
            <Form.Control aria-label="firstName" type="text"  {...register("firstName")}/>
            <Form.Text className='d-block text-danger mb-2'>{errors.firstName?.message}</Form.Text>
            </Form.Group>

            <Form.Group as={Col} lg={6} md={6} sm={12} controlId='lastName'>
            <Form.Label for="lastName" className='text-secondary'>Last name </Form.Label>
            <Form.Control aria-label="lastName" type="text"  {...register("lastName")}/>
            <Form.Text className='d-block text-danger mb-2'>
                {errors.lastName?.message}
            </Form.Text>
            </Form.Group>
        </Row>
        <Form.Group controlId='email'>
            <Form.Label for="email" className='text-secondary'>Email </Form.Label>
            <Form.Control aria-label="email" type="email"  {...register("email")}></Form.Control>
            <Form.Text className='d-block text-danger mb-2'>
                {errors.email?.message}
            </Form.Text>
        </Form.Group>
    
            <Form.Label className=' text-secondary'>Query Type </Form.Label>
            <Row>
            <Form.Group as={Col} lg={6} md={6} sm={12} className ="my-1"controlId='queryType'>
                <div className='radio-class d-flex align-items-center border border-muted'>
                <Form.Check aria-label='general-inquiry' className="mx-2" type='radio'{...register('queryType')}></Form.Check>
                <Form.Label for="queryType" className='text-secondary'>General Inquiry</Form.Label>
                </div>
            </Form.Group>
            <Form.Group as={Col} lg={6} md={6} sm={12} className ="my-1" controlId='queryType'>
                <div className="radio-class d-flex align-items-center border border-muted">
                <Form.Check arial-label="support-inquiry" type='radio' className="mx-2" {...register('queryType')}></Form.Check>
                <Form.Label for="queryType" className='text-secondary'>Support Inquiry</Form.Label>
                </div>
          
            </Form.Group>
            <Form.Text className='d-block text-danger mb-2'>{errors.queryType?.message}</Form.Text>
            </Row>
            

        <Form.Group controlId='message'>
            <Form.Label for="message" className='text-secondary'>Message </Form.Label>
            <Form.Control as="textarea" aria-label="message area"rows={5} type="text"  {...register("message")}/>
            <Form.Text className='d-block text-danger mb-2'>{errors.message?.message}</Form.Text>
                
            
        </Form.Group>
        <Row >
        <Form.Group as ={Col} controlId='checkBox' >
            <div className='d-flex'>
                <Form.Check area-label="accept terms and conditions" type="checkbox" id="checkBox" className='me-2' {...register("checkBox")}></Form.Check> 
                <Form.Label for="checkbox" className='text-secondary'>I consent to being contacted by the team </Form.Label>
            </div>
          
            <Form.Text className='d-block text-danger'>{errors.checkBox?.message}</Form.Text> 

        </Form.Group>
        </Row>  
        
         <div className="d-grid">
            <Button aria-labelledby='search-button' onClick={handleReset} type='submit' variant="success" size="lg">Submit</Button>
         </div>
    </Form>
    
    </>
  
  )
}
