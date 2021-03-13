import React from "react";

const Post = ({ title, author, body, tags, createdAt }) => {
  console.log("tags", tags);
  return (
    <>
      <div>
        <div className="jumbotron container">
          <div className="container">
            <h1 className="display-4">{title}</h1>
            <p className="lead">{body}</p>
            <p>tags: {tags}</p>
            <p>Created on : {createdAt}</p>
            <p>Author : {author}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
