import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './new.scss';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';

const New = ({inputs,title}) => {
  const [file, setFile] = useState("");
  return (
    <div className="new">
      <Sidebar />
      <div className="newCotainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        
        <div className="bottom">
          
      <div className="left">
        <img src={file ? URL.createObjectURL(file) : "https://imgs.search.brave.com/sa5OfyBRlSGBtf8iUX42YmKMVNm0yBpNEwAgvfQcefQ/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly90aGFp/Z2lmdHMub3IudGgv/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MDMvbm8taW1hZ2Uu/anBn"} alt="no image"  />
      </div>
      
      <div className="right">
        <form>
        <div className="formInput">
        <label htmlFor="file">Upload an Image:<DriveFolderUploadOutlinedIcon className="icon" /></label>
        <input type="file" id="file" onChange={e=>setFile(e.target.files[0])}  style={{display:"none"}}/>
      </div>

      {inputs.map((input) => (
      <div className="formInput" key={input.id}>
        <label>{input.label}</label>
        <input type={input.type} placeholder={input.placeholder} />
      </div>
        ))}
      <button>Send</button>  
      
        </form>
      </div>

        </div>
        
      </div>
    </div>
  )
}
        

       

export default New
