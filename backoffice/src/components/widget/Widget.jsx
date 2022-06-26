import './widget.scss';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { useState } from 'react';

const Widget = ({type}) => {
    const [amount, setAmount] = useState(null);
    const [diff, setDiff] = useState(null);
  let data;
  
  //Temporaire 
 
    switch(type) {
        case "user":
            data={
                tittle:"USERS",
                isMoney:false,
                link:"See all users",
                icon: <PersonOutlineOutlinedIcon className="icon" style={{color:"crimson", backgroundColor:"rgba(255, 0, 0, 0.2)"}} />,
            };
                break;

        case "order":
            data={
                tittle:"ORDERS",
                isMoney:false,
                link:"View all orders",
                icon: (<ShoppingCartOutlinedIcon className="icon" style={{color:"goldenrod", backgroundColor:"rgba(218, 165, 32, 0.2)"}} />)
            };
                break;

        case "earning":
            data={
                tittle:"EARNINGS",
                isMoney:true,
                link:"View net earnings",
                icon: (<MonetizationOnOutlinedIcon className="icon" style={{color:"green", backgroundColor:"rgba(0, 128, 0, 0.2)"}} />)
            };
                break;

        case "balance":
            data={
                tittle:"BALANCE",
                isMoney:true,
                link:"See details",
                icon: (<AccountBalanceWalletOutlinedIcon className="icon" style={{color:"purple", backgroundColor:"rgba(128, 0, 128, 0.2)"}} />)
            };
                break;

            default:
                break;
    }

    useEffect(() => {
        const fetchData = async () => {
          const today = new Date();
          const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
          const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));
    
          const lastMonthQuery = query(
            collection(db, data.query),
            where("timeStamp", "<=", today),
            where("timeStamp", ">", lastMonth)
          );
          const prevMonthQuery = query(
            collection(db, data.query),
            where("timeStamp", "<=", lastMonth),
            where("timeStamp", ">", prevMonth)
          );
    
          const lastMonthData = await getDocs(lastMonthQuery);
          const prevMonthData = await getDocs(prevMonthQuery);
    
          setAmount(lastMonthData.docs.length);
          setDiff(
            ((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) *
              100
          );
        };
        fetchData();
      }, []);
  
    return (
    <div className="widget">
        <div className="left">
            <span className="tittle">{data.tittle}</span>
            <span className="counter">{data.isMoney && "€"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        
        <div className="right">
            <div className="percentage positive">
            <KeyboardArrowUpOutlinedIcon />
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget