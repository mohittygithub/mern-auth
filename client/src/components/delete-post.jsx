import React from "react";
import axios from "axios";
import { BsFillTrashFill } from "react-icons/bs";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const DeletePost = ({ postId }) => {
  const handleClick = async (e) => {
    try {
      const headers = {
        "x-auth-token": localStorage.getItem("jwt").trim(),
      };
      const response = await axios.delete(
        `${process.env.REACT_APP_NODE_SERVER_URI}/posts/delete/${postId}`,
        { headers }
      );
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Tippy content={"Delete Post"} placement="right-end">
        <button onClick={(e) => handleClick(e)} className="btn btn-danger">
          <BsFillTrashFill />
        </button>
      </Tippy>
    </>
  );
};
export default DeletePost;
