import React from "react";
import Link from "next/link";
import blogData from "../data/blogData.json";
import styles from "./blog.module.css"
const Blog = () => {
  return (
    <div className={styles.blogContainer}> 
      <h1>Blog</h1>
      <ul className={styles.postList}> 
        {blogData.map((post) => (
          <li key={post.id} className={styles.postItem} >
            <Link className={styles.text}  href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
