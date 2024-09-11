import React from "react";
import styles from "./menu.module.css";
import { Typography } from "@mui/material";
import Topic from "../Topic/Topic";

const Menu = ({
  topicState,
  setTopic,
}: {
  topicState: string;
  setTopic: any;
}) => {
  const topics: string[] = ["All", "ReactJS", "Javascript"];
  return (
    <div className={styles.container}>
      <Typography variant="subtitle1" sx={{ fontWeight: "300" }}>
        Let's share experiences, stories, and knowledge together.
      </Typography>
      <div className={styles.bar}></div>
      <div>
        <Typography variant="h6" gutterBottom className={styles.title}>
          Topics
        </Typography>
        <div className={styles.topics}>
          {topics.map((topic) => (
            <Topic
              key={topic}
              topic={topic}
              topicState={topicState}
              setTopic={setTopic}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
