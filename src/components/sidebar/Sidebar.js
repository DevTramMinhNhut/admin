import "./sidebar.css"
import { Link } from "react-router-dom";
import { MdDashboard } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';


function Sidebar() {
    return ( 
    <div className="sidebar">
        <div className="top">
            <Link to="/" style={{textDecoration: 'none'}} >
            <span className="logo"> Siêu thị mini </span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <MdDashboard className="icon" />
                    <span>DashBoard</span>
                </li>
                <p className="title">LIST</p>
                <Link to="/users" style={{textDecoration: 'none'}} >
                <li>
                    <FiUser />
                    <span>Users</span>
                </li>
                </Link>
                <Link to="/categories" style={{textDecoration: 'none'}} >
                    <li>
                    <span>Category</span>
                    </li>
                </Link>
                <Link to="/products" style={{textDecoration: 'none'}} >
                    <li>
                    <span>Product</span>
                    </li>
                </Link>
                <li>
                <span>Orders</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>

    </div>
     );
}

export default Sidebar;