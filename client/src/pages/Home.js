import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const getAllPosts = async () => {
    try {
      const header = {
        headers: { "x-auth-token": localStorage.getItem("jwt") },
      };
      const response = await axios.get(
        `http://localhost:8080/posts/all`,
        header
      );
      await setData(response.data.response);
      const { tags, _id, title, author, user, createdAt } = data;
      console.log(tags, _id, title, author, user, createdAt);
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
      <ul>
        {data.map((post) => (
          <li key={post._id}>{post.author}</li>
        ))}
      </ul>
    </>
  );
};
export default Home;
