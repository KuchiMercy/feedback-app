import React from "react";
import { useNavigate, Navigate, Routes, Route } from "react-router-dom";
// import { useParams } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();
  const onClick = () => {
    console.log("hello");
    navigate("/about");
  };
  //   const params = useParams();
  const status = 200;
  if (status === 404) {
    return <Navigate to="/not-found"> </Navigate>;
  }
  return (
    <>
      {/* <h1>
        Post {params.name} {params.id}
      </h1> */}
      <h1>Post</h1>
      <button onClick={onClick}>Click to navigate</button>
      <Routes>
        <Route path="/show" element={<h1>Hello World</h1>} />
      </Routes>
    </>
  );
};

export default Post;
