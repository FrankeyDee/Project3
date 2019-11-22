// export { Login } from "./login";
// export { Register } from "./register";


import React from "react";
import Title from "../UsernameForm/Title";
import "./index.css";


// import React, { useState } from 'react';
// import ItemsCarousel from 'react-items-carousel';

// export default () => {
//   const [activeItemIndex, setActiveItemIndex] = useState(0);
//   const chevronWidth = 40;

const Banner = (props) => {
    return (
        <div className="contain">
            <div className="intro">
                <div className="wordart">
                    <img id="wordart" src="tv_word_art.jpg" alt="A TV" />
                    <div className="banner">
                        <h1>Welcome to The Binge Watch Club!</h1>
                        <br></br>
                        <br></br>
                        <p className="lead text-primary">Find titles of the most recommended shows to "binge watch." Registration allows you to search by mood and save your personalized list of shows you would like to watch. So, grab that popcorn and find your spot on the couch. What are we watching?</p>
                        <select onChange={props.loadMovies} className="form-control mr-sm-2 dropdown"  placeholder="Search" id="exampleSelect1">
                            <option value="28">Action</option>
                            <option value="16">Animated</option>
                            <option value="35">Comedy</option>
                            <option value="10749">Romance</option>
                            <option value="878">Sci Fi</option>
                        </select>
                    </div>
                </div>
            </div>
            


            <div className="recent">
            <Title>Recently Recommended</Title>
            </div>
        
        </div>

    );
}

export default Banner;