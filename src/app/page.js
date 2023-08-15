import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
const page = () => {
  return (
    <div>
      <div className={styles.moduleContainer}>
        <h1>Welcome to My Blog</h1>
        <Link className={styles.btn} href="/blog">Go to Blog </Link>
      </div>
    </div>
  );
};

export default page;
