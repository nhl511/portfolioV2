"use client";
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import { Typography } from "@mui/material";

const Footer = () => {
  const handleClick = () => {
    window.open("https://www.facebook.com/hwanglong2k", "_blank");
  };
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Typography>Info</Typography>
        <div>
          <Typography component="span">Get in touch </Typography>
          <Typography
            component="span"
            className={styles.info}
            onClick={handleClick}
          >
            @fstackdev
          </Typography>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src="/images/Fstackdev.svg"
            layout="responsive"
            width={100}
            height={50}
            objectFit="contain"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
