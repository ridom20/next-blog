'use client'
import { usePathname } from 'next/navigation';
import blogData from '../../data/blogData.json';
import styles from "./post.module.css";

const Post = () => {
  const pathname = usePathname();
  const id = parseInt(pathname.split('/').pop());

  const selectedPost = blogData.find((post)=>post.id === id);

  return (
    <div className={styles.card}>
      {selectedPost ? (
        <>
          <h1>{selectedPost.title}</h1>
          <p>{selectedPost.content}</p>
          <p>Date: {selectedPost.date}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Post;