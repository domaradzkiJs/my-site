import React from 'react';




const Item =({title, text, image, link})=> (



    <a className="parent" href={link} target="_blank" rel="noopener noreferrer">    
        <div className="item" style={{backgroundImage: `url("${image}")`}}></div>
        <div className="overlay">  </div>        
      
        <div className="textContain">
            <div className="title">{title}</div> 
            <div className="text">{text}</div> 
        </div>             
    </a>
 


)

export default Item;