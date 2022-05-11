import React from 'react';

const Review = ({reviewMan}) => {
  const {name,review,country,img}=reviewMan;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl mt-12">
          <div className="card-body">
            
            <p>{review}</p>
                <div className='flex items-center'>
                    <div className="avatar">
                         <div className="w-16  mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img  src={img} alt="NetWorkError"/>
                        </div>
                  </div>
                  <div>
                  <h4 className='text-xl font-bold'>{name}</h4>
                  <h3 className='text-1xl font-bold'>{country}</h3>
                  </div>

                </div>



          </div>
      </div>
    );
};

export default Review;