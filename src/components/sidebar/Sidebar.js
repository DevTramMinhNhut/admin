import "./sidebar.css"
import { Link } from "react-router-dom";
import { MdDashboard } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" className="sidebar__link" >
                    <span className="logo"> Siêu thị mini </span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" className="sidebar__link">
                        <li>
                            <MdDashboard className="icon" />
                            <span>DashBoard</span>
                        </li>
                    </Link>
                    <p className="title">LIST</p>
                    <Link to="/users" className="sidebar__link" >
                        <li>
                            <FiUser />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/categories" className="sidebar__link" >
                        <li>
                            <span>Categories</span>
                        </li>
                    </Link>
                    <Link to="/products" className="sidebar__link" >
                        <li>
                            <span>Products</span>
                        </li>
                    </Link>
                    <Link to="/discount" className="sidebar__link" >
                        <li>
                            <span>Discount product</span>
                        </li>
                    </Link>
                    <Link to="/staff" className="sidebar__link" >
                        <li>
                            <span>Staff</span>
                        </li>
                    </Link>
                    <Link to="/customer" className="sidebar__link" >
                        <li>
                            <span>Customer</span>
                        </li>
                    </Link>
                  
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
