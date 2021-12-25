import React,{useState,useEffect} from 'react';
// import {firebaseConfig,initializeApp} from './firebase';
import './App.css';
import Video from './Video';
import db from "./firebase";

function App() {
  const [videos,setVideos]=useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="App">
      <div className='heading'>
      <h3>SWIPE APP</h3>
      </div>
       <div className="app_videos">
         {videos.map(
           ({vidUrl,userName,description,song,likeCount,commentCount})=>(
           <Video 
           vidUrl={vidUrl}
           userName={userName}
           description={description}
           song={song}
           likeCount={likeCount}
           commentCount={commentCount}
           />
         )
        )}  
       </div>
    </div>
  );
}

export default App;