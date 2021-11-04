import React, { useState, useEffect } from "react";

import Layout from "../../components/layout";
import Nav from "../../components/nav";
import style from "./feed.module.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const res = await fetch("/api/guestbook");
      const data = await res.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Nav />
      <Layout>
        <div>
          <ul className={style.lists}>
            {posts.length > 0 ? (
              posts.map((post) => {
                return (
                  <li key={post.id} className={style.list}>
                    <h3>{post.name}</h3>
                    <p>{post.message}</p>
                  </li>
                );
              })
            ) : (
              <h1>There are no posts to show</h1>
            )}
          </ul>
        </div>
      </Layout>
    </>
  );
};

export default Feed;
