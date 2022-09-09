import "./widget.css";
import { AiOutlineUp, AiOutlineUser } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { BiWallet } from 'react-icons/bi';

const Widget = ({type}) => {
    let data;

    switch(type){
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See all users',
                icon: <AiOutlineUser className="icon" 
                style={{
                    color:"red", backgroundColor:"rgba(255,0,0,0.2)"  
                }} />,
            };
            break;
            case 'order':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: 'View all orders',
                icon: <BsCart2 className="icon"
                style={{
                    color:"goldenrod", backgroundColor:"rgba(218,165,32,0.2)"  
                }}
                 />,
            };
            break;
            case 'earning':
                data = {
                    title: 'EARNING',
                    isMoney: true,
                    link: 'View net earnings',
                    icon: <HiOutlineCurrencyDollar className="icon"
                    style={{
                        color:"green", backgroundColor:"rgba(0,128,0,0.2)"  
                    }}
                    />,
                };
                break;
                case 'balance':
                    data = {
                        title: 'BALANCE',
                        isMoney: true,
                        link: 'See details',
                        icon: <BiWallet className="icon"
                        style={{
                            color:"purple", backgroundColor:"rgba(128,0,128,0.2)"  
                        }}
                        />,
                    };
                    break;
        default:
            break;
    }


    return ( 
    <div className="widget"> 
        <div className="left"> 
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "đ"} {200}</span>
            <span className="link"> {data.link}</span>
        </div> 
        <div className="right">
            <div className="percentage positive">
            <AiOutlineUp />
                20%
            </div> 
            {data.icon}
        </div> 
    </div>

     );
}

export default Widget;