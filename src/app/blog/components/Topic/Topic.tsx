import React from "react";
import styles from "./topic.module.css";
import { Chip } from "@mui/material";

const Topic = ({
  topic,
  topicState,
  setTopic,
}: {
  topic: string;
  topicState: string;
  setTopic: any;
}) => {
  return (
    <Chip
      label={topic}
      className={`${styles.chip} ${topicState === topic && styles.active}`}
      onClick={() => setTopic(topic)}
    />
  );
};

export default Topic;
