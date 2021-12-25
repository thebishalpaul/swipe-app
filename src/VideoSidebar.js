import React,{ useState }  from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

import "./VideoSidebar.css"

function VideoSidebar({likeCount,commentCount}) {
    const [like,setLike]=useState(false);
    return(
        <div className="sidebar">
            <div className="sidebarButtons">
            {
            like? <FavoriteIcon fontSize="large" onClick={(e)=>setLike(false)}/>:
             <FavoriteBorderIcon fontSize="large" onClick={(e)=>setLike(true)} />
            }
                <p>{like ? (likeCount + 1) : (likeCount) }</p>
            </div>
            <div className="sidebarButtons">
                <CommentIcon fontSize="large"/>
                <p>{commentCount}</p>
            </div>
            <div className="sidebarButtons">
                <ShareIcon fontSize="large"/>
            </div>
        </div>
    );
}

export default VideoSidebar;