
import blogData from '../../data/blogData.json';
import styles from "./post.module.css";

const Post = ({params}) => {
  const {id} = params;

  const selectedPost = blogData.find((post)=>post.id === parseInt(id));

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