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
                            I’m a Full-Stack Developer passionate about building optimized web applications with
                            seamless user experiences. Proficient in <b>React.js, Next.js</b> for the Frontend and <b>Node.js,
                            Express.js</b> for the Backend, I enjoy developing dynamic, efficient, and scalable web
                            solutions.
                        </Typography>
                        <Typography variant="body2" className={styles.para2}>
                            With experience in <b>RESTful API development, database management (MySQL, MongoDB)</b>,
                            and <b>query optimization</b>, I focus on creating high-performance applications. I also
                            have hands-on experience with <b>AWS services (EC2, RDS)</b> and deployment
                            on <b>Vercel</b> and other cloud platforms.
                        </Typography>
                        <Typography variant="body2" className={styles.para3}>
                            Constantly learning and exploring new technologies, I aim to craft innovative solutions that
                            enhance user interaction and performance. I thrive in collaborative environments and look
                            forward to contributing to impactful projects.
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
