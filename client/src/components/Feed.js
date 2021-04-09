import React from "react";
import "./Feed.scss";
import Stories from "./Stories";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      <div className="divider"></div>
      <Stories />
      <Post />
    </div>
  );
};

export default Feed;
