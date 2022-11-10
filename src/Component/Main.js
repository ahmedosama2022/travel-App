import React, {useEffect} from 'react'
import './Main.css'
import { GrLocation } from 'react-icons/gr'
import { BsClipboardCheck } from 'react-icons/bs';
import { Container, Row,Col } from 'react-bootstrap';
import Aos from 'aos';
const Data = [
  {
    id:1,
    imgSrc: "https://player.vimeo.com/external/451496538.sd.mp4?s=99054cf3f10833c0951bd46cdd29b0d4dbe4ba09&profile_id=164&oauth2_token_id=57447761",
    destTitel:'Bore Bora',
    location:'New Zealand',
    grade: 'CUL TURAL RELAX',
    price:'$700',
    description:'The opition of romance, Bore Bora is one of the best travel destination in the World. This Place is Known for its luxurious stays and adventurous activition.'
  },
  {
    id:2,
    imgSrc: "https://player.vimeo.com/progressive_redirect/playback/764379743/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=6277ece8d34716b1acfef149ed9e91a262f9e789a8ad01f58a86cb9e4416af06",
    destTitel:'Machu picchu',
    location:'Peru',
    grade: 'CUL TURAL RELAX',
    price:'$800',
    description:' Huauyna picchu is a mountain in peru destination in the World. rising over is Known for its luxurious stays and adventurous activition.'
  },
  {
    id:.3,
    imgSrc: "https://player.vimeo.com/external/446673380.sd.mp4?s=73b85e6ebf24feebd69134ec7c52c6f7a3a35e17&profile_id=164&oauth2_token_id=57447761",
    destTitel:'Great Barrier Reef',
    location:'Australia',
    grade: 'CUL TURAL RELAX',
    price:'$400',
    description:'One of the most remarkable Australian natural gifts is the Great. This Place is Known for its luxurious stays and adventurous activition.'
  },
  {
    id:4,
    imgSrc: "https://player.vimeo.com/external/552452945.sd.mp4?s=1438c532ca7844c0b884ed29b81beb422a834413&profile_id=164&oauth2_token_id=57447761",
    destTitel:'Cappadocia',
    location:'Turkey',
    grade: 'CUL TURAL RELAX',
    price:'$900',
    description:'According to the World Turism Ranking. This Place is Known for its luxurious stays and adventurous activition.'
  },
  {
    id:1,
    imgSrc: "https://player.vimeo.com/external/451496538.sd.mp4?s=99054cf3f10833c0951bd46cdd29b0d4dbe4ba09&profile_id=164&oauth2_token_id=57447761",
    destTitel:'Bore Bora',
    location:'New Zealand',
    grade: 'CUL TURAL RELAX',
    price:'$700',
    description:'The opition of romance, Bore Bora is one of the best travel destination in the World. This Place is Known for its luxurious stays and adventurous activition.'
  },
  {
    id:2,
    imgSrc: "https://player.vimeo.com/progressive_redirect/playback/764379743/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=6277ece8d34716b1acfef149ed9e91a262f9e789a8ad01f58a86cb9e4416af06",
    destTitel:'Machu picchu',
    location:'Peru',
    grade: 'CUL TURAL RELAX',
    price:'$800',
    description:' Huauyna picchu is a mountain in peru destination in the World. rising over is Known for its luxurious stays and adventurous activition.'
  },
  {
    id:.3,
    imgSrc: "https://player.vimeo.com/external/446673380.sd.mp4?s=73b85e6ebf24feebd69134ec7c52c6f7a3a35e17&profile_id=164&oauth2_token_id=57447761",
    destTitel:'Great Barrier Reef',
    location:'Australia',
    grade: 'CUL TURAL RELAX',
    price:'$400',
    description:'One of the most remarkable Australian natural gifts is the Great. This Place is Known for its luxurious stays and adventurous activition.'
  },
  {
    id:4,
    imgSrc: "https://player.vimeo.com/external/552452945.sd.mp4?s=1438c532ca7844c0b884ed29b81beb422a834413&profile_id=164&oauth2_token_id=57447761",
    destTitel:'Cappadocia',
    location:'Turkey',
    grade: 'CUL TURAL RELAX',
    price:'$900',
    description:'According to the World Turism Ranking. This Place is Known for its luxurious stays and adventurous activition.'
  },
  {
    id:.3,
    imgSrc: "https://player.vimeo.com/external/446673380.sd.mp4?s=73b85e6ebf24feebd69134ec7c52c6f7a3a35e17&profile_id=164&oauth2_token_id=57447761",
    destTitel:'Great Barrier Reef',
    location:'Australia',
    grade: 'CUL TURAL RELAX',
    price:'$400',
    description:'One of the most remarkable Australian natural gifts is the Great. This Place is Known for its luxurious stays and adventurous activition.'
  },
  {
    id:4,
    imgSrc: "https://player.vimeo.com/external/552452945.sd.mp4?s=1438c532ca7844c0b884ed29b81beb422a834413&profile_id=164&oauth2_token_id=57447761",
    destTitel:'Cappadocia',
    location:'Turkey',
    grade: 'CUL TURAL RELAX',
    price:'$900',
    description:'According to the World Turism Ranking. This Place is Known for its luxurious stays and adventurous activition.'
  },
  {
    id:5,
    imgSrc: "https://player.vimeo.com/external/428834176.sd.mp4?s=c482bc8f5c99a9c5dc73d9416c748b0b17a0f167&profile_id=164&oauth2_token_id=57447761",
    destTitel:'Guanajuato',
    location:'Mexico',
    grade: 'CUL TURAL RELAX',
    price:'$800',
    description:'A city in central Mexico. Guanajuato is Known for its history of silver mining and colonial architecture stays and adventurous activition.'
  },{
    id:1,
    imgSrc: "https://player.vimeo.com/external/554673471.sd.mp4?s=eb1a643cf64a7c19233df3feb38b1da052ab8a0d&profile_id=164&oauth2_token_id=57447761",
    destTitel:'Bore Bora',
    location:'New Zealand',
    grade: 'CUL TURAL RELAX',
    price:'$700',
    description:'The opition of romance, Bore Bora is one of the best travel destination in the World. This Place is Known for its luxurious stays and adventurous activition.'
  },
  {
    id:2,
    imgSrc: "https://player.vimeo.com/external/416654978.sd.mp4?s=068473239cc9c28e0bd052ed900bd27af6baf366&profile_id=164&oauth2_token_id=57447761",
    destTitel:'Machu picchu',
    location:'Peru',
    grade: 'CUL TURAL RELAX',
    price:'$800',
    description:' Huauyna picchu is a mountain in peru destination in the World. rising over is Known for its luxurious stays and adventurous activition.'
  },
  {
    id:.3,
    imgSrc: "https://player.vimeo.com/external/473762124.sd.mp4?s=e021327609fb621cd94bbdc231e90bdbc483fe90&profile_id=164&oauth2_token_id=57447761",
    destTitel:'Great Barrier Reef',
    location:'Australia',
    grade: 'CUL TURAL RELAX',
    price:'$400',
    description:'One of the most remarkable Australian natural gifts is the Great. This Place is Known for its luxurious stays and adventurous activition.'
  },
  {
    id:4,
    imgSrc: 'https://player.vimeo.com/external/363737105.sd.mp4?s=ed5d8790d07ac8b5a7641fe4d816b00c1e049935&profile_id=164&oauth2_token_id=57447761',
    destTitel:'Cappadocia',
    location:'Turkey',
    grade: 'CUL TURAL RELAX',
    price:'$900',
    description:'According to the World Turism Ranking. This Place is Known for its luxurious stays and adventurous activition.'
  },
 
]

const Main = () => {
  return (
   <section className='main container section '>
    <div className='secTitle'>
      <h3 className='title'>
        Most Visited destinations
      </h3>
    </div>
    
        <div className='srcContent'>
      

        <Container>
                <Row>
      {
        Data.map(({id, imgSrc, destTitel, location, price, grade,  description  })=>{
           return(
            <Col md="12" sm="12" xl="4"  >
            <div key={id} className='singleDestinaltion ' data-aos="flip-right">
             
               
             
            <div className='imageDiv'>
            <video src={imgSrc} muted autoPlay loop ></video>
            </div>
            <div className='cardInfo'>
             <h4 className='destTitel'> {destTitel}</h4>
             <span className='continent flex'>
              <GrLocation className='icon'/>
              <span className='name'>{location}</span>
              </span>
              <div className='fees flex'>
                <div className='grade'>
                  <span>{grade}<small>+1</small></span>
                </div>
                <div className='price'>
                  <h5>{price}</h5>
                </div>
              </div>
            <div className='desc'>
              <p>{description}</p>
            </div>
            <button className='btn flex'>DETAILS <BsClipboardCheck className='ico'/></button>
            </div>
            
           
           

            
             
          </div>
          </Col>
            
           )
        })
      }
      </Row>
             </Container>

    </div>
    
    
  
   </section>
  )
}

export default Main