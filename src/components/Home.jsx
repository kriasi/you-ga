import { Carousel } from 'flowbite-react';
import React from 'react';
import cgi from "../assets/cgi.jpg";
import c3h from "../assets/c3h.jpg";
import w3h from "../assets/w3h.jpg";
import rcc from "../assets/rcc.jpg";
import db3 from "../assets/db3.jpg";
import rmm from "../assets/rmm.jpg";
import doc from "../assets/doc.jpg";
// import wwm from "../assets/wwm.jpg";
// import ybs from "../assets/ybs.jpg";

const Home = () => {
    return (
        <div className="bg-neutralSilver">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
          <Carousel className="w-full mx-auto"> 
           
            <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
              <div>
                <img src={w3h} alt="" />
                </div>
                <div className="md:w-1/2">
                  <h1 className="text-4xl font-semibold mb-4 text-neutralBlue md:w-3?4 leading-snug">You-Ga
                  <br></br><span className="text-3xl text-DarkBlue leading-snug">Step into a Mindful Existence<br></br> 
                  You-Ga, the Yoga for Your Mental Health</span></h1>
                  <p className="text-orange text-base mb-8">You-Ga: Elevate your mental wellness journey with a smart app that 
                  monitors your mood and lifestyle, suggests nutritional tweaks, and connects you with experts for personalized guidance</p>
                  <button className="btn-primary">Register</button>
                </div>
            </div>
            
            <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
                <img src={c3h} alt="" />
                </div>
                <div className="md:w-1/2">
                  <h1 className="text-4xl font-semibold mb-4 text-neutralBlue md:w-3?4 leading-snug">Mood Tracker
                  <br></br><span className="text-3xl text-DarkBlue leading-snug">Mood Tracking: Because Adulting is Hard </span></h1>
                  <p className="text-orange text-base mb-8">By regularly tracking your mood, sleep, hunger, stress, anxiety, nervousness,
                   and productivity levels, you can identify patterns and potential triggers that may be impacting your mental health</p>
                  <button className="btn-primary">Track Now</button>
                </div>
            </div>
            
            <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
                <img src={db3} alt="" />
                </div>
            </div>

            <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
                <img src={rcc} alt="" />
                </div>
            </div>

            <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
                <img src={doc} alt="" />
                </div>
            </div>
          </Carousel>
        </div>
        </div>
      );
    }
export default Home;