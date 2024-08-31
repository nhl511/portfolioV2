import React from "react";
import styles from "./about.module.css";
import { Grid2, Typography } from "@mui/material";
import Image from "next/image";
import { Metadata } from "next";
import Skills from "./components/Skills/Skills";

export const metadata: Metadata = {
  title: "About",
  description: "",
};
const page = () => {
  const me = require("../.././../public/images/me.jpeg");

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Grid2 container>
          <Grid2 size={{ xs: 12, lg: 4 }}>
            <div className={styles.titleContainer}>
              <Typography variant="h5" fontWeight={700} sx={{ width: "200px" }}>
                About me
              </Typography>
              <div className={styles.bar}></div>
            </div>
          </Grid2>
        </Grid2>
        <Grid2 container>
          <Grid2
            size={{ xs: 12, lg: 4 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: {
                xs: "20px",
                lg: "0px",
              },
            }}
          >
            <div className={styles.imageWrapper}>
              <Image src={me} layout="fill" objectFit="cover" alt="" />
            </div>
          </Grid2>
          <Grid2
            size={{ xs: 12, lg: 8 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              doloremque inventore expedita ab vero optio ea quibusdam minima
              maxime laudantium, vel odio facere ipsam sed quasi, corporis
              quaerat illo? Ad doloremque pariatur magnam facilis ut cupiditate
              debitis! Asperiores expedita corrupti quo numquam laudantium ea.
            </Typography>
            <Typography variant="body2">
              Vel rem repellendus! Sed odit magni rerum hic vel delectus quaerat
              laboriosam, quae provident quas animi, deserunt fugiat distinctio
              maiores et saepe. Veniam architecto earum totam ipsum nemo sunt
              rerum quia praesentium. Quaerat, dicta dolorum? Voluptatem
              excepturi vel culpa veniam minima possimus explicabo consequuntur
              ad earum commodi doloribus quaerat, alias nostrum, cumque dolorem
              quos libero dolor.
            </Typography>
          </Grid2>
        </Grid2>
      </div>
      <div className={styles.bottom}>
        <Grid2 container>
          <div className={styles.titleContainer}>
            <Grid2 size={{ xs: 1 }}>
              <div className={styles.bar}></div>
            </Grid2>
            <Grid2 size={{ xs: 11 }}>
              <Typography variant="h5" fontWeight={700}>
                Skills
              </Typography>
            </Grid2>
          </div>
        </Grid2>
        <Skills />
      </div>
    </div>
  );
};

export default page;
