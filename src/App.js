import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Middle';
import Footer from './components/Footer';
import Card from './components/Card'
function App() {
  return (
    <div className="App">
      <div className='bg-main'>
      <Header/>
      <Body/>
      <div className='divv'>
      <Card
      CardComponent={{ 
        imgSrc:"https://images.unsplash.com/photo-1593417033920-3c04818ee8a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      name:"Alappuzha",
      phone:"1234567890",
      email:"test@gmail.com"}
      }
       
        />
      <Card
      CardComponent={{imgSrc:"https://images.unsplash.com/photo-1623302485960-d61687113a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80",
      name:"Wayanad",
      phone:"1234567890",
      email:"test@gmail.com"}}
        />
        <Card
      CardComponent={{imgSrc:"https://images.unsplash.com/photo-1625721838087-c46e51c89558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name:"Kochi",
      phone:"1234567890",
      email:"test@gmail.com"}}
        />
        <Card
      CardComponent={{imgSrc:"https://images.unsplash.com/photo-1546874483-c67f0b83f31d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name:"Idukki",
      phone:"1234567890",
      email:"test@gmail.com"}}
        />
      </div>
      </div>
      
      
      {/* <Footer/> */}
    

    </div>
  );
}

export default App;
