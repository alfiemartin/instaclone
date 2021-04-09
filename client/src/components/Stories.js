import React from "react";
import "./Stories.scss";

const Stories = () => {
  return (
    <div className="STORIES">
      <div className="arrowWrapper">
        <h1 className="arrowLeft arrow">{"<"}</h1>
        <h1 className="arrowRight arrow">{">"}</h1>
      </div>
      <div className="storiesWrapper">
        <div className="story">
          <div className="circle">
            <img
              className="image"
              src="https://pbs.twimg.com/profile_images/1181738698511208449/0P7r76v5_400x400.jpg"
              alt="pic"
            />
          </div>
          <h3 className="storyText">kinggeorgetv</h3>
        </div>
      </div>
    </div>
  );
};

export default Stories;
