import React from 'react'

const DealsSection = () => {
  return (
    <section className='section__container  deals__container'>
        <div className='deals__image'>
            <img src="src/assets/deals.png" alt="image" />
        </div>
        <div className='deals__content'>
        <h5 className='uppercase'>UP TO 20% Discount on</h5>
        <h4>Deals Of This Month</h4>
        <p>Discover the latest trends and express your unique style with our Women's Fashion
            website. Explore a curated collection of clothing, accessories, and footwear that caters to 
            every taste and occasion.
        </p>
        <div className='deals__countdown flex-wrap'>
            <div className='deals__countdown__card'>
                <h4>14</h4>
                <p>Days</p>
            </div>
            <div className='deals__countdown__card'>
                <h4>20</h4>
                <p>hours</p>
            </div>
            <div className='deals__countdown__card'>
                <h4>15</h4>
                <p>Mins</p>
            </div>
            <div className='deals__countdown__card'>
                <h4>05</h4>
                <p>Secs</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default DealsSection
