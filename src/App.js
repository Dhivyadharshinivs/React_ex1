import React, {useEffect, useState} from 'react';
import './App.css';
import bike1 from './images/bike1.jpg';
import bike2 from './images/bike2.jpg';
import bike3 from './images/bike3.jpg';
import bike4 from './images/bike4.jpg';
import bike5 from './images/bike5.jpg';



function App () {
  const[selectedImage,setSelectedImage]=useState(0)
  const[allImages,setAllImages]=useState([bike1,bike2,bike3,bike4,bike5])

  useEffect(()=> {
    setInterval(()=>{
      setSelectedImage(selectedImage=> selectedImage< 5?selectedImage+1:0)
    },3000)
  },[]);
  
  
  return (
    <div className="App">
      <header className="App-header">
        BRANDS OF BIKES
      </header>
      <img src={allImages[selectedImage]} alt="bikes" height="400px" width="500px"/>
      <div className="btn">
      <button className="prev"
      onClick={()=>{
        if(selectedImage > 0)
        setSelectedImage(selectedImage-1)
      }}>
      PREV</button>
      <button className='next'
      onClick={()=>{
        if(selectedImage<allImages.length - 1)
        setSelectedImage(selectedImage+1)
      }}>
      NEXT</button>
      </div>
      <div className='scroll'>
        <h3>Bikes Name List</h3>
        <ul>
          <li>Yamaha R15</li>
          <li>Suzuki Gixer150</li>
          <li>Harley Davidson</li>
          <li>Yamaha M15</li>
          <li>Dominor400</li>
          <li>Yamaha R15</li>
          <li>Suzuki Gixer150</li>
          <li>Harley Davidson</li>
          <li>Yamaha M15</li>
          <li>Dominor400</li>
        </ul>
      </div>
      
    </div>
  );
}

export default App;
