import React, { useState } from 'react';
import { Link } from "react-router-dom";

import facebookIcon from '../Assets/Icons/facebook-icon.svg';
import instagramIcon from '../Assets/Icons/instagram-icon.svg';
import twitterIcon from '../Assets/Icons/twitter-icon.svg';
import linkinIcon from '../Assets/Icons/linkedin-icon.svg';
import Spinner from './Spinner';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const subscribe = async () => {
    const url = `http://localhost:5000/api/subscribe/`;
    setLoading(true);
    console.log(email);

    const sendData = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email: email})
    }

    const data = await fetch(url, sendData);
    const parsedData = await data.json();

    if (parsedData.status == 200) {
        alert("You subscribed this website");
    } else {
        alert("Please enter valid email");
    }
    setLoading(false);
    setEmail("");
  }

  return (
    <div className="bg-black py-12 px-4 sm:px-12 lg:px-24 w-full" id="footer">
        <div className="flex w-full md:w-96">
            <div className="text-white font-notoSerif font-semibold tracking text-2xl cursor-pointer" onClick={() => window.location = '/'}>
                <span> DT </span> <span> BLOGS </span> 
            </div>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center ml-12">
                <a href="https://www.facebook.com/profile.php?id=100073800926103" target="_blank" rel="nonferrer" className="px-2">
                    <img src={facebookIcon} alt="" className="invert w-5" />
                </a>
                <a href="https://www.instagram.com/taha_tariq_77/" target="_blank" rel="nonferrer" className="px-2">
                    <img src={instagramIcon} alt="" className="invert w-5" />
                </a>
                <a href="https://www.linkedin.com/in/taha-tariq-12022b230/" target="_blank" rel="nonferrer" className="px-2">
                    <img src={linkinIcon} alt="" className="invert w-5" />
                </a>
                <a href="https://twitter.com/TahaTariq72" rel="nonferrer" target="_blank" className="px-2">
                    <img src={twitterIcon} alt="" className="invert w-5" />
                </a>
            </span>
        </div>
        <div className="flex flex-col md:flex-row mt-20">
            <div className="text-white w-auto md:w-96">
                <h1 className="font-proximaNovaBold text-3xl"> Get our wellness newsletter </h1>
                <p className="mt-4 text-sm"> Filter out the noise and nurture your inbox with health and wellness advice that’s inclusive and rooted in medical expertise. </p>
                <div className="mt-6 flex">
                    <input type="text" className="p-3 font-proximaNova focus:outline-none text-black w-48 md:w-64" placeholder="Enter your email" value={email} onChange={event => setEmail(event.target.value)} />
                    <button type="button" className="bg-yellow-700 p-3 px-4 border border-yellow-700 font-proximaNovaBold btn btn-background-slide hover:border-cyan-600" onClick={subscribe}>
                        {loading && <Spinner width="w-6" />} {!loading && "SUBSCRIBE"} 
                    </button>
                </div>
                <p className="mt-4 font-face text-sm"> Your <a className="underline cursor-pointer"> privacy </a> is important to us </p>
            </div>
            
            <div className="text-white ml-0 mt-16 md:mt-0 md:ml-12 lg:ml-36 w-auto md:w-96 hidden md:block">
                <h1 className=" font-proximaNovaBold text-2xl"> SOCIAL </h1>
                <ul className="mt-4 font-proximaNovaRegular">
                    <li className="my-2"> <a href="https://www.facebook.com/profile.php?id=100073800926103" target="_blank" rel="noreferrer" className="hover:underline"> Facebook </a> </li>
                    <li className="my-2"> <a href="https://www.instagram.com/taha_tariq_77/" target="_blank" rel="noreferrer" className="hover:underline"> Instagram </a> </li>
                    <li className="my-2"> <a href="https://www.linkedin.com/in/taha-tariq-12022b230/" target="_blank" rel="noreferrer" className="hover:underline"> Twitter </a> </li>
                    <li className="my-2"> <a href="https://twitter.com/TahaTariq72" target="_blank" rel="noreferrer" className="hover:underline"> Linkedin </a> </li>
                </ul>
            </div>

            <div className="text-white ml-0 mt-16 md:mt-0 md:ml-12 lg:ml-36 w-auto md:w-96 hidden md:block">
                <h1 className=" font-proximaNovaBold text-2xl"> COMPANY </h1>
                <ul className="mt-4 font-proximaNovaRegular">
                    <li className="my-2"> <Link to="/" className="hover:underline"> Home </Link> </li>
                    <li className="my-2"> <p to="/about" className="hover:underline cursor-pointer"> About </p> </li>
                    <li className="my-2"> <Link to="/blog" className="hover:underline"> Blog </Link> </li>
                    <li className="my-2"> <p to="/contact" className="hover:underline cursor-pointer"> Contact </p> </li>
                    <li className="my-2"> <p className="hover:underline cursor-pointer"> Privancy policy </p> </li>        
                </ul>
            </div>
        </div>
    </div>    
  )
}

export default Footer;
