import React from "react";
import Item from "../Item/Item";
import { Grid2 } from "@mui/material";

const Techs = () => {
  const items: itemType[] = [
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
      title: "Javascript",
      imageUrl: "/images/js.png",
      level: "Intermediate",
    },
    {
      title: "Reactjs",
      imageUrl: "/images/react.webp",
      level: "Intermediate",
    },
    {
      title: "Nextjs",
      imageUrl: "/images/nextjs.png",
      level: "Intermediate",
    },
    {
      title: "Nodejs",
      imageUrl: "/images/nodejs.png",
      level: "Basic",
    },

    {
      title: "MongoDB",
      imageUrl: "/images/mongodb.svg",
      level: "Basic",
    },
    {
      title: "Tailwind",
      imageUrl: "/images/tailwind.svg",
      level: "Basic",
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
  ];
  return (
    <Grid2 container spacing={4}>
      {items.map((item) => (
        <Grid2 key={item.title} size={{ xs: 6, md: 4, lg: 3 }}>
          <Item item={item} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Techs;
