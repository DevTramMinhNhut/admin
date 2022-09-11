import React from 'react';
// import * as category from '../../api/category';
import { useState, useEffect } from "react";
import Loadpage from "../../components/loadpage/Loadpage";
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';


export const categoryTitle =
{
    id: "id",
    name: "Name",
    img: "img",
    create_at: "Created_at",
    update_at: "Updated_at",
};


function Categories() {
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
                <span className='data-table__title'>Categories</span>
                <Link to="/users/new" style={{ textDecoration: 'none' }} className="link" >
                    <Button variant="outline-success">Add categories</Button>
                </Link>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>{categoryTitle.id}</td>
                        <td>{categoryTitle.name}</td>
                        <td>{categoryTitle.img}</td>
                        <td>{categoryTitle.create_at}</td>
                        <td>{categoryTitle.update_at}</td>
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

export default Categories


