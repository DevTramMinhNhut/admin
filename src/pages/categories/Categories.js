import React from "react";
import * as category from '../../api/category';
import { useState, useEffect } from "react";
import Loadpage from "../../components/loadpage/Loadpage";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";

const deleteCategory = (user_id) => {
  const agreeDelete = window.confirm(`bạn có muốn xóa user_id: ${user_id}`);
  if (agreeDelete) {
    window.alert(`Bạn đã xóa thành công user_id:  ${user_id}`);
  }
  return 0;
};

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await category.get("categories");
      setCategories(data.categories);
      setLoading(false);
    };
    fetchAPI();
  }, []);

  if (loading) return <Loadpage />;
  else
    return (
      <div className="data-table">
        <div className="data-table__heading">
          <span className="data-table__title">Categories</span>
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
              <td style={{width:"175px"}}>Thao tác</td>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => {
                return (
                <tr key={index}>
                    <td>{category.category_id}</td>
                    <td>{category.category_name}</td>
                    <td>{category.category_img}</td>
                    <td>{category.createdAt}</td>
                    <td>{category.updatedAt}</td>
                    <td>
                    <Link
                        to={`/categories/update-category/${category.category_id}`}
                        className="link"
                    >
                        <Button variant="outline-warning">Update</Button>
                    </Link>
                    <Button style={{float: 'right'}}
                        variant="outline-danger"
                        onClick={() => deleteCategory(category.category_id)}
                    >
                        Delete
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
