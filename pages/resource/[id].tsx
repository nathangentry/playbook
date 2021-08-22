import React, { FC, useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { createUseStyles, useTheme } from "react-jss";
import { AppTheme } from '../../styles/theme';
import { Page } from '../../components/Page';
import { Toolbar } from '../../components/Toolbar';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { PdfViewer } from '../../components/PdfViewer';
import { IResource } from '../../models/Resource';
import firebase from '../../util/firebase';

const useStyles = createUseStyles((theme: AppTheme) => ({
  resourceContent: {
    backgroundColor: `${theme.colors.ui[0].base}`,
    padding: [160, 120],
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
  },
  previewContainer: {
    gridColumn: "1 / span 5",
    height: "calc((5 * ((100vw - (2 * 120px)) / 12)) * 11 / 8.5)",
  },
  lockedState: {
    backgroundColor: `${theme.colors.ui[1].base}`,
    borderRadius: 4,
    height: "100%",
    width: "100%",
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

  const [resource, setResource] = useState<IResource>();
  const [pdfLink, setPdfLink] = useState<string>();
  const [pdf, setPdf] = useState<string>();

  useEffect(() => {
    const id = router?.query?.id;
    fetch(`/api/resource/${id}`)
      .then((response) => response.json())
      .then((resource) => {
        setResource(resource);
      });
  }, [router]);

  useEffect(() => {
    if (resource?.file_link) {
      firebase.storage().refFromURL(resource.file_link).getDownloadURL()
        .then((url) => {
          setPdfLink(url);

          var xhr = new XMLHttpRequest();
          xhr.responseType = 'blob';
          xhr.onload = (event) => {
            var blob = xhr.response;
            setPdf(blob);
          };
          xhr.open('GET', url);
          xhr.send();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [resource]);

  return (
    <>
      <Head>
        <title>{resource?.name} – Basketball coaching resource from {resource?.coach_name} on Playbook</title>
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
            {pdf
              ?
              <PdfViewer file={pdf} />
              :
              <div className={classes.lockedState}>
                <span className={`material-icons ${classes.lockedIcon} `}>lock</span>
                <p className={classes.lockedMessage}>Sign Up to Download</p>
              </div>
            }
          </div>
          <div className={classes.detailsContainer}>
            <div className={classes.detail}>
              <span>Set Name</span>
              <h2 className={classes.resourceName}>{resource?.name}</h2>
            </div>
            <div className={classes.detail}>
              <span>Uploaded By</span>
              <p>{resource?.coach_name}</p>
            </div>
            <div className={classes.detail}>
              <span>Description</span>
              <p>{resource?.description}</p>
            </div>
            <div className={classes.statsContainer}>
              <div className={classes.detail}>
                <span>Total Plays</span>
                <p>{resource?.size}</p>
              </div>
              <div className={classes.detail}>
                <span>Rating</span>
                <p>{(Math.round((resource?.rating ?? 0) * 100) / 100).toFixed(2)} / 5</p>
              </div>
              <div className={classes.detail}>
                <span>Downloads</span>
                <p>{resource?.downloads}</p>
              </div>
            </div>
            {pdfLink
              ?
              <Button href={pdfLink} openNewTab text="Download" type="primary" className={classes.ctaButton} />
              :
              <Button href="/signup" text="Sign Up to Download" type="primary" className={classes.ctaButton} />
            }
          </div>
        </div>
        <Footer />
      </Page>
    </>
  );
};

export default ResourcePage;