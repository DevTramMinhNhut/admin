import "./featured.css"
import { AiOutlineMore } from 'react-icons/ai';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Featured() {
    return ( 
        <div className="featured">
            <div className="top"> 
            <h1 className="title">Total Revenue </h1>
            <AiOutlineMore  />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar 
                    value={70} 
                    text={"70%"}
                    strokeWidth={3} />
                </div>
                <p className="tile">Total sales made today </p>
                <p className="amount">420 đ</p>
            </div>
        </div>
     );
}

export default Featured;
