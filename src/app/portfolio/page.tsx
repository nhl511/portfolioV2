import { Metadata } from "next";
import React from "react";
import styles from "./portfolio.module.css";
import { Grid2, Typography } from "@mui/material";
import Item from "./components/Item/Item";
export const metadata: Metadata = {
  title: "Portfolio",
  description: "",
};
const projects: projectType[] = [
  {
    title: "Personal Website",
    des: "My personal website. I created this website to display my profile, skills and projects. As well as my place to try new technology.",
    techs: "NextJs, Material UI",
    imgUrl: "/images/personal-website.png",
    url: "https://long-portfolio.vercel.app",
    source: "https://github.com/nhl511/portfolioV2",
  },
  {
    title: "EngVoca",
    des: "My website offers all the vocabulary from 12 grades of English in Vietnam. Learn, practice, and test your knowledge while tracking which words you’ve mastered and which still need improvement.",
    techs:
      "NextJs, MongoDB, Next Auth, Chart.js, Formik, Yup, xlsx, Speech Synthesis, Clound Text-to-Speech",
    imgUrl: "/images/engvoca.png",
    url: "https://learning-english-ten.vercel.app",
    source: "https://github.com/nhl511/Learning-English",
  },
  {
    title: "House Rentals",
    des: "Website that helps tenants find rental properties in the Ho Chi Minh City area. It also supports contract management and bill payment.",
    techs: "ReactJs, Redux Toolkit, Ant Design, SCSS",
    imgUrl: "/images/house-rentals.png",
  },
  {
    title: "Voice Spire",
    des: "Voiceover rental website. It helps hirers find suitable voiceovers and it also allows readers to apply for jobs.",
    techs: "ReactJs",
    imgUrl: "/images/voice-spire.png",
    source: "https://github.com/nhl511/voice-spire-client",
  },
];
const PortfolioPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Typography variant="h5" sx={{ fontWeight: "700" }}>
          Past Project Experience
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "300" }}>
          Explore the projects I've worked on so far
        </Typography>
      </div>
      <div className={styles.bottom}>
        <Grid2 container spacing={2}>
          {projects.map((item: projectType) => (
            <Grid2 size={{ xs: 12, sm: 6, lg: 4 }} key={item.title}>
              <Item item={item} />
            </Grid2>
          ))}
        </Grid2>
      </div>
    </div>
  );
};

export default PortfolioPage;
