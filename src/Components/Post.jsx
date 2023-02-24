import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';
import defaultcss from "../default.css";

const Post = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState();
   
  const fetchData = async () => {
    const url = `https://lyrical-deer-production.up.railway.app/api/posts/${id}/`;
    setLoading(true);

    const data = await fetch(url);
    const parsedData = await data.json();
    setData(parsedData.post);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="pt-24 pb-4 px-4 md:px-12 xl:px-24 flex shadow-xs bg-gray-50">
        {loading && 
        <div className="w-full flex justify-center items-center">
            <Spinner width="w-12" />
        </div>}
        {Data !== undefined && 
        <div className="w-full md:w-[50rem] overflow-hidden">
            <h1 className="font-proximaNovaBold text-4xl"> {Data.title} </h1> <hr className="mt-4" />
            <div id="content" className="post-body font-proximaNova" dangerouslySetInnerHTML={{__html: Data.content}}> 
            </div>
        </div>
        }
    </div>
  )
}

export default Post;