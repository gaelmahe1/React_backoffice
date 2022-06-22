import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">WebFusion Admin</span>  
        </div>
        
        <div className="topRight">
            <div className="topbarIconContainer">
                <NotificationsNone/>
                <span className="topIconBadge">2</span>
            </div>

            <div className="topbarIconContainer">
                <Language/>
                <span className="topIconBadge">2</span>
            </div>

            <div className="topbarIconContainer">
                <Settings/>
            </div>
            <img src="https://imgs.search.brave.com/MTI0GmdD7i4R2FX8bPx0nqjwC6vH1mdGOjFL9116T5Y/rs:fit:1200:798:1/g:ce/aHR0cHM6Ly9zbS5h/c2ttZW4uY29tL3Qv/YXNrbWVuX2luL2Fy/dGljbGUvZi9mYWNl/Ym9vay1wL2ZhY2Vi/b29rLXByb2ZpbGUt/cGljdHVyZS1hZmZl/Y3RzLWNoYW5jZXMt/b2YtZ2V0dGluX2Zy/M24uMTIwMC5qcGc" alt="Profile picture" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
 