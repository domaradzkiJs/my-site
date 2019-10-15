import React from 'react';



const Header = ({swapLang,tgl}) => (
    <header className="App-header wrapper">

 
{tgl ?
       <div>
        <div className="top">
            <h1>Moje <span>Projekty</span></h1>  <button className="lang" onClick={swapLang}> {'EN'} </button>
         </div>
        
        
       
         <h2>Paweł Domaradzki</h2>
         <p>Jestem początkującym Front-end developerem, z podstawami React'a i chęcią do dalszej nauki</p>
        </div>
        
:

     <div>
         <div className="top">
            <h1>My <span>Projects</span></h1>  <button className="lang" onClick={swapLang}> {'PL'} </button>
         </div>

         <h2>Paweł Domaradzki</h2>
         <p>I am junior front-end developer with React basics and willingness to further learning</p>
    </div>} 
    

   
    </header>
)
    

  
    

export default Header;