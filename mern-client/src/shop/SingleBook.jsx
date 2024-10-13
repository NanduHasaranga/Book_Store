import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const { _id, bookTitle, imageURL, bookDescription} = useLoaderData();
  return (
    <div className="mt-28 px-4 lg:px-24 ">
      <img src={imageURL} alt="" className="h-96" />
      <h2 style={{ fontWeight: 'bold', fontSize: '1.5em' }}>{bookTitle}</h2>
      <div>
        <p>{bookDescription}</p>
      </div>
    </div>
  );
}

export default SingleBook