import React from "react";
import styles from "./blog.module.css";
import Blogs from "./components/Blogs/Blogs";

const page = () => {
  return (
    <div className={styles.container}>
      <Blogs />
    </div>
  );
};

export default page;
