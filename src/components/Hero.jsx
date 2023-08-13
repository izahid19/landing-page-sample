import React from 'react'

const Hero = () => {
  return (
    <main className='hero container'>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="hero-btn">
                <button>SHOP NOW</button>
                <button className='second-btn'>Category</button>
            </div>
            <div className="shopping">
                <p>Also Available On</p>
                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazonlogo" />
                    <img src="/images/flipkart.png" alt="flipkartlogo" />
                </div>
            </div>
        </div>
        <div className='hero-image'>
        <img src="/images/hero-image.png" alt="shoeslogo"/>
        </div>
    </main>
  )
}

export default Hero