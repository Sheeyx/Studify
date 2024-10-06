import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./styles.scss"
import Photo from "../../../assets/uni-photo.jpeg"
import Img1 from "../../../assets/hero-section/glasgow.png"
import Img2 from "../../../assets/hero-section/harvard-university.png"
import Img3 from "../../../assets/hero-section/university-sydney.png"

export default function HeroSection() {
  return (
    <div className='hero-section'>
        <div className='container'>
            <div className='hero-left'>
                <h2>
                    Your dream of studying abroad is our mission
                </h2>
                <p>We know how to speed up the application process and help you save time and money.</p>
                <button>Free consultation <ArrowForwardIcon /></button>
            </div>
            <div className='hero-right'>
                <div className='image'>
                    <img src={Photo} alt="" />
                </div>
                <div className='percentage'>
                    <div className='box'>
                        <p className='number'>5+</p>
                        <p>Success rate</p>
                    </div>
                    <div className='box-circle'>
                        <p className='number'>99%</p>
                        <p>Success rate</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='partner container'>
            <div className='text'>Partnered with top universities</div>
            <div className='img-box'>
                <img src={Img1} alt="" />
                <img src={Img2} alt="" />
                <img src={Img3} alt="" />
            </div>
        </div>
    </div>
  )
}
