import React from 'react';


const InfoCard = ({img,cardTitle,bgclassName}) => {
    return (
 <div className={`card lg:card-side bg-base-100 shadow-xl mt-4 ${bgclassName}`}>
        <figure className='pl-5 w-17 mt-3'>
            <img src={img} alt="Movie"/>
            </figure>

        <div className="card-body text-white">
            <h2 className="card-title">{cardTitle}</h2>
            <p>Click the button to watch on Jetflix app.</p>
        
        </div>

</div>
    );
};

export default InfoCard;