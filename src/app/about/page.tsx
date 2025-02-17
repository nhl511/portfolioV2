import React from "react";
import styles from "./about.module.css";
import {Grid2, Typography} from "@mui/material";
import Image from "next/image";
import {Metadata} from "next";
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
                    <Grid2 size={{xs: 12, lg: 4}}>
                        <div className={styles.titleContainer}>
                            <Typography variant="h5" fontWeight={700} sx={{width: "200px"}}>
                                About me
                            </Typography>
                            <div className={styles.bar}></div>
                        </div>
                    </Grid2>
                </Grid2>
                <Grid2 container>
                    <Grid2
                        size={{xs: 12, lg: 4}}
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
                            <Image src={me} layout="fill" objectFit="cover" alt=""/>
                        </div>
                    </Grid2>
                    <Grid2
                        size={{xs: 12, lg: 8}}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            gap: "20px",
                        }}
                    >
                        <Typography variant="body2" className={styles.para1}>
                            I’m a Front-End Developer passionate about crafting optimized web interfaces and seamless
                            user experiences. Proficient in <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and frameworks
                            like <b>React.js</b> and <b>Next.js</b>, I enjoy building dynamic, responsive applications
                            that perform efficiently.
                        </Typography>
                        <Typography variant="body2" className={styles.para2}>
                            With experience in <b>API integration, web performance optimization, and cloud
                            deployment</b>, I strive to develop modern, scalable solutions. I also work with <b>UI
                            libraries</b> like Material-UI and Tailwind CSS to create clean and accessible designs.
                        </Typography>
                        <Typography variant="body2" className={styles.para3}>
                            Constantly learning and exploring new technologies, I am eager to contribute to innovative
                            projects that push the boundaries of front-end development.
                        </Typography>
                    </Grid2>
                </Grid2>
            </div>
            <div className={styles.bottom}>
                <Grid2 container>
                    <div className={styles.titleContainer}>
                        <Grid2 size={{xs: 1}}>
                            <div className={styles.bar}></div>
                        </Grid2>
                        <Grid2 size={{xs: 11}}>
                            <Typography variant="h5" fontWeight={700}>
                                Skills
                            </Typography>
                        </Grid2>
                    </div>
                </Grid2>
                <Skills/>
            </div>
        </div>
    );
};

export default page;
