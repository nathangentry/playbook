import { FC } from 'react';
import Head from 'next/head';
import { createUseStyles, useTheme } from "react-jss";
import { AppTheme } from '../styles/theme';
import { Page } from '../components/Page';
import { Toolbar } from '../components/Toolbar';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';

const useStyles = createUseStyles((theme: AppTheme) => ({
  section: {
    width: "100vw",
    display: "flex",
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
  },
  sectionContent: {
    width: 650,
    "& > h2": {
      ...theme.typography.title,
      color: `${theme.colors.ui[0].text.primary}`,
      marginBottom: 6,
    },
    "& > p": {
      ...theme.typography.large,
      color: `${theme.colors.ui[0].text.secondary}`,
      marginBottom: 24,
    },
  },
  hero: {
    padding: [240, 120, 240, 120],
    backgroundImage: `linear-gradient(to bottom, ${theme.colors.ui[2].base.opacity(0.85)}, ${theme.colors.ui[2].base.opacity(0.65)}), url(/assets/huddle.jpg)`,
  },
  about: {
    backgroundColor: `${theme.colors.ui[0].base}`,
    padding: 120,
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    columnGap: 24,
    position: "relative",
  },
  founderImage: {
    gridColumn: "1 / span 5",
    width: "100%",
    position: "relative",
    borderRadius: 4,
    overflow: "hidden",
  },
  founderLetter: {
    gridColumn: "7 / span 6",
    width: "100%",
    position: "relative",
  },
  founderName: {
    marginBottom: "0px !important",
  },
  founderPosition: {
    color: `${theme.colors.ui[0].text.primary.opacity(0.5)} !important`,
  },
  courtImage: {
    position: "absolute",
    top: "5%",
    left: "-5%",
    height: "90%",
  },
  cta: {
    flexDirection: "column",
    padding: 120,
    alignItems: "center",
    textAlign: "center",
    backgroundImage: `linear-gradient(to left, ${theme.colors.ui[2].base.opacity(0.6)}, ${theme.colors.ui[2].base.opacity(0.6)}), url(/assets/basketball.jpg)`,
  },
  decorativeLine: {
    width: 60,
    height: 4,
    backgroundColor: `${theme.colors.primary.base}`,
    marginBottom: 24,
  },
  buttonGroup: {
    "& button": {
      marginRight: 12,
    },
  },
}));

export const HomePage: FC = () => {
  const theme = useTheme<AppTheme>();
  const classes = useStyles({ theme });

  return (
    <>
      <Head>
        <title>Playbook – Coach Better</title>
        <meta name="description" content="Unlock your coaching potential with Playbook, a platform connecting experienced coaches with materials and those just starting out who are in need of help." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Hind:wght@400;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <Page>
        <Toolbar />
        <div className={`${classes.section} ${classes.hero}`}>
          <div className={classes.sectionContent}>
            <div className={classes.decorativeLine} />
            <h2>Unlock Your coaching potential with Playbook</h2>
            <p>Get coaching material provided by experienced coaches who have seen it work. Have confidence in your practice plan or game strategy right from the beginning.</p>
            <div className={classes.buttonGroup}>
              <Button href="/library" text="View Our Library" type="primary" />
              <Button href="/signup" text="Sign Up" type="secondary" />
            </div>
          </div>
        </div>
        <div className={`${classes.section} ${classes.about}`}>
          <img src="/assets/courtImage.png" alt="Decorative Basketball Court" className={classes.courtImage} />
          <img src="/assets/founderImage.jpg" alt="Basketball coach and Playbook founder Maria Heyen instructing a student." className={classes.founderImage} />
          <div className={`${classes.sectionContent} ${classes.founderLetter}`}>
            <div className={classes.decorativeLine} />
            <h2>Coaching is difficult. That’s why I started Playbook.</h2>
            <p>As a young female coach, the first day I walked into a gym to coach 7th Grade Boys wasn’t easy. Heck, the first year wasn’t easy. I couldn’t seem to get into a consistent grove with the practice and game material I was using to coach. That’s why I started Playbook: a coach to coach platform that delivers easy to use practice plans, plays and drills that cater specifically to the type of team YOU are coaching.</p>
            <p>Playbook offers a wide variety of basketball material all uploaded by experienced coaches. Use Playbook’s quick filter to match your Team Type and BOOM you have easy access to all the coaching materials you need to best serve your athletes.</p>
            <p>Whether you're a parent coaching your child's little league team or a Varsity coach looking to help build a more cohesive practice, Playbook can help you meet your coaching goals. Coach Better with Playbook.</p>
            <p className={classes.founderName}>Maria Heyen</p>
            <p className={classes.founderPosition}>Founder, CEO</p>
          </div>
        </div>
        <div className={`${classes.section} ${classes.cta}`}>
          <div className={classes.sectionContent}>
            <h2>Sign up for access to our library of proven tactics</h2>
            <p>Unlock all of the plays, drills, and practice sessions you want by signing up for a subscription account.</p>
            <div className={classes.buttonGroup}>
              <Button href="/signup" text="Sign Up" type="primary" />
            </div>
          </div>
        </div>
        <Footer />
      </Page>
    </>
  )
}

export default HomePage;