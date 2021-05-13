import { FC } from "react";
import { createUseStyles, useTheme } from "react-jss";
import Image from "next/Image";
import { AppTheme } from "../styles/theme";

const useStyles = createUseStyles((theme: AppTheme) => ({
  footer: {
    padding: [0, 120, 60, 120],
    backgroundColor: `${theme.colors.ui[2].base}`,
    position: "relative",
    overflow: "hidden",
  },
  decorativeCourt: {
    position: "absolute",
    width: 640,
    top: -20,
    right: -80,
  },
  decorativeLine: {
    width: 60,
    height: 4,
    backgroundColor: `${theme.colors.primary.base}`,
    marginBottom: 60,
  },
  header: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    ...theme.typography.heading,
    color: `${theme.colors.ui[2].text.primary}`,
    flexGrow: 1,
  },
  tagline: {
    ...theme.typography.subtitle,
    color: `${theme.colors.ui[2].text.secondary}`,
  },
  sectionHeader: {
    ...theme.typography.preTitle,
    color: `${theme.colors.ui[2].text.secondary}`,
    marginTop: 36,
    marginBottom: 12,
  },
  navLinks: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    "& a": {
      ...theme.typography.subtitle,
      color: `${theme.colors.ui[2].text.secondary}`,
      textDecoration: "none",
      transition: `color 0.2s ease`,
      "&:hover": {
        color: `${theme.colors.ui[2].text.primary}`,
      }
    }
  },
  libraryLinks: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    "& > div": {
      display: "flex",
      flexDirection: "column",
    },
    "& a": {
      ...theme.typography.body,
      color: `${theme.colors.ui[2].text.secondary}`,
      textDecoration: "none",
      marginBottom: 8,
      transition: `color 0.15s ease`,
      "&:hover": {
        color: `${theme.colors.ui[2].text.primary}`,
      }
    }
  },
  copyright: {
    ...theme.typography.body,
    color: `${theme.colors.ui[2].text.primary.opacity(0.5)}`,
    textAlign: "center",
    marginTop: 48,
  },
}));

export interface FooterProps {

}

export const Footer: FC<FooterProps> = (props) => {
  const theme = useTheme<AppTheme>();
  const classes = useStyles({ theme });

  return (
    <div className={classes.footer}>
      <img
        src="/assets/footerCourt.png"
        alt="Decorative Basketball Pattern"
        className={classes.decorativeCourt}
      />
      <div className={classes.decorativeLine} />
      <div className={classes.header}>
        <h2 className={classes.logo}>Playbook</h2>
        <h3 className={classes.tagline}>Coach better with Playbook</h3>
      </div>
      <h4 className={classes.sectionHeader}>Navigation</h4>
      <div className={classes.navLinks}>
        <a href="/">Home</a>
        <a href="/library">Library</a>
        <a href="mailto:">Contact Us</a>
        <a href="/login">Log In</a>
        <a href="/signup">Sign Up</a>
      </div>
      <h4 className={classes.sectionHeader}>Library</h4>
      <div className={classes.libraryLinks}>
        <div>
          <a href="/library">Basketball Plays for Elementary Girls</a>
          <a href="/library">Basketball Plays for Elementary Boys</a>
          <a href="/library">Basketball Plays for Elementary Co-ed</a>
          <a href="/library">Basketball Plays for Intermediate Girls</a>
          <a href="/library">Basketball Plays for Intermediate Boys</a>
          <a href="/library">Basketball Plays for Intermediate Co-ed</a>
          <a href="/library">Basketball Plays for Advanced Girls</a>
          <a href="/library">Basketball Plays for Advanced Boys</a>
          <a href="/library">Basketball Plays for Advanced Co-ed</a>
        </div>
        <div>
          <a href="/library">Basketball Drills for Elementary Girls</a>
          <a href="/library">Basketball Drills for Elementary Boys</a>
          <a href="/library">Basketball Drills for Elementary Co-ed</a>
          <a href="/library">Basketball Drills for Intermediate Girls</a>
          <a href="/library">Basketball Drills for Intermediate Boys</a>
          <a href="/library">Basketball Drills for Intermediate Co-ed</a>
          <a href="/library">Basketball Drills for Advanced Girls</a>
          <a href="/library">Basketball Drills for Advanced Boys</a>
          <a href="/library">Basketball Drills for Advanced Co-ed</a>
        </div>
        <div>
          <a href="/library">Basketball Practices for Elementary Girls</a>
          <a href="/library">Basketball Practices for Elementary Boys</a>
          <a href="/library">Basketball Practices for Elementary Co-ed</a>
          <a href="/library">Basketball Practices for Intermediate Girls</a>
          <a href="/library">Basketball Practices for Intermediate Boys</a>
          <a href="/library">Basketball Practices for Intermediate Co-ed</a>
          <a href="/library">Basketball Practices for Advanced Girls</a>
          <a href="/library">Basketball Practices for Advanced Boys</a>
          <a href="/library">Basketball Practices for Advanced Co-ed</a>
        </div>
      </div>
      <p className={classes.copyright}>Playbook Coaches &copy; 2021</p>
    </div>
  );
};