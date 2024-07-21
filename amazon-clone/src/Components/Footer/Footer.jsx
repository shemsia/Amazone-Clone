import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footercontent}>
        <p>
          &copy; {new Date().getFullYear()} Amazon Clone. Built by{" "}
          <Link
            to="https://shemsia.github.io/shemsia-portfolio/website/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shemsia Muhammed
          </Link>
        </p>
        <p>Addis Ababa, Ethiopia</p>
      </div>
    </footer>
  );
};

export default Footer;
