import React from "react";
import * as categoryApi from '../../api/category';
import { useState, useEffect } from "react";
import Loadpage from "../../components/loadpage/Loadpage";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";

import {GrUpdate} from "react-icons/gr";
import {AiTwotoneDelete} from "react-icons/ai";
import axios from 'axios';


function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteC, setDeletC] = useState(false);
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await categoryApi.get("categories");
      setCategories(data.categories);
      setLoading(false);
      setDeletC(false);
    };
    fetchAPI();
  }, [deleteC]);

  const deleteCategory = (category_id) => {
    const agreeDelete = window.confirm(`Bạn có muốn xóa category id: ${category_id} không ??`);
    if (agreeDelete) {
      axios.delete(`http://localhost:3000/categories/${category_id}`)
      window.alert(`Bạn đã xóa thành công category id: ${category_id}`);
      setDeletC(true);
    }
    return 0;
  };

  if (loading) return <Loadpage />;
  else
    return (
      <div className="data-table">
        <div className="data-table__heading">
          <span className="data-table__title">List Categories</span>
          <Link
            to="/categories/create-category"
            style={{ textDecoration: "none" }}
            className="link"
          >
            <Button variant="outline-success">Add categories</Button>
          </Link>
        </div>
        <Table bordered hover>
          <thead>
            <tr>
              <td>id</td>
              <td>Name</td>
              <td>img</td>
              <td>Created_at</td>
              <td>Updated_at</td>
              <td className="data-table__heading--manipulation">Thao tác</td>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => {
                return (
                <tr key={index}>
                    <td>{category.category_id}</td>
                    <td>{category.category_name}</td>
                    <td style={{ width: '120px', height: '84px' }} > 
                      <img className="data-table__heading--img" src= {`http://127.0.0.1:8887//${category.category_img}`} 
                      alt="Lỗi" /></td>
                    <td>{category.createdAt}</td>
                    <td>{category.updatedAt}</td>
                    <td >
                    <Link
                        to={`/categories/update-category/${category.category_id}`}
                        className="link"
                    >
                        <Button className="data-table__heading--button" variant="outline-warning">
                          <GrUpdate />
                        </Button>
                    </Link>
                    <Button className="data-table__heading--button" style={{float: 'right'}}
                        variant="outline-danger"
                        onClick={() => deleteCategory(category.category_id)}
                    >
                        <AiTwotoneDelete />
                    </Button>
                    </td>
                </tr>
                )})}
          </tbody>
        </Table>
      </div>
    );
}

export default Categories;
