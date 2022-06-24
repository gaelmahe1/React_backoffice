import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
    <h1 className="tittle">Total Revenue</h1>
    <MoreVertIcon fontsize="small" />
      </div>
      
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        
        <p className="tittle">Total sales made today</p>
        <p className="amount">€431</p>
        <p className="desc">Previous payment processing. Last payment may bot be included.</p>
        
        <div className="summary">
          
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontsize="small" />
              <div className="resultAmount">€12.3k</div>
            </div>
          </div>
         
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontsize="small" />
              <div className="resultAmount">€1.0k</div>
            </div>
          </div>
         
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontsize="small" />
              <div className="resultAmount">€11.3k</div>
            </div>
          </div>
         
       
        </div>
      </div>
    </div>
  )
}

export default Featured
