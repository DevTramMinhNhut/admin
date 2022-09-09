import "./sidebar.css"
import { MdDashboard } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';

function Sidebar() {
    return ( 
    <div className="sidebar">
        <div className="top">
            <span className="logo">
                Siêu thị mini
            </span>
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
                <li>
                <FiUser />
                <span>Users</span>
                </li>
                <li>
                <span>Product</span>
                </li>
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