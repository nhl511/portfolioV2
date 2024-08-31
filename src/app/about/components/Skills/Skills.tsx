"use client";
import { Button } from "@mui/material";
import React, { useState } from "react";
import styles from "./skills.module.css";
import Techs from "../Techs/Techs";
import Tools from "../Tools/Tools";
const Skills = () => {
  const [techs, setTechs] = useState(true);
  return (
    <div>
      <div className={styles.buttonWrapper}>
        <Button
          variant="text"
          className={`${styles.button} ${techs && styles.active}`}
          onClick={() => setTechs(true)}
        >
          Tech Stack
        </Button>
        <Button
          variant="text"
          className={`${styles.button} ${!techs && styles.active}`}
          onClick={() => setTechs(false)}
        >
          Tools
        </Button>
      </div>
      {techs ? <Techs /> : <Tools />}
    </div>
  );
};

export default Skills;
