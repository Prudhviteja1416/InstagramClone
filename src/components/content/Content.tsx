import React, { useEffect } from "react";
import "./Content.css";
import posts from "../../data/posts/posts.json";
import Post from "../post/Post";
export default function Content() {
  useEffect(() => {}, []);
  return (
    <div className="conent-container">
      <div className="content">
        {posts.map((post, index) => (
          <Post post={post} />
        ))}
      </div>
    </div>
  );
}
