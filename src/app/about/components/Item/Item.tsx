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
      <div className={styles.wrapper}>
        <Typography
          variant="subtitle1"
          className={styles.title}
          sx={{ fontWeight: "700" }}
        >
          {item.title}
        </Typography>
        <Typography variant="body2" className={styles.level}>
          {item.level}
        </Typography>
      </div>
    </div>
  );
};

export default Item;
