import { Grid2 } from "@mui/material";
import React from "react";
import Item from "../Item/Item";

const Tools = () => {
  const items: itemType[] = [
    {
      title: "Git",
      imageUrl: "/images/git.webp",
    },
    {
      title: "Github",
      imageUrl: "/images/github.jpeg",
    },
    {
      title: "NPM",
      imageUrl: "/images/npm.png",
    },
    {
      title: "Postman",
      imageUrl: "/images/postman.svg",
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

export default Tools;
