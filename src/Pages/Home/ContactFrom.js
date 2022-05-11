import React from 'react';
import contact from '../../assets/images/appointment.png'

const ContactFrom = () => {
    return (
        <div
        style={{background:`url(${contact})`}}
        className='mt-20 p-16'>

           <h4 className='text-xl text-primary text-center font-bold'>Contact Us </h4>
             <h3 className='text-3xl text-center'>Stay connected with Us </h3>
            
         
            <div className=''>
            <input type="text" placeholder="email" className="input input-bordered input-secondary w-full max-w-xs " /><br/>
            <input type="text" placeholder="Subject" className="input input-bordered input-secondary w-full max-w-xs mt-6" /><br/>
            <textarea className="textarea input-bordered input-secondary w-full max-w-xs mt-6" placeholder="Your message"></textarea>
            </div>

        </div>
    );
};

export default ContactFrom;
