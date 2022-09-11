import React from 'react';
import * as category from '../../../api/category';
import { useState, useEffect } from "react";
import Loadpage from "../../loadpage/Loadpage";


function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchAPI = async () => {
        const data = await category.get('categories');
        setCategories(data.categories);
        setLoading(false);
    };
    fetchAPI();
}, []);
   
    if (loading) return <Loadpage />;
    else
  return (
    categories.map((category,index)=>{
        return (
            <tr key= {index}>
            <td>{category.category_id}</td>
            <td>{category.category_name}</td>
            <td>{category.category_img}</td>
            <td>{category.createdAt}</td>
            <td>{category.updatedAt}</td>
            </tr>
            )
        })
    )
}

export default Categories