import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css"


function Home() {
    return ( 
        <div className="home">
           <Sidebar />
           <div className="homeContainer">
            <Navbar />
            </div>

        </div>
     );
}

export default Home;