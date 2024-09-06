"use client";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "./item.module.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

const Item = ({ item }: { item: projectType }) => {
  const handleLearnMoreClick = (url: any) => {
    window.open(url, "_blank");
  };
  return (
    <Card className={styles.card}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={item.imgUrl}
      />
      <CardContent>
        <Typography
          gutterBottom
          component="div"
          sx={{ textAlign: "center", fontWeight: "700" }}
        >
          {item.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: "300",
            height: { xs: "150px", sm: "120px", lg: "100px" },
          }}
        >
          {item.des}
        </Typography>
        <Typography variant="body2" noWrap>
          {item.techs}
        </Typography>
      </CardContent>
      <CardActions className={styles.cardActions}>
        <IconButton
          disabled={item.source ? false : true}
          size="small"
          sx={{ color: "#ffffff" }}
          onClick={() => handleLearnMoreClick(item.source)}
        >
          <GitHubIcon fontSize="inherit" />
        </IconButton>

        <IconButton
          disabled={item.url ? false : true}
          size="small"
          sx={{ color: "#ffffff" }}
          onClick={() => handleLearnMoreClick(item.url)}
        >
          <OpenInNewIcon fontSize="inherit" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Item;
