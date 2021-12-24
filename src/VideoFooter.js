import React from "react";
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from "react-ticker"
function VideoFooter({userName,description,song}) {
    return(
        <div className="videoFooter">
            <div className="footerText">
                <h3>@{userName}</h3>
                <p>{description}</p>
                <div className="footerTicker">
                <MusicNoteIcon className="footerIcon"/>
                <Ticker mode="smooth" className="ticker">{
                    ({index})=>(
                       <p>{song}</p>
                    )}</Ticker>
                </div>
                
            </div>
            <img className="footer_spinner" src="https://static.thenounproject.com/png/934821-200.png" alt="" />
        </div>
    );
}
export default VideoFooter;