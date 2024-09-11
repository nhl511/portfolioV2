import React from "react";
import styles from "./blog.module.css";
import Blogs from "./components/Blogs/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "",
};
const page = () => {
  return (
    <div className={styles.container}>
      <Blogs />
    </div>
  );
};

export default page;
