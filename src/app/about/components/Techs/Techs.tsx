import React from "react";
import Item from "../Item/Item";
import { Grid2 } from "@mui/material";

const Techs = ({items}:{items: itemType[]}) => {
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
