import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const {title, desc, image, id} = props;

  return (
    <Link to={`/post/${id}`}>
      <div className="flex flex-col sm:flex-row justify-center hover:text-cyan-600 cursor-pointer">
        <img src={`${image}`} alt="" className="w-full h-auto sm:h-36 sm:w-48 rounded-md" />
        <div className="ml-0 sm:ml-4 mt-4 sm:mt-0">
          <h2 className="font-proximaNovaBold text-2xl group"> {title} </h2>
          <p className="mt-2 font-proximaNova text-sm text-black"> {desc.slice(0, 100)} ... </p>
        </div>
      </div>
    </Link>
  )
}

export default Card;
