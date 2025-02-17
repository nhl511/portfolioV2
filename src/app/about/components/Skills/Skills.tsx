"use client";
import {Button} from "@mui/material";
import React, {useState} from "react";
import styles from "./skills.module.css";
import Techs from "../Techs/Techs";
import {ABOUT_TYPE} from "@/constant/constant";

const Skills = () => {
    const [options, setOptions] = useState<number>(ABOUT_TYPE.LANGUAGES);
    const buttons: aboutButtonType[] = [
        {
            title: "languages",
            className: `${styles.button} ${options === ABOUT_TYPE.LANGUAGES && styles.active}`,
            action: () => setOptions(ABOUT_TYPE.LANGUAGES),
        },
        {
            title: "frontend",
            className: `${styles.button} ${options === ABOUT_TYPE.FRONT_END_FRAMEWORKS_AND_LIBRARIES && styles.active}`,
            action: () => setOptions(ABOUT_TYPE.FRONT_END_FRAMEWORKS_AND_LIBRARIES),
        },
        {
            title: "backend",
            className: `${styles.button} ${options === ABOUT_TYPE.BACKEND_FRAMEWORKS && styles.active}`,
            action: () => setOptions(ABOUT_TYPE.BACKEND_FRAMEWORKS),
        },
        {
            title: "databases",
            className: `${styles.button} ${options === ABOUT_TYPE.DATABASES && styles.active}`,
            action: () => setOptions(ABOUT_TYPE.DATABASES),
        },
        {
            title: "cloud",
            className: `${styles.button} ${options === ABOUT_TYPE.CLOUD && styles.active}`,
            action: () => setOptions(ABOUT_TYPE.CLOUD),
        },
        {
            title: "tools",
            className: `${styles.button} ${options === ABOUT_TYPE.TOOLS && styles.active}`,
            action: () => setOptions(ABOUT_TYPE.TOOLS),
        }
    ]

    const languages: itemType[] = [
        {
            title: "HTML",
            imageUrl: "/images/html.png",
            level: "Advanced",
        },
        {
            title: "CSS",
            imageUrl: "/images/css.png",
            level: "Advanced",
        },
        {
            title: "JavaScript",
            imageUrl: "/images/js.png",
            level: "Intermediate",
        },
        {
            title: "TypeScript",
            imageUrl: "/images/ts.png",
            level: "Intermediate",
        },

    ];

    const frontend: itemType[] = [
        {
            title: "React.JS",
            imageUrl: "/images/react.webp",
            level: "Intermediate",
        },
        {
            title: "Next.JS",
            imageUrl: "/images/nextjs.png",
            level: "Intermediate",
        },
        {
            title: "Axios",
            imageUrl: "/images/axios.jpg",
            level: "Intermediate",
        },
        {
            title: "SWR",
            imageUrl: "/images/swr.png",
            level: "Intermediate",
        },
        {
            title: "Redux",
            imageUrl: "/images/redux.png",
            level: "Basic",
        },
        {
            title: "Tailwind CSS",
            imageUrl: "/images/tailwind.svg",
            level: "Intermediate",
        },
        {
            title: "ShadCN/UI",
            imageUrl: "/images/shadcn:ui.png",
            level: "Intermediate",
        },
        {
            title: "Bootstrap",
            imageUrl: "/images/bootstrap.svg",
            level: "Intermediate",
        },
        {
            title: "Material UI",
            imageUrl: "/images/mui.png",
            level: "Intermediate",
        },
        {
            title: "Ant Design",
            imageUrl: "/images/ant.png",
            level: "Intermediate",
        },
        {
            title: "SCSS",
            imageUrl: "/images/scss.webp",
            level: "Basic",
        },
    ]


    const backend: itemType[] = [
        {
            title: "Node.JS",
            imageUrl: "/images/nodejs.png",
            level: "Intermediate",
        },
        {
            title: "Express.JS",
            imageUrl: "/images/expressjs.png",
            level: "Intermediate",
        },
        {
            title: "Sequelize",
            imageUrl: "/images/sequelize.png",
            level: "Intermediate",
        },
        {
            title: "Mongoose",
            imageUrl: "/images/mongoose.jpeg",
            level: "Intermediate",
        },
        {
            title: "Nodemailer",
            imageUrl: "/images/nodemailer.svg",
            level: "Basic",
        },
        {
            title: "JWT",
            imageUrl: "/images/jwt.png",
            level: "Intermediate",
        },
    ]

    const databases: itemType[] = [
        {
            title: "MySQL",
            imageUrl: "/images/mysql.webp",
            level: "Intermediate",
        },
        {
            title: "MongoDB",
            imageUrl: "/images/mongodb.svg",
            level: "Intermediate",
        },
    ]

    const cloud: itemType[] = [
        {
            title: "AWS",
            imageUrl: "/images/aws.jpeg",
            level: "Basic",
        },
        {
            title: "GCP",
            imageUrl: "/images/gcp.jpeg",
            level: "Basic",
        },
    ]

    const tools: itemType[] = [
        {
            title: "Git",
            imageUrl: "/images/git.webp",
            level: "Intermediate",
        },
        {
            title: "Github",
            imageUrl: "/images/github.jpeg",
            level: "Intermediate",
        },
        {
            title: "NPM",
            imageUrl: "/images/npm.png",
            level: "Intermediate",
        },
        {
            title: "Postman",
            imageUrl: "/images/postman.svg",
            level: "Basic",
        },
        {
            title: "Figma",
            imageUrl: "/images/figma.png",
            level: "Basic",
        },
    ];
    const renderContent = () => {
        switch (options) {
            case ABOUT_TYPE.LANGUAGES:
                return <Techs items={languages}/>;
            case ABOUT_TYPE.FRONT_END_FRAMEWORKS_AND_LIBRARIES:
                return <Techs items={frontend}/>
            case ABOUT_TYPE.CLOUD:
                return <Techs items={cloud}/>
            case ABOUT_TYPE.BACKEND_FRAMEWORKS:
                return <Techs items={backend}/>
            case ABOUT_TYPE.DATABASES:
                return <Techs items={databases}/>
            case ABOUT_TYPE.TOOLS:
                return <Techs items={tools}/>;
            default:
                return null;
        }
    };
    return (
        <div>
            <div className={styles.buttonWrapper}>
                {
                    buttons.map((button: aboutButtonType, index: number) => (
                        <Button
                            key={index}
                            variant="text"
                            className={button.className}
                            onClick={button.action}
                        >
                            {button.title}
                        </Button>
                    ))
                }

            </div>
            {renderContent()}
        </div>
    );
};

export default Skills;
