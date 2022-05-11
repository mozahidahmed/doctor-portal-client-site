import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews=[
        {
            _id:1,
            name:"Winson Herry",
            review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            country:"California",
            img:people1
            
        },
        {
            _id:2,
            name:"Wknion Cerry",
            review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            country:"China",
            img:people2
            
        },
        {
            _id:3,
            name:"Adrija",
            review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            country:"Italy",
            img:people3
            
        },

    ]
    return (
        <section className='mt-10'>
                    <div className='flex justify-between'>
                        <div>
                        <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                        <h3 className='text-3xl  font-bold'>What Our Patients Says</h3>
                        </div>
                        <div>
                        <img src={quote} className="w-24 lg:w-48" alt="NetWorkError"/>
                        </div>
                    </div>



                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                   {
                     reviews.map(review=><Review key={review._id} reviewMan={review}></Review>)  
                   }

                  </div>

            
        </section>
    );
};

export default Testimonials;