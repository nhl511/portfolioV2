"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import styles from "./navbar.module.css";
import NavItem from "./NavItem/NavItem";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
const drawerWidth = 240;
const publicLinks: LinkType[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

export default function DrawerAppBar(props: Props) {
  const router = useRouter();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box className={styles.drawer} onClick={handleDrawerToggle}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        fstackdev
      </Typography> */}
      <Box sx={{ my: 2 }}>
        <div className={styles.logoWrapper} style={{ marginLeft: "16px" }}>
          <Image
            src="/images/Fstackdev.svg"
            layout="fill"
            objectFit="contain"
            alt=""
            onClick={() => router.push("/")}
          />
        </div>
      </Box>
      <Divider />
      <List>
        {publicLinks.map((link: LinkType) => (
          <ListItem key={link.path} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <NavItem link={link} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" color="primary" className={styles.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{
              flex: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            fstackdev
          </Typography> */}
          <Box
            sx={{
              flex: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            <div className={styles.logoWrapper}>
              <Image
                src="/images/Fstackdev.svg"
                layout="fill"
                objectFit="contain"
                alt=""
                onClick={() => router.push("/")}
              />
            </div>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
              gap: "30px",
            }}
          >
            {publicLinks.map((link: LinkType) => (
              <NavItem key={link.path} link={link} />
            ))}
          </Box>
          <Box
            sx={{
              flex: 1,
              display: { xs: "none", sm: "block" },
            }}
          ></Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
