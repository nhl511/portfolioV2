"use client";
import {
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
import Image from "next/image";
import { useSnackbar } from "@/context/SnackbarContext";

const Item = ({ item }: { item: projectType }) => {
  const handleLearnMoreClick = (url: any) => {
    window.open(url, "_blank");
  };

  const { showSnackbar } = useSnackbar();

  const handleClick = () => {
    showSnackbar("Comming soon!");
  };

  return (
    <Card className={styles.card} elevation={3} onClick={handleClick}>
      <CardMedia>
        <div className={styles.imageWrapper}>
          <Image src={item.imgUrl} layout="fill" objectFit="cover" alt="" />
        </div>
      </CardMedia>
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
          onClick={(e) => {
            handleLearnMoreClick(item.source);
            e.stopPropagation();
          }}
        >
          <GitHubIcon fontSize="inherit" />
        </IconButton>

        <IconButton
          disabled={item.url ? false : true}
          size="small"
          sx={{ color: "#ffffff" }}
          onClick={(e) => {
            handleLearnMoreClick(item.url);
            e.stopPropagation();
          }}
        >
          <OpenInNewIcon fontSize="inherit" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Item;
