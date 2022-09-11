import React from 'react';
// import * as category from '../../../api/category';
import { useState, useEffect } from "react";
// import Loadpage from "../../loadpage/Loadpage";
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';



export const productTitle =
{
    id: "id",
    name: "Name",
    img: "img",
    create_at: "Created_at",
    update_at: "Updated_at",
};


function Products() {
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
    return (
        <div className="data-table">
            <div className="data-table__heading">
                <span className='data-table__title'>Products</span>
                <Link to="/users/new" style={{ textDecoration: 'none' }} className="link" >
                    <Button variant="outline-success">Add products</Button>
                </Link>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>{productTitle.id}</td>
                        <td>{productTitle.name}</td>
                        <td>{productTitle.img}</td>
                        <td>{productTitle.create_at}</td>
                        <td>{productTitle.update_at}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                        <td>e</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Products
