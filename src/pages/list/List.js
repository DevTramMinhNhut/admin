import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./list.css"
import Datatable from "../../components/datatable/Datatable";


const List = ({label, name, title }) => {
    return ( 
        <div className="list">
            <Sidebar />
            <div className="listContainer">
            <Navbar />
            <Datatable name={name} label={label} title={title}/>
            </div>
        </div>
     );
}

export default List;