import React from 'react'
import Contect from '../footer/Contect'
import FooterBox from '../footer/FooterBox'
import VideoBox from '../footer/VideoBox'
import Rating from '../footer/Rating'
import Reviews from '../footer/Reviews'
import { useLocation } from 'react-router-dom';


const Footer = () => {
  const location = useLocation();

  const isContactPage = location.pathname === '/enquiry';
  return (
    <div>
        {!isContactPage && <VideoBox />}
        {!isContactPage && <Rating />}
        {!isContactPage && <Reviews />}
        <Contect/>
        <FooterBox/>
    </div>
  )
}

export default Footer
