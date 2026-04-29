import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import './Portfolio.scss';
import websitePortfolio from '../../Assets/This Website.png'
import councilWeb from '../../Assets/shelley-website.png'
import sortingAlgo from '../../Assets/Pathing-Algorithm.png'
import pcStore from '../../Assets/text-base-pc-store.png'
import curiousAI from '../../Assets/curious mind.png'
import speakOrg from '../../Assets/speak org.png'
import Gallary from './ImageGallery.js'

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 0);

        return () => {
            clearTimeout(timer);
        }
    });

    const Urls = [
        councilWeb,
        sortingAlgo,
        websitePortfolio,
        pcStore,
        curiousAI,
        speakOrg,
      ];

    const Descriptions = [
        "Created & emplemented a comprehensive website for City Councillor and Budget Chief Shelley Carroll, this included SEO, mailchimp API integration, as well as website security, Javascript, HTML, CSS, & creating a website search engine",
        "Developed a pathfinding algorithm to navigate a pyramid of interconnected chambers. The algorithm optimally identifies paths by prioritizing treasure chambers, lighted ones, and then dim chambers. To handle backtracking in dead-end scenarios, I implemented a stack using a doubly linked list. Java Programming, Advanced Data Structures (doubly linked lists), Pathfinding Algorithms, Object-Oriented Programming, Exception Handling, Documentation.",
        "This website was made using elements: React Java Script, SCSS, HTML, SVG Animatics, Emailjs API, Google Maps API, Elements of UI design",
        "A Python-based PC shop simulation where users can choose to build a custom PC or purchase a pre-built one. that taught me about user-interaction input & Validation, taking in resposnes and checking if valid.",
        "A website built using React, Javascript, HTML, SCSS, that allows children to ask the hard-hitting questions they have have in an appropriate, educational, and easy to understand way. Using the power of a fine-tuned OpenAI ChatGPT AI, With backend built using Node.js and postmate",
        "Developed a comprehensive website for 'Speak' a Canadian non-for-profit bult on improving public speaking and removing the stigma of networking. Built using HTML, CSS, JS, emailjs, and donations API",
    ];

    return (
        <>
        <div className="container portfolio-page">
          <h1 className="page-title"> 
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Portfolio".split("")}
              idx={15}
            />
          </h1>
          <Gallary imageUrls={Urls} imageDescriptions={Descriptions} />
    
        </div>
      </>
      
    );
}

export default Portfolio