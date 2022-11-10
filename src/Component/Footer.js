import React from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'
import { BsTwitter } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { FaTripadvisor } from 'react-icons/fa'
import './Footer.css';
const Footer = () => {
  return (
    <div >
      <div className='vado'>
      <video src='https://player.vimeo.com/external/513688814.sd.mp4?s=9add9732814f41f62519f18dc043b4bd40ec6eba&profile_id=164&oauth2_token_id=57447761'  muted autoPlay loop ></video>
      </div>
      <section className='sec33'>
      <div className='seccontent container'>
        <div className='content '>
          <small >KEEP IN TOUSH</small>
          <h2>Travel with us</h2>
        </div>
        <div className='gg flex'>
          <input type="text" placeholder='Enter Email Address....'/>
          <button className='btn flex'>SEND <RiSendPlaneFill className='ico'/> </button>
        </div>
      </div>

      <section className='sec1 container'>
        <div className='sec2'>
          <h2>Travel</h2>
          <p>lorem ipsum dolor sit amet. consecteture adipisicing elit. ulllam
            <br/>
            inventore eas fugo hic cum valuptatem minima. tempore non adio 
            <br/>
            provident nobis ipsam at. doloremque sed cupiditate ipsum in. atque
            <br/>
            soluta?
          </p>
          <div className='sec5'>
            <BsTwitter className='icon'/>
            <AiFillYoutube className='icon'/>
            <BsInstagram className='icon'/>
            <FaTripadvisor className='icon'/>
          </div>
        </div>
      <section className='sec66'>
      <div className='sec55' style={{marginRight: "40px"}}>
          <h5>OUR AGENCY</h5>
          <p>>Services</p>
          <p>>Instagram</p>
          <p>>Agency</p>
          <p>>Tourism</p>
          <p>>payment</p>
        </div>
        <div className='sec55' style={{marginRight: "20px"}}>
          <h5>PropTypes</h5>
          <p>>Booking</p>
          <p>>Rentaicar</p>
          <p>>HostlWorld</p>
          <p>>Trivago</p>
          <p>>TripAdvisr</p>
        </div>
        <div className='sec55' >
          <h5>LEST MINUTE</h5>
          <p>>London</p>
          <p>>indonesia</p>
          <p>>Europe</p>
          <p>>Oceanig</p>
        </div>
      </section>
      
      </section>
      <div className='vv container'>
        <h5>BEST TRAVEL WEBSITE THEME</h5>
        <h5>COPYRIGHTS RESERVED-AHMED OSAMA 2022</h5>
      </div>
      </section>
     
    </div>
  )
}

export default Footer