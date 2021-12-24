import React, {useRef,useState} from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
function Video({
vidUrl,
userName,
description,
song,
likeCount,
commentCount
}) {
    const videoRef=useRef();
    // console.log(videoRef);
    const [playing,setPlaying]=useState(false);
    const onVideoPress=()=>{
       if(playing){
           videoRef.current.pause();
           setPlaying(false);
       } else{
        console.log(videoRef.current);
        videoRef.current.play();
        setPlaying(true);
       }
    }
    return (
        <div className="videoCard">
           <video 
           className="videoDisplay"   
           onClick={onVideoPress} 
           ref={videoRef}
           loop
           src={vidUrl}
           alt="Reels Here"/>
          
           
           <VideoFooter 
           userName={userName}
           description={description}
           song={song}
           />

           <VideoSidebar 
           likeCount={likeCount}
           commentCount={commentCount}
           />
        </div>
    );
}

export default Video;