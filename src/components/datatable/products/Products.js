import React from 'react';
import * as category from '../../../api/category';
import { useState, useEffect } from "react";
import Loadpage from "../../loadpage/Loadpage";


function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchAPI = async () => {
        const data = await category.get('products');
        setProducts(data.products);
        setLoading(false);
    };
    fetchAPI();
}, []);
   
    if (loading) return <Loadpage />;
    else
  return (
    products.map((product,index)=>{
        return (
            <tr key= {index}>
            <td>{product.product_id}</td>
            <td>{product.product_name}</td>
            <td>{product.product_img}</td>
            <td>{product.createdAt}</td>
            <td>{product.updatedAt}</td>
            </tr>
            )
        })
    )
}

export default Products