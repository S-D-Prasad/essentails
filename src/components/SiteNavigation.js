import React from 'react';
import SiteNavMain from './SiteNavMain';
import SingleBanner from './SingleBanner';
import ThreeBanner from './ThreeBanner';
import Categories from './Categories';
import imglogo from '../assets/TopCategories/logo_store.png';
import SearchBar from '../actions/SearchBar';
import paan_corner from '../assets/Banners/paan.png';
import { Image,Carousel } from 'antd';
import OrderNow from '../actions/OrderNow'; // Assuming OrderNow component contains the "Order Now" button
import c1 from "../assets/c1.jfif"
import c2 from "../assets/c2.jfif"
import c3 from "../assets/c3.jfif"
import c4 from "../assets/c4.jfif"
import DiscountProducts from './DiscountProducts';
import UsefulLinks from './UsefulLinks';
import "./SiteNavigation.css"
import AtStorePlaceCard from './AtStore';
const SiteNavigation = () => {
    return (
        <div className="site-navigation">
            <SearchBar />
            <div className='topbar-main'>
            <SingleBanner />
                {/* <SiteNavMain /> */}
                <div className='space'>
                <Carousel autoplay  autoplaySpeed={2000}>
                        <div>
                            <img src={c1} alt="c1" style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div>
                            <img src={c2} alt="c2" style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div>
                            <img src={c3} alt="c3" style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div>
                            <img src={c4} alt="c4" style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </Carousel>
                    </div>
            </div>
            <div >
            
            <Categories />
                {/* <img src={imglogo} height={500} alt="Logo" style={{ objectFit: 'contain' }} /> */}
            </div>

            <div className='space'>
                
             

                <ThreeBanner />
                </div>
                <div  className='space'>
                <DiscountProducts/>
                </div>
                <div  className='space'>
               <AtStorePlaceCard/>
                
            </div>
                <div  className='space'>
                <UsefulLinks/>
                
            </div>
        </div>
    );
};

export default SiteNavigation;
