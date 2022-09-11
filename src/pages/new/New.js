import "./new.css"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { Link } from "react-router-dom";


const New = ({inputs,title}) => {
    const [file, setFile] = useState("");

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    return ( 
        <div className="new">
             <Sidebar />
            <div className="newContainer">
            <Navbar />
            <div className="top">
                <h1>{title}</h1>
            </div>
            <div className="bottom">
                <div className="left">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-2" >
       {inputs.map((input) => (
        <Form.Group as={Col} md="6"  key={input.id} style={{marginBottom: "15px"}} >
          <Form.Label>{input.label}</Form.Label>
          <Form.Control
            required
            type={input.type}
            placeholder={input.placeholder}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
            
            ))} 
      
      </Row>
           
          <Form.Group as={Col}
                md="6" className="position-relative mb-3">
            <Form.Label>File</Form.Label>
            <Form.Control
              type="file"
              required
              name="file"
              onChange = { (e) => { setFile(e.target.files[0])}}
            />
             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          
      <Button type="submit">Lưu</Button>
    </Form>
           
      

                </div>
                <div className="right"> 
                <img src= {
                    file ? URL.createObjectURL(file) :
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT8-e9Jpr1AyNwkdf_iE_zQjknFwrn3kBbQQ&usqp=CAU"
                 }
                alt="" /> 
                </div>
            </div>
            </div>
        </div>
     );
}

export default New;