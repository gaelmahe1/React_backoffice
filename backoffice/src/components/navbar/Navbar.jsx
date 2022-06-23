import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
      <div className="search">
        <input type="text" placeholder="Search..." />
        <SearchOutlinedIcon/>
      </div>
      <div className="items">
        
        <div className="item">
        <LanguageOutlinedIcon className="icon"/>
        English
        </div>
        
        <div className="item">
        <DarkModeOutlinedIcon className="icon"/>
        </div>
        
        <div className="item">
        <FullscreenExitOutlinedIcon className="icon"/>
        </div>
        
        <div className="item">
        <NotificationsNoneOutlinedIcon className="icon"/>
        <div className="counter">1</div>
        </div>
        
        <div className="item">
        <ChatBubbleOutlineOutlinedIcon className="icon"/>
        <div className="counter">2</div>
        </div>
        
        <div className="item">
        <ListOutlinedIcon className="icon"/>
        </div>
       
        <div className="item">
        <img src="https://imgs.search.brave.com/AvmDlUEnuxu0k6uK8RmX5FhLZQx9VptLJVNbDN-ZVqk/rs:fit:735:736:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC8yYS8wNi8xMy8y/YTA2MTNlNmRkNzY2/MjBmMTFhZGMwMjIx/ZjlmMGYyYi5qcGc" alt="Profile picture" className="avatar" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar