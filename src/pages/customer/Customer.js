import React from "react";
import * as customerApi from "../../api/customer";
import { useState, useEffect } from "react";
import Loadpage from "../../components/loadpage/Loadpage";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import moment from "moment";

import { BiDetail } from "react-icons/bi";

function Customer() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await customerApi.get("customer");
      setCustomers(data.customers);
      setLoading(false);
    };
    fetchAPI();
  }, []);

  if (loading) return <Loadpage />;
  else
    return (
      <div className="data-table">
        <div className="data-table__heading">
          <span className="data-table__title">List customer</span>
        </div>
        <Table bordered hover>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Dob</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Gmail</td>
              <td className="data-table__heading--manipulation">Thao tác</td>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => {
              return (
                <tr key={index}>
                  <td>{customer.customer_id}</td>
                  <td>{customer.customer_name}</td>

                  <td>
                    {moment(customer.customer_dob).utc().format("DD-MM-YYYY")}
                  </td>
                  <td>Email</td>
                  <td>{customer.customer_phone}</td>
                  <td>{customer.customer_phone}</td>
                  <td>
                    <Link
                      to={`/customer/customerDetail/${customer.customer_id}`}
                      className="link"
                    >
                      <Button
                        // className="data-table__heading--button"
                        variant="outline-warning"
                      >
                        <BiDetail />
                      </Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
}

export default Customer;
