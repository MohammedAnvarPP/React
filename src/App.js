import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Middle';
import Footer from './components/Footer';
import Card from './components/Card';
import cardData from './components/cardData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {

  
let [favImages,setFavImages]=useState([]);
  //get all the fav images

  // let [removeImg,deleteFavImg]=useState();

  function getFavImages(imgSrc){
    // console.log(imgSrc);
    setFavImages([...favImages, imgSrc])
    console.log(favImages);

  }
  let likedImages=favImages.map((imgSrc)=>{
    return(
      <div className="favImage">
        <i className='far fa-times-circle' onClick={()=>{
          removeImg(imgSrc)
        }}>X</i>
      
      <img src={imgSrc}/>
      </div>
    )
  })
  function removeImg(imgSrc){
    setFavImages([...favImages].filter((currentImg)=>{
      return currentImg !=imgSrc
    }))
    // console.log(favImages);
    
  }
let card=cardData.map((cardItem)=>{
  return(
    <Card cardContent={
      {
        imgSrc:cardItem.imgSrc,
        name:cardItem.name,
        phone:cardItem.phone,
        email:cardItem.email,
      }
    }
    getFavImages={
      getFavImages
    }
    removeImg={
      removeImg
    }
    />
  )
});
  return (
    <div className="App">
      <div className='bg-main'>
      <Header/>
      <Body/>
      <div className='divv'>
        
      {card}
      <h1>Fav</h1>
      <div className='favimg'>
      {likedImages}
      </div>
      </div>
      </div> 
    
      <Footer />
       </div>
  );
}

export default App;
