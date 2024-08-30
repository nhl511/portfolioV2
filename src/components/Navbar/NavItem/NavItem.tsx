import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./navItem.module.css";

const NavItem = ({ link }: { link: LinkType }) => {
  const pathName = usePathname();

  return (
    <Link
      href={link.path}
      className={`${styles.container} ${
        pathName === link.path && styles.active
      }`}
    >
      <span>{link.title}</span>
    </Link>
  );
};

export default NavItem;
