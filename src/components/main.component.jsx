import React from 'react';
import Item from './item.component';


class Main extends React.Component{
    constructor(props) {
        super(props)

        
        this.state= {
           
            items: [

            {
                id:1,
                title: 'Recipe app',
                text: 'Aplikacja wykorzystująca edamam API do wyszukiwania przepisów kulinarnych',               
                image: 'https://i.imgur.com/lebNiNi.png',
                link: 'https://sweetrecipes.000webhostapp.com/'
            },
            {
                id:2,
                title: 'Champions',
                text: `Moja pierwsza aplikacja z wykorzystaniem react'a `,
                image: 'https://i.imgur.com/6qgHVoK.png',
                link: 'https://domaradzki95.github.io/Champions/'
            },
            {
                id:3,
                title: 'LoL app',
                text: 'Aplikacja wyświetlająca informacje o graczach League of Legends i historię ich meczy, korzystająca z Riot API',
                image: 'https://i.imgur.com/YgxdCI4.png',
                link: 'https://domaradzki95.github.io/simpleLolApp/'  
            },
            {
                id:4,
                title: 'Simple game',
                text: `Prosta gra platformowa stworzona przy pomocy framework'a Phaser 2`,
                image: 'https://i.imgur.com/cC64hDB.png',
                link: 'https://domaradzki95.github.io/firstGame/'  
            }
        ],

        itemsEn: [

            {
                id:1,
                title: 'Recipe app',
                text: 'Web-app for searching recipes, it is based on Edamam API',               
                image: 'https://i.imgur.com/lebNiNi.png',
                link: 'https://sweetrecipes.000webhostapp.com/'
            },
            {
                id:2,
                title: 'Champions',
                text: `League of legends champions browser`,
                image: 'https://i.imgur.com/6qgHVoK.png',
                link: 'https://domaradzki95.github.io/Champions/'
            },
            {
                id:3,
                title: 'LoL app',
                text: 'My first a bit larger project with Vanilla Javascript, it uses Riot API to search and display players match history',
                image: 'https://i.imgur.com/YgxdCI4.png',
                link: 'https://domaradzki95.github.io/simpleLolApp/'  
            },
            {
                id:4,
                title: 'Simple game',
                text: `My attempt to create a simple 2D platform game with a framework Phaser 2`,
                image: 'https://i.imgur.com/cC64hDB.png',
                link: 'https://domaradzki95.github.io/firstGame/'  
            }
        ]
    
    
    }
    
    }


    render(){
        console.log(this.props);
     
       
        
        return(
        <div className='wrapper'>
            <main className='container'>
            
                {   
                    this.props.tgl ?
                 
                    this.state.items.map(({id, title, text, image, link})=> (
                    
                        <Item key={id} title={title} text={text} image={image}  link={link}/>
                        
                    ) )

                    :

                    this.state.itemsEn.map(({id, title, text, image, link})=> (
                    
                        <Item key={id} title={title} text={text} image={image}  link={link}/>
                        
                    ) )


                }
            
            
            </main>
        </div>


        ) 

    }
}


export default Main;


/* 
           <div className="item" style={{backgroundImage: `url("${Champ}")`}}></div>
           <div className="item" style={{backgroundImage: `url("${Lol}")`}}></div>
           <div className="item" style={{backgroundImage: `url("${Game}")`}}></div>
*/