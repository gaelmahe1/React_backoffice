import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';

const Single = () => {
  return (
    <div className="single">
    <Sidebar />
    <div className="singleContainer">
      <Navbar />
      <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
          <h1 className="title">Information</h1>
          
          <div className="item">
          <img src="https://imgs.search.brave.com/Sx24wLMGvtSAdMC3741U5EecirdHam_vMfW3HEEizvU/rs:fit:684:625:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC9mYy8wMS9mZC9m/YzAxZmQ1Y2Y0NjE3/NTdjNWYxYjdiZDMz/NjViZDc0Ni5qcGc" alt="avatar" className="itemImg" />
          
          <div className="details">
            <h1 className="itemTitle">Manon Flask</h1>
            <div className="detailItem">
              <span className="itemKey">Email:</span>
              <span className="itemvalue">manonflask@gmail.com</span>
            </div>
            
            <div className="detailItem">
              <span className="itemKey">Phone:</span>
              <span className="itemvalue">+33 67 43 84 912</span>
            </div>
            
            <div className="detailItem">
              <span className="itemKey">Adress:</span>
              <span className="itemvalue">16 rue des richebourgs 78500 Sartrouville</span>
            </div>
            
            <div className="detailItem">
              <span className="itemKey">Country:</span>
              <span className="itemvalue">France</span>
            </div>
            
          </div>
          </div>
          
        </div>
        
        <div className="rigth">
          <Chart  aspect={3 / 1} title="User Spending (Last 6 Months)"/>
        </div>
      </div>
      
      <div className="bottom">
      <h1 className="title">Last Transactions</h1>
        <List />
      </div>
    
    </div>
    </div>
  )
}

export default Single
