import React from "react";
import Item from "../Item/Item";
import { Grid2 } from "@mui/material";

const Techs = () => {
  const items: itemType[] = [
    {
      title: "HTML",
      imageUrl: "/images/html.png",
    },
    {
      title: "CSS",
      imageUrl: "/images/css.png",
    },
    {
      title: "Javascript",
      imageUrl: "/images/js.png",
    },
    {
      title: "Reactjs",
      imageUrl: "/images/react.webp",
    },
    {
      title: "Nextjs",
      imageUrl: "/images/nextjs.png",
    },
    {
      title: "Nodejs",
      imageUrl: "/images/nodejs.png",
    },

    {
      title: "MongoDB",
      imageUrl: "/images/mongodb.svg",
    },
    {
      title: "Tailwind",
      imageUrl: "/images/tailwind.svg",
    },
    {
      title: "Bootstrap",
      imageUrl: "/images/bootstrap.svg",
    },
    {
      title: "Material UI",
      imageUrl: "/images/mui.png",
    },
    {
      title: "Ant Design",
      imageUrl: "/images/ant.png",
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
