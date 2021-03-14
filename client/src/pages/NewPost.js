import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const NewPost = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    title: "",
    body: "",
    tags: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let uri = `${process.env.REACT_APP_NODE_SERVER_URI}`;
    uri = uri.trim();
    const headers = { "x-auth-token": localStorage.getItem("jwt").trim() };
    const userId = `${localStorage.getItem("userId")}`;

    try {
      const response = await axios.post(`${uri}/posts/${userId}/new`, values, {
        headers,
      });

      console.log(response.data);
      setValues({ title: "", body: "", tags: [] });
      history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div style={{ height: "100px" }}></div>

      <form onSubmit={(e) => handleSubmit(e)} className="container col-md-6">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter post title"
            value={values.title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Body</label>
          <textarea
            value={values.body}
            onInput={(e) => setValues({ ...values, body: e.target.value })}
            className="form-control"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Tags</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter tags"
            value={values.tags}
            onChange={(e) =>
              setValues({ ...values, tags: e.target.value.split(",") })
            }
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            Enter comma seperated words.
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default NewPost;
