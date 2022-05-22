import React from 'react';
import ContactUs from '../../Components/ContactUs';
import Banner from './Banner';
import FAQS from './FAQS';
import Products from './Products';
import Reviews from './Reviews';
import Summary from './Summary';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner />
            <Summary />
            <WhyChooseUs />
            <Products />
            <Reviews />
            <FAQS />
            <ContactUs />
        </div>
    );
};

export default Home;