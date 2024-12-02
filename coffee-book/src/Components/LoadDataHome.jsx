import React from 'react';

const LoadDataHome = ({title,subtitle}) => {
     return (
          <div className='text-center font-bold py-7'>
               <h1>{title}</h1>
               <p>{subtitle}</p>
          </div>
     );
};

export default LoadDataHome;