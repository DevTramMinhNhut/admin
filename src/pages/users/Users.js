import React from 'react';
// import * as category from '../../../api/category';
import { useState, useEffect } from "react";
// import Loadpage from "../../loadpage/Loadpage";
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';



export const userTitle =
{
  id: "1",
  name: "Name",
  img: "img",
  create_at: "Created_at",
  update_at: "Updated_at",
};


export const user =
{
  user_id: "1",
  user_name: "Name",
  user_img: "img",
  create_at: "Created_at",
  update_at: "Updated_at",
};


function Users() {
  //   const [products, setProducts] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   useEffect(() => {
  //     const fetchAPI = async () => {
  //         const data = await category.get('products');
  //         setProducts(data.products);
  //         setLoading(false);
  //     };
  //     fetchAPI();
  // }, []);

  //     if (loading) return <Loadpage />;
  //     else
  //   return (
  //     products.map((product,index)=>{
  //         return (
  //             <tr key= {index}>
  //             <td>{product.product_id}</td>
  //             <td>{product.product_name}</td>
  //             <td>{product.product_img}</td>
  //             <td>{product.createdAt}</td>
  //             <td>{product.updatedAt}</td>
  //             </tr>
  //             )
  //         })
  //     )


  // const [categories, setCategories] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //     const fetchAPI = async () => {
  //         const data = await category.get('categories');
  //         setCategories(data.categories);
  //         setLoading(false);
  //     };
  //     fetchAPI();
  // }, []);

  // if (loading) return <Loadpage />;
  // else
  //     return (
  //         categories.map((category, index) => {
  //             return (
  //                 <tr key={index}>
  //                     <td>{category.category_id}</td>
  //                     <td>{category.category_name}</td>
  //                     <td>{category.category_img}</td>
  //                     <td>{category.createdAt}</td>
  //                     <td>{category.updatedAt}</td>
  //                 </tr>
  //             )
  //         })
  //     )

  const deleteUser = (user_id) => {
    const agreeDelete = window.confirm(`bạn có muốn xóa user_id: ${user_id}`)
    if (agreeDelete) {
      window.alert(`Bạn đã xóa thành công user_id:  ${user_id}`)
    }
    return 0
  }

  return (
    <div className="data-table">
      <div className="data-table__heading">
        <span className='data-table__title'>Users</span>
        <Link to="/users/create-user" className="link" >
          <Button variant="outline-success">Add user</Button>
        </Link>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>{userTitle.id}</td>
            <td>{userTitle.name}</td>
            <td>{userTitle.img}</td>
            <td>{userTitle.create_at}</td>
            <td>{userTitle.update_at}</td>
            <td>Thao tác</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
            <td>e</td>
            <td>
              <Link to={`/users/update-user/${user.user_id}`} className="link" >
                <Button variant="outline-warning">Update</Button>
              </Link>
              <Button variant="outline-danger" onClick={() => deleteUser(user.user_id)}>Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Users
