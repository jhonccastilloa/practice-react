import React, { useState, useEffect } from "react";

function Post({ title, body }) {
  return (
    <>
      <h2>{title}</h2>
      <h3>{body}</h3>
    </>
  );
}

function ApiFetch() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const res = await fetch("https://ubigeo-pe.herokuapp.com/v4");
    const data = await res.json();
    // console.log(data);
    data.map((dataPost) => {
      console.log(dataPost);
      // let getDataPost = {
      //   id: dataPost.id,
      //   title: dataPost.title,
      //   body: dataPost.body,
      // };
      // setPost((post) => [...post, getDataPost]);
    });
  };
  return (
  <div>
    <h1>Publicacion JSON Placeholder</h1>
    {/* {post.map((post)=><Post key={post.id} title={post.title} body={post.body}/>)} */}
  </div>);
}

export default ApiFetch;
