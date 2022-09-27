import React from "react";
import * as productApi from "../../api/product";
import { useState, useEffect } from "react";
import Loadpage from "../../components/loadpage/Loadpage";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";

import { BiDetail } from "react-icons/bi";
import { GrUpdate } from "react-icons/gr";
import { AiTwotoneDelete } from "react-icons/ai";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteC, setDeletC] = useState(false);
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await productApi.get("product");
      setProducts(data.products);
      setLoading(false);
      setDeletC(false);
    };
    fetchAPI();
  }, [deleteC]);

  const deleteProduct = (product_id) => {
    const agreeDelete = window.confirm(
      `Bạn có muốn xóa product id: ${product_id} không ??`
    );
    if (agreeDelete) {
      axios.delete(`http://localhost:3000/product/${product_id}`);
      window.alert(`Bạn đã xóa thành công product id: ${product_id}`);
      setDeletC(true);
    }
    return 0;
  };

  if (loading) return <Loadpage />;
  else
    return (
      <div className="data-table">
        <div className="data-table__heading">
          <span className="data-table__title">List products</span>
          <Link
            to="/products/create-product"
            style={{ textDecoration: "none" }}
            className="link"
          >
            <Button variant="outline-success">Add product</Button>
          </Link>
        </div>
        <Table bordered hover>
          <thead>
            <tr>
              <td>id</td>
              <td>Name</td>
              <td>Category</td>
              <td>Price</td>
              <td>Discount</td>
              <td>Storage</td>
              <td>Sold</td>
              <td style={{ width: "14%" }}>Thao tác</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{product.product_id}</td>
                  <td>{product.product_name}</td>
                  <td>{product.category.category_name}</td>
                  <td>
                    {product.product_price.toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })}{" "}
                  </td>
                  <td>Discount</td>
                  <td>{product.storage.product_quantity}</td>
                  <td>{product.storage.product_sold}</td>
                  <td>
                    <Link
                      to={`/products/detailProduct/${product.product_id}`}
                      className="link"
                    >
                      <Button
                        className="data-table__heading--button"
                        variant="outline-warning"
                      >
                        <BiDetail />
                      </Button>
                    </Link>
                    <Link
                      to={`/products/update-product/${product.product_id}`}
                      className="link"
                    >
                      <Button
                        style={{ marginLeft: "8px" }}
                        className="data-table__heading--button"
                        variant="outline-warning"
                      >
                        <GrUpdate />
                      </Button>
                    </Link>
                    <Button
                      className="data-table__heading--button"
                      style={{ float: "right" }}
                      variant="outline-danger"
                      onClick={() => deleteProduct(product.product_id)}
                    >
                      <AiTwotoneDelete />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
}

export default Products;
