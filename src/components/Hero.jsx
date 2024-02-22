import React from "react";
import "./Hero.css";
export const Hero = () => {
  return (
    <div className="container">
      <div className="profile-picture">
        <img src="./profile.jpg" />
      </div>

      <div className="info">
        <div className="info-div1">
          <p>Hey👋, Myself Priyanshu</p>
        </div>
        <div className="info-div2">
          <p className="title">Software Developer</p>
          <p className="description">
            On mobile devices where emoji buttons and keyboards are common, we
            can easily use emojis in our messages, tweets, and social media. But
            what if youre working from a desktop and hoping to add an emoji or
            two to a message? Weve got a few little-known desktop shortcuts for
            sharing emojis from Mac and Windows, plus a few tips on using emojis
            to boost your social media marketing.
          </p>
        </div>
        <div className="info-div3">Resume</div>
      </div>
    </div>
  );
};
