import { Table } from "react-bootstrap";
import "./datatable.css"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Categories from "./category/Categories";
import Products from "./products/Products";

const Datatable = ({label, name,title}) => {
const tableHeader = () => {
  const header = Object.keys(label);
  return header.map((key, index) => <th key={index}>{key}</th>);
};

    return (  
        <div className="datatable">
          <div className="datatableTile">
            {title}
            <Link to="/users/new" style={{textDecoration: 'none'}} className="link" >
              <Button variant="info">Add user</Button>
            </Link>
          </div>
            <Table striped bordered hover>
      <thead>
        <tr>{tableHeader()}</tr>
      </thead>
      <tbody>
      {name === 'categories'
        ?  <Categories />
        :  <Products />
      }
      </tbody>
    </Table>
        </div>
    );
}

export default Datatable;