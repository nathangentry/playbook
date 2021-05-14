import { FC } from "react";
import Link from 'next/link';
import { createUseStyles, useTheme } from "react-jss";
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
    zIndex: 0,
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
  logoContainer: {
    marginRight: 24,
  },
  logo: {
    height: 48,
  },
  tagline: {
    ...theme.typography.large,
    color: `${theme.colors.ui[2].text.primary.opacity(0.5)}`,
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
      ...theme.typography.large,
      color: `${theme.colors.ui[2].text.secondary}`,
      textDecoration: "none",
      transition: `color 0.2s ease`,
      position: "relative",
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
      transition: `color 0.2s ease`,
      position: "relative",
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
        <Link href="/">
          <a className={classes.logoContainer}><img src="/assets/wordmark.svg" alt="Playbook Coaches Logo" className={classes.logo} /></a>
        </Link>
        <h3 className={classes.tagline}>Coach better with Playbook</h3>
      </div>
      <h4 className={classes.sectionHeader}>Navigation</h4>
      <div className={classes.navLinks}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/library"><a>Library</a></Link>
        <Link href="mailto:"><a>Contact Us</a></Link>
        <Link href="/login"><a>Log In</a></Link>
        <Link href="/signup"><a>Sign Up</a></Link>
      </div>
      <h4 className={classes.sectionHeader}>Library</h4>
      <div className={classes.libraryLinks}>
        <div>
          <Link href="/library/offensive-basketball-plays-for-elementary-girls"><a>Basketball Plays for Elementary Girls</a></Link>
          <Link href="/library/offensive-basketball-plays-for-elementary-boys"><a>Basketball Plays for Elementary Boys</a></Link>
          <Link href="/library/offensive-basketball-plays-for-elementary-co-ed"><a>Basketball Plays for Elementary Co-ed</a></Link>
          <Link href="/library/offensive-basketball-plays-for-intermediate-girls"><a>Basketball Plays for Intermediate Girls</a></Link>
          <Link href="/library/offensive-basketball-plays-for-intermediate-boys"><a>Basketball Plays for Intermediate Boys</a></Link>
          <Link href="/library/offensive-basketball-plays-for-intermediate-co-ed"><a>Basketball Plays for Intermediate Co-ed</a></Link>
          <Link href="/library/offensive-basketball-plays-for-advanced-girls"><a>Basketball Plays for Advanced Girls</a></Link>
          <Link href="/library/offensive-basketball-plays-for-advanced-boys"><a>Basketball Plays for Advanced Boys</a></Link>
          <Link href="/library/offensive-basketball-plays-for-advanced-co-ed"><a>Basketball Plays for Advanced Co-ed</a></Link>
        </div>
        <div>
          <Link href="/library/shooting-basketball-drills-for-elementary-girls"><a>Basketball Drills for Elementary Girls</a></Link>
          <Link href="/library/shooting-basketball-drills-for-elementary-boys"><a>Basketball Drills for Elementary Boys</a></Link>
          <Link href="/library/shooting-basketball-drills-for-elementary-co-ed"><a>Basketball Drills for Elementary Co-ed</a></Link>
          <Link href="/library/shooting-basketball-drills-for-intermediate-girls"><a>Basketball Drills for Intermediate Girls</a></Link>
          <Link href="/library/shooting-basketball-drills-for-intermediate-boys"><a>Basketball Drills for Intermediate Boys</a></Link>
          <Link href="/library/shooting-basketball-drills-for-intermediate-co-ed"><a>Basketball Drills for Intermediate Co-ed</a></Link>
          <Link href="/library/shooting-basketball-drills-for-advanced-girls"><a>Basketball Drills for Advanced Girls</a></Link>
          <Link href="/library/shooting-basketball-drills-for-advanced-boys"><a>Basketball Drills for Advanced Boys</a></Link>
          <Link href="/library/shooting-basketball-drills-for-advanced-co-ed"><a>Basketball Drills for Advanced Co-ed</a></Link>
        </div>
        <div>
          <Link href="/library/30-minute-basketball-practices-for-elementary-girls"><a>Basketball Practices for Elementary Girls</a></Link>
          <Link href="/library/30-minute-basketball-practices-for-elementary-boys"><a>Basketball Practices for Elementary Boys</a></Link>
          <Link href="/library/30-minute-basketball-practices-for-elementary-co-ed"><a>Basketball Practices for Elementary Co-ed</a></Link>
          <Link href="/library/30-minute-basketball-practices-for-intermediate-girls"><a>Basketball Practices for Intermediate Girls</a></Link>
          <Link href="/library/30-minute-basketball-practices-for-intermediate-boys"><a>Basketball Practices for Intermediate Boys</a></Link>
          <Link href="/library/30-minute-basketball-practices-for-intermediate-co-ed"><a>Basketball Practices for Intermediate Co-ed</a></Link>
          <Link href="/library/30-minute-basketball-practices-for-advanced-girls"><a>Basketball Practices for Advanced Girls</a></Link>
          <Link href="/library/30-minute-basketball-practices-for-advanced-boys"><a>Basketball Practices for Advanced Boys</a></Link>
          <Link href="/library/30-minute-basketball-practices-for-advanced-co-ed"><a>Basketball Practices for Advanced Co-ed</a></Link>
        </div>
      </div>
      <p className={classes.copyright}>Playbook Coaches &copy; 2021</p>
    </div>
  );
};