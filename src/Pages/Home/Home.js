import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import BannerTwo from './BannerTwo';
import ContactFrom from './ContactFrom';
import Info from './Info';
import MakeApointment from './MakeApointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='mx-12'>
     <Banner></Banner>
     <Info></Info>
     <Services></Services>
     <BannerTwo></BannerTwo>
     <MakeApointment></MakeApointment>
     <Testimonials></Testimonials>
     <ContactFrom></ContactFrom>
     <Footer></Footer>
        </div>
    );
};

export default Home;