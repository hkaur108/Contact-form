import React from 'react'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
export default function MessageComponent() {
  
  
  return (
    <div style={{transition:"all 1s ease-in-out"}}>
      <Container className='mt-5' >
        <Row>
          <Col>
          <Alert variant={"secondary"} className='bg-secondary text-light' >
      <Image src='/assets/images/icon-success-check.svg' className='mb-1'/>
        <Alert.Heading>Message Sent!</Alert.Heading>
          <p className='text-light'>Thanks for completing the form. We'll be in touch soon!</p>
        </Alert>
          </Col>
        </Row>
      </Container>
     
    </div>
  )
}
