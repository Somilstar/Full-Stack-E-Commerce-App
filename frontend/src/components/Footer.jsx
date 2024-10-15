import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='section__container footer__container'>
        <div className='footer__col'>
            <h4>CONTACT INFO</h4>
            <p>
                <span><i className='ri-map-pin-2-fill'></i></span>
                123 John St, Toronto, Ontario
            </p>
            <p>
                <span><i className='ri-mail-fill'></i></span>
                support@lebaba.com
            </p>
            <p>
                <span><i className='ri-phone-fill'></i></span>
                +1 (123)457890
            </p>
        </div>

        <div className='footer__col'>
            <h4>COMPANY</h4>
            <a href="/">Home</a>
            <a href="/">About Us</a>
            <a href="/">Work With Us</a>
            <a href="/">Our Blogs</a>
            <a href="/">Terms & Conditions</a>
        </div>

        <div className='footer__col'>
        <h4>USEFUL LINK</h4>
            <a href="/">Help</a>
            <a href="/">Track your order</a>
            <a href="/">Men</a>
            <a href="/">Women</a>
            <a href="/">Dresses</a>
        </div>

        <div className='footer__col'>
            <h4>INSTAGRAM</h4>
            <div className='instagram__grid'>
                <img src="src/assets/instagram-1.jpg" alt="" />
                <img src="src/assets/instagram-2.jpg" alt="" />
                <img src="src/assets/instagram-3.jpg" alt="" />
                <img src="src/assets/instagram-4.jpg" alt="" />
                <img src="src/assets/instagram-5.jpg" alt="" />
                <img src="src/assets/instagram-6.jpg" alt="" />

            </div>
        </div>

    </footer>

    <div className='footer__bar'>
        Copyright © 2025 Full Stack Project. All rights reserved.
    </div>
    
    </>
  )
}

export default Footer
