import React from "react";
import styles from "./item.module.css";
import Image from "next/image";
import { Typography } from "@mui/material";
const Item = ({ item }: { item: itemType }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={item.imageUrl} layout="fill" objectFit="cover" alt="" />
      </div>
      <Typography>{item.title}</Typography>
    </div>
  );
};

export default Item;
