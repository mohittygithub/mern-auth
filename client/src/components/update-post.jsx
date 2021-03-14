import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
const UpdatePost = ({ postId }) => {
  const history = useHistory();
  const handleClick = async () => {
    console.log("hi");
    history.push("/new");

    try {
      const headers = {
        "x-auth-token": localStorage.getItem("jwt").trim(),
      };
      const response = await axios.get(
        `${process.env.REACT_APP_NODE_SERVER_URI}/posts/${postId}`,
        { headers }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Tippy content={"Update Post"} placement="right-end">
        <button onClick={() => handleClick()} className="btn btn-secondary">
          <BsPencilSquare />
        </button>
      </Tippy>
    </>
  );
};
export default UpdatePost;
