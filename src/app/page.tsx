"use client";
import { Grid2, Typography } from "@mui/material";
import styles from "./page.module.css";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const me = require("../../public/me.jpeg");

  return (
    <div className={styles.container}>
      <Grid2 container spacing={10} sx={{ width: "100%" }}>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center",
              md: "right",
            },
            alignItems: "center",
          }}
        >
          <div>
            <Typography variant="subtitle1" fontWeight={300}>
              Hello World, I&apos;m
            </Typography>
            <Typography variant="h3" gutterBottom={true} fontWeight={700}>
              Hoang Long
            </Typography>
            {/* <Typography variant="h5" gutterBottom={true} fontWeight={300}>
            Web Developer
          </Typography> */}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Web Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Full-stack Engineer",
                2000,
              ]}
              wrapper="h5"
              speed={15}
              style={{
                fontSize: "25px",
                fontWeight: 300,
                marginBottom: "10px",
              }}
              repeat={Infinity}
            />
            <Typography variant="subtitle1" fontWeight={500}>
              Welcome to My personal webiste.
            </Typography>
          </div>
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center",
              md: "left",
            },
            alignItems: "center",
          }}
        >
          <div className={styles.right}>
            <Image src={me} layout="fill" objectFit="cover" alt="" />
          </div>
        </Grid2>
      </Grid2>
    </div>
  );
}
