import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import * as categoryAPI from '../../api/category';

// import { Link } from "react-router-dom";

function UpdateCategory() {
  const { category_id } = useParams();
  const [category, setCategory] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await categoryAPI.get(`categories?category_id=${category_id}`);
      setCategory(data.categories[0]);
    };
    fetchAPI();
  }, []);


  let navigate = useNavigate();
  const [file, setFile] = useState("");

  const [validated, setValidated] = useState(false);

  const [data, setData] =  useState({
    category_name: "",
    category_img: "",
  });

  const changeHandler = (e) => {
    const newData = {...data};
    newData[e.target.name] = e.target.value;
    setData(newData);
  }

  const changeHandlerFile = (e) => {
    const newData = {...data};
    newData[e.target.name] =  e.target.files[0];
    setData(newData);
  }

  const handleSubmit = async(event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
        if(form.checkValidity() === true){
          axios.put(`http://localhost:3000/categories/`, 
          { 
            category_name: data.category_name,
            category_img: data.category_img
          }, 
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(res => {
            alert('Bạn thêm sản phẩm thành công!')
            navigate('/categories/')
          })
          .catch(err => {
            console.log(err);
            alert('Bạn nhập sai thông tin vui lòng nhập lại')
          });
      }
    
  };

  return (
      <div className="new-container">
        <div className="new-container-top">
          <span className="new-container-top__title">Upload Category</span>
        </div>
        <div className="new-container-bottom">
          <div className="new-container-bottom__left">
            <Form noValidate validated={validated} onSubmit={handleSubmit} >
              <Row className="mb-4">
                <Form.Group as={Col} md="7" controlId="validationCustom01">
                  <Form.Label>Category name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="category_name"
                    value={category.category_name || ''}
                    placeholder="Category name"
                    onChange={(e) => changeHandler(e) }
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group as={Col} md="7"  className="position-relative mb-4">
                <Form.Label>File</Form.Label>
                <Form.Control
                  type="file"
                  required
                  name="category_img"
                  accept=".jpg, .jpeg, .png"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                    changeHandlerFile(e)
                  }}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Button type="submit">Lưu</Button>
            </Form>
          </div>
          <div className="new-container-bottom__right">
            {/* <img className="new-container-bottom__right--img"
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT8-e9Jpr1AyNwkdf_iE_zQjknFwrn3kBbQQ&usqp=CAU"
              }
              alt=""
            /> */}
            <img className="new-container-bottom__right--img"
              src= {`http://127.0.0.1:8887//${category.category_img}`}
              alt=""
            />


          </div>
        </div>
      </div>
  );
}

export default UpdateCategory;
