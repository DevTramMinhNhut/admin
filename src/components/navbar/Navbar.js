import "./navbar.css"
import { FcSearch } from 'react-icons/fc';
import { MdDarkMode } from 'react-icons/md';
import { BiBell } from 'react-icons/bi';
import { IoMenuSharp } from 'react-icons/io5';

function Navbar() {
    return ( 
    <div className="navbar">
        <div className="wrapper">
            <div className="search">
                <input type="text"  placeholder="Tìm kiếm......" />
                <FcSearch />
            </div>
            <div className="items">
                <div className="item">
                <MdDarkMode className="icon" />
                </div>
                <div className="item">
                <BiBell className="icon" />
                    <div className="counter">1</div>
                </div>
                <div className="item">
                <IoMenuSharp className="icon" />
                </div>
                <div className="item">
                    <img src="data:image/jpeg;base64,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" 
                    alt="" 
                     className="avatar" />
                </div>
            </div>

            
        </div>
    </div>
     );
}

export default Navbar;