import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../../Shared/PrimaryButton';

const MakeApointment = () => {
    return (
        <section 
        style={{background:`url(${appointment})`}}
        className='flex  justify-center items-center'>
           <div className='flex-1 hidden lg:block'>
            <img src={doctor}  className='mt-[-100px]' alt="Network Error"/>
           </div>
          
           <div className='flex-1 p-10 '>
            <h3 className='text-xl text-primary'>Appointment</h3>
            <h2 className='text-3xl text-white font-bold'>Make an appointment Today</h2>
            <p className='text-white mt-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', 
            making it look like readable English. Many desktop publishing packages and web page
            </p>
           <div className='mt-2'>
           <PrimaryButton>GET STARTED</PrimaryButton>
           </div>
           </div>

        </section>
    );
};

export default MakeApointment;