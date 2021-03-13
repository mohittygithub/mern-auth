import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../components/post";

const Home = () => {
  const [data, setData] = useState([]);
  const uri = `${process.env.REACT_APP_NODE_SERVER_URI}`;
  const getAllPosts = async () => {
    try {
      const header = {
        headers: { "x-auth-token": localStorage.getItem("jwt") },
      };
      const response = await axios.get(`${uri}/posts/all`, header);
      await setData(response.data.response);
      const { tags, _id, title, author, body, user, createdAt } = data;
      console.log(tags, _id, title, author, body, user, createdAt);
    } catch (error) {
      console.log(error.message);
    }
    console.log(data);
  };
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <>
      <div style={{ height: "100px" }}></div>
      <ul>
        {data ? (
          data.map((post) => (
            <Post
              key={post._id}
              title={post.title}
              author={post.author}
              body={post.body}
              tags={post.tags.map((tag) => "[" + tag + "] ")}
              createdAt={post.createdAt}
            />
          ))
        ) : (
          <p>No Posts</p>
        )}
      </ul>
    </>
  );
};
export default Home;
