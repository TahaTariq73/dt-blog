import React, { useState, useEffect } from 'react';

import Space from '../Assets/Images/space.jpg';
import Coding from '../Assets/Images/coding.jpeg';
import Card from './Card';
import arrowIcon from "../Assets/Icons/arrow-icon.svg";
import Spinner from './Spinner';

const Hero = () => {
  const [posts, setPosts] = useState({posts: [], loading: false});

  const fetchPosts = async () => {
    const limit = 2;
    const url = `https://lyrical-deer-production.up.railway.app/api/posts?page=1&limit=${limit}`;
    setPosts({loading: true});

    const data = await fetch(url);
    const parsedData = await data.json();
    setPosts({posts: parsedData.results, loading: false});
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
        <section className="pt-24 bg-gray-50">
            <section className="flex flex-col lg:flex-row justify-between items-center px-4 md:px-10 xl:px-24">
                <section className="relative animate-slideleft">
                    <img src={Coding} alt="" className="w-[32rem] xl:w-[34rem] h-[21.2rem] rounded-md" />
                    <div className="absolute bottom-8 bg-white mx-6 p-4 rounded-sm">
                        <h1 className="font-proximaNovaBold text-2xl"> Fun Fact: Stanford introduces 'DetectGPT' to help teachers detect content generated using Chat GPT students </h1>
                    </div>
                </section>
                <section className="relative mt-12 lg:mt-0 ml-0 lg:ml-2 animate-slideright">
                    <img src={Space} alt="" className="w-[32rem] xl:w-[34rem] h-[21.2rem] rounded-md" />
                    <div className="absolute bottom-8 bg-white mx-6 p-4 rounded-sm">
                        <h1 className="font-proximaNovaBold text-2xl"> Fun Fact: World largest digital camera </h1>
                        <p className="mt-2 font-proximaNovaRegular"> Made for studying the galexies, it can clear images of a golf ball from 24 Km away </p>
                    </div>
                </section>
            </section>
            <section className=" bg-gray-200 px-4 md:px-10 xl:px-24 py-8 mt-12">
                <div className="flex justify-between w-full">
                    <h1 className="font-proximaNovaBold text-2xl"> TRENDING POSTS </h1>
                    {posts.loading && <Spinner width="w-6" />}
                    {!posts.loading &&
                        <img src={arrowIcon} alt="" className="w-5" />
                    }      
                </div>
                <hr className="h-[2px] bg-gray-900 my-2" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                    {!posts.loading && posts.posts.map(e => {
                        return <Card key={e._id} title={e.title} desc={e.desc} image={e.image} id={e._id} />
                    })}
                </div>
            </section>
        </section>
  )
}

export default Hero;
