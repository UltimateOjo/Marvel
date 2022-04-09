import React from 'react'

function Info ({data, powerIndex}) {
  return (
    <div>
        {data[powerIndex].map(item => (
            <div className='info'>
            <p>{item.name}</p>
            <p>{item.body}</p>
        </div>
        ))}
    </div>
  );
};

export default Info;