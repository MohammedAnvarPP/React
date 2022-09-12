import React,{useState} from "react";
import heart from '../icon/red-heart-icon.svg'

function Card(prop){
    // console.log("hello",prop);
let  newvar=useState("Add To Favourite");
let activeClass=useState("");
let[classState,setClassState]=activeClass;
let [btname,setfav]=newvar;
function Btclicked(imgSrc){
    
    setfav((prevState)=>{
        if(prevState==="Add To Favourite"){
            prop.getFavImages(imgSrc);
            return "Added To Favourite"
        }else{
            
            return "Add To Favourite"
   
        }
    });
    setClassState((prevState)=>{
        if(prevState===""){
            return "active"
        }else{
            return "";
        }
    });
 }
    return(
    
         
            <div className={`card ${classState}`}>
            <img src={heart} alt="" className="icon"/>
            <img src={prop.cardContent.imgSrc}/>
            <h3>Name:{prop.cardContent.name}</h3>
            <p>Ph:{prop.cardContent.phone}</p>
            <p>Email:{prop.cardContent.email}</p>
            <button onClick={(()=>{
                Btclicked(prop.cardContent.imgSrc);
            })} className="bt-addtofv">{btname}</button>

        </div>
        
    );
   
}
export default Card;