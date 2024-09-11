import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import styles from "./item.module.css";
import Image from "next/image";
import { useSnackbar } from "@/context/SnackbarContext";

const Item = ({ item }: { item: blogType }) => {
  const { showSnackbar } = useSnackbar();

  const handleClick = () => {
    showSnackbar("Comming soon!");
  };
  return (
    <Card className={styles.card} onClick={handleClick}>
      <div className={styles.left}>
        <CardContent>
          <div className={styles.dateWrapper}>
            <div className={styles.bar}></div>
            <Typography variant="caption">{item.date}</Typography>
          </div>
          <Typography variant="subtitle2" className={styles.title} gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="body2" className={styles.content}>
            {item.content}
          </Typography>
        </CardContent>
      </div>
      <div className={styles.right}>
        <CardMedia>
          <div className={styles.imageWrapper}>
            <Image
              src={item.imageUrl}
              layout="fill"
              objectFit="cover"
              alt=""
              style={{ borderRadius: "15px" }}
            />
          </div>
        </CardMedia>
      </div>
    </Card>
  );
};

export default Item;
