import React from 'react';


import Header from '../Components/Header/Header'
import Footer from './Footer/Footer'
import '../App.css'

function Index(props) {
  return (
    <div className="AppData">
      <Header />
        <div className="middel-body container">
          {props.children}
        </div>
      <Footer/>
    </div>
  );
}

export default Index;
