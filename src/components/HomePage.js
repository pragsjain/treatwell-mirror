import React from 'react'
import HomePageAppointment from "./HomePageAppointment.js";
import HomePageBooking from "./HomePageBooking.js";
import HomePageArticle from "./HomePageArticle.js";
import Header from './Header.js';
import Footer from './Footer.js';

function HomePage() {
  return (
    <>
    <Header/>
    <HomePageAppointment/>
    <HomePageBooking/>
    <HomePageArticle/>
    <Footer/>
    </>
  )
}



export default HomePage