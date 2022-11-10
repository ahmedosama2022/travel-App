import React, {useEffect, useState} from 'react'
import './Home.css'
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { TbApps } from 'react-icons/tb';

import Aos from 'aos';
const Home = () => {
  
  
  return (
    <section className='home'>
      <div className='overlay'>
          <video src='https://player.vimeo.com/external/453079560.sd.mp4?s=68597a02fc6b11a3ed59099d90caafba07f8c78c&profile_id=164&oauth2_token_id=57447761'muted autoPlay loop ></video>

          <div className='homeContent container'>
            <div className='textDiv'>
              <span className='smallText'>
                Our packages
              </span>
              <h1 className='homeTitel'>
                Search Your Holidey
              </h1>
              <br>
              </br>
              <br>
              </br>
              <div className='cardDiv grid'>
                <div className='destinatInput'>
                  <label htmlFor='city'>Search Your destination</label>
                  <div className='input flex'>
                    <input type="text" placeholder='Enter name here.....'/>
                    <GrLocation className='icon'/>
                  </div>
                </div>
                <div className='dateInput'>
                  <label htmlFor='city'>Select Your date:</label>
                  <div className='input flex'>
                    <input type="date" />
                  </div>
                </div>
                <div className='priceInput'>
                 <div className='labal_total flex'>
                  <label htmlFor='price'>max price:</label>
                  <h3 className='total'>$5000</h3>
                  </div>
                  <div className='input flex'>
                    <input type="range" max="5000" min="1000"/>
                  </div>
                </div>
                
                </div>
                <div className='searchOptions flex'>
                  <HiFilter className='icon'/>
                  <span>MORE FILTERS</span>
                </div>
                <div className='homeFooterIcon flex'>
              <div className='righIcon'>
                    <FiFacebook className='ico'/>
                    <AiOutlineInstagram className='ico'/>
                    <FaTripadvisor className='ico'/>
              </div>
              <div className='leftIcon'>
                <AiOutlineUnorderedList className='ico'/>
                <TbApps className='ico'/>
              </div>
            </div>
            </div>
           
          </div>

        
      </div>
    </section>
  )
}

export default Home