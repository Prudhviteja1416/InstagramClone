import React from "react";
import { Post as PostModel } from "../../models/post/Post";
import "./Post.css";
import Favorite from "@mui/icons-material/Favorite";
import ModeComment from "@mui/icons-material/ModeComment";
interface Props {
  post: PostModel;
}
export default function Post({ post }: Props) {
  return (
    <>
      <div className="post-container">
        <div className="post">
          <a
            href="#"
            style={{ backgroundImage: `url(${post.image_url})` }}
            className="post-image"
          >
            <div className="post-overlay">
              <span>
                <Favorite />
                {post.likes}
              </span>
              <span>
                <ModeComment /> {post.comments.length}
              </span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
