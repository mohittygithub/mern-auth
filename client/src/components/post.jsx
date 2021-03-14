import React from "react";
import "../styles/styles.css";
import DeletePost from "./delete-post";

const Post = ({ postId, title, author, body, tags, createdAt }) => {
  //console.log("tags", tags);
  return (
    <>
      <div>
        <div className="jumbotron container post-jumbotron d-flex flex-row justify-content-center align-items-center">
          <div className="container ">
            <h3>{postId}</h3>
            <h1 className="display-4">{title}</h1>
            <p className="lead">{body}</p>
            <p>tags: {tags}</p>
            <p>Created on : {createdAt}</p>
            <p>Author : {author}</p>
          </div>
          <div className="p-2">
            <DeletePost postId={postId} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
