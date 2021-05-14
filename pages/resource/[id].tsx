import { FC, useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { createUseStyles, useTheme } from "react-jss";
import { AppTheme } from '../../styles/theme';
import { Page } from '../../components/Page';
import { Toolbar } from '../../components/Toolbar';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';

const useStyles = createUseStyles((theme: AppTheme) => ({
  resourceContent: {
    backgroundColor: `${theme.colors.ui[0].base}`,
    padding: [160, 120],
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
  },
  previewContainer: {
    gridColumn: "1 / span 5",
    borderRadius: 4,
    overflow: "hidden",
    height: "calc((5 * ((100vw - (2 * 120px)) / 12)) * 11 / 8.5)",
  },
  lockedState: {
    backgroundColor: `${theme.colors.ui[1].base}`,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  lockedIcon: {
    fontSize: 72,
    marginBottom: 18,
    color: `${theme.colors.primary.base}`,
  },
  lockedMessage: {
    ...theme.typography.body,
    color: `${theme.colors.ui[1].text.primary}`,
  },
  detailsContainer: {
    gridColumn: "7 / span 6",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    height: "fit-content",
    position: "sticky",
    top: 80,
  },
  detail: {
    "& > span": {
      ...theme.typography.small,
      color: `${theme.colors.ui[0].text.secondary}`,
      marginBottom: 6,
    },
    "& > p": {
      ...theme.typography.body,
      color: `${theme.colors.ui[0].text.primary}`,
      marginBottom: 18,
    },
  },
  resourceName: {
    ...theme.typography.heading,
    color: `${theme.colors.ui[0].text.primary}`,
    marginBottom: 18,
  },
  statsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  ctaButton: {
    marginTop: 42,
  },
}));

export const ResourcePage: FC = (props) => {
  const router = useRouter();

  const theme = useTheme<AppTheme>();
  const classes = useStyles({ theme });

  const [resource, setResource] = useState("-1");

  useEffect(() => {
    const id = router?.query?.id;

    if (typeof id === "string") {
      setResource(id);
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>{resource} | Playbook – Coach Better</title>
        <meta name="description" content="Unlock your coaching potential with Playbook, a platform connecting experienced coaches with materials and those just starting out who are in need of help." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Hind:wght@400;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <Page>
        <Toolbar />
        <div className={classes.resourceContent}>
          <div className={classes.previewContainer}>
            <div className={classes.lockedState}>
              <span className={`material-icons ${classes.lockedIcon}`}>lock</span>
              <p className={classes.lockedMessage}>Sign Up to Download</p>
            </div>
          </div>
          <div className={classes.detailsContainer}>
            <div className={classes.detail}>
              <span>Set Name</span>
              <h2 className={classes.resourceName}>Play Set #{resource}</h2>
            </div>
            <div className={classes.detail}>
              <span>Uploaded By</span>
              <p>Coach Name</p>
            </div>
            <div className={classes.detail}>
              <span>Description</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className={classes.statsContainer}>
              <div className={classes.detail}>
                <span>Total Plays</span>
                <p>75</p>
              </div>
              <div className={classes.detail}>
                <span>Rating</span>
                <p>4.95 / 5</p>
              </div>
              <div className={classes.detail}>
                <span>Downloads</span>
                <p>316</p>
              </div>
            </div>
            <Button href="/signup" text="Sign Up to Download" type="primary" className={classes.ctaButton} />
          </div>
        </div>
        <Footer />
      </Page>
    </>
  );
};

export default ResourcePage;