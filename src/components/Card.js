import React,{useState} from "react";
import heart from '../icon/red-heart-icon.svg'

function Card(prop){
let  newvar=useState("Add To Favourite");
let activeClass=useState("");
let[classState,setClassState]=activeClass;
let [btname,setfav]=newvar;
function Btclicked(){
    setfav((prevState)=>{
        if(prevState==="Add To Favourite"){
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
            <img src={prop.CardComponent.imgSrc}/>
            <h3>Name:{prop.CardComponent.name}</h3>
            <p>Ph:{prop.CardComponent.phone}</p>
            <p>Email:{prop.CardComponent.email}</p>
            <button onClick={Btclicked} className="bt-addtofv">{btname}</button>

        </div>
        
    );
   
}
export default Card;