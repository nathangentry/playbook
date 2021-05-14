import { FC, useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { createUseStyles, useTheme } from "react-jss";
import { AppTheme } from '../../styles/theme';
import { Page } from '../../components/Page';
import { Toolbar } from '../../components/Toolbar';
import { Dropdown } from '../../components/Dropdown';
import { ResourcePreview } from '../../components/ResourcePreview';
import { Footer } from '../../components/Footer';
import data from '../../util/data';

const useStyles = createUseStyles((theme: AppTheme) => ({
  libraryContent: {
    backgroundColor: `${theme.colors.ui[0].base}`,
    padding: [160, 120],
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
  },
  filterPanel: {
    gridColumn: "1 / span 3",
    display: "flex",
    flexDirection: "column",
    alignItems: "stetch",
  },
  resultsPanel: {
    gridColumn: "5 / span 8",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
  panelHeader: {
    display: "flex",
    alignItems: "center",
  },
  panelHeading: {
    ...theme.typography.preTitle,
    color: `${theme.colors.ui[0].text.secondary}`,
    marginRight: 12,
  },
  headerLine: {
    height: 1,
    backgroundColor: `${theme.colors.ui[0].text.secondary}`,
    flexGrow: 1
  },
  resultsCounter: {
    ...theme.typography.small,
    color: `${theme.colors.ui[0].text.secondary}`,
    marginLeft: 12,
  },
  resultsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
  emptyStateContainer: {
    paddingTop: 120,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  emptyStateIcon: {
    fontSize: 72,
    color: `${theme.colors.primary.base}`,
    marginBottom: 18,
  },
  emptyStateMessage: {
    ...theme.typography.body,
    color: `${theme.colors.ui[0].text.primary}`,
  },
}));

export const LibraryPage: FC = () => {
  const router = useRouter();

  const theme = useTheme<AppTheme>();
  const classes = useStyles({ theme });

  const types = {
    plays: ["Offensive", "Defensive"],
    drills: ["Shooting", "Passing", "Dribbling", "Conditioning", "Inbounding"],
    practices: ["30 minute", "60 minute", "90 minute"],
  };
  const levels = ["elementary", "intermediate", "advanced"];
  const genders = ["boys", "girls", "co-ed"];

  const [results, setResults] = useState(data);
  const [resourceGroup, setResourceGroup] = useState<"plays" | "drills" | "practices">("plays");
  const [resourceType, setResourceType] = useState("");
  const [level, setLevel] = useState("");
  const [gender, setGender] = useState("");

  const pageRef = useRef<HTMLDivElement>();

  useEffect(() => {
    updateFromSlug();
  }, [router]);

  useEffect(() => {
    if (types[resourceGroup].map(t => t.toLowerCase()).includes(resourceType) && levels.includes(level) && genders.includes(gender)) {
      setResults(data.filter((result) => (
        result.group === resourceGroup && result.type === resourceType && result.level === level && result.gender === gender
      )));
      router.push({
        pathname: `/library/${resourceType.split(" ").join("-")}-basketball-${resourceGroup}-for-${level}-${gender}`
      }).then(() => pageRef.current?.scrollTo(0, 0));
    }
  }, [resourceGroup, resourceType, level, gender]);

  useEffect(() => {
    if (!types[resourceGroup].includes(resourceType)) {
      setResourceType(types[resourceGroup][0].toLowerCase());
    }
  }, [resourceGroup]);

  const updateFromSlug = () => {
    // expect in the format of [type]-basketball-[group]-for-[level]-[gender]
    const slug = router?.query?.slug;
    if (typeof slug === "string") {
      const rType = slug.split("-basketball-")[0].split("-").join(" ");
      const rGroup = slug.split("-basketball-")[1].split("-for-")[0];
      const rLevel = slug.split("-for-")[1].split("-")[0];
      const rGender = slug.split("-for-")[1].split("-").slice(1).join("-");

      if (rGroup === "plays" || rGroup === "drills" || rGroup === "practices") {
        setResourceGroup(rGroup);
        if (types[rGroup].map(t => t.toLowerCase()).includes(rType)) {
          setResourceType(rType);
        } else {
          setResourceType(types[rGroup][0].toLowerCase());
        }
      } else {
        setResourceGroup("plays");
        setResourceType(types["plays"][0]);
      }

      if (levels.includes(rLevel)) {
        setLevel(rLevel);
      } else {
        setLevel(levels[0]);
      }

      if (genders.includes(rGender)) {
        setGender(rGender);
      } else {
        setGender(genders[0]);
      }
    }
  }

  return (
    <>
      <Head>
        <title>Library | Playbook – Coach Better</title>
        <meta name="description" content="Unlock your coaching potential with Playbook, a platform connecting experienced coaches with materials and those just starting out who are in need of help." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Hind:wght@400;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <Page ref={pageRef}>
        <Toolbar active="library" />
        <div className={classes.libraryContent}>
          <div className={classes.filterPanel}>
            <div className={classes.panelHeader}>
              <h2 className={classes.panelHeading}>Filter</h2>
              <div className={classes.headerLine} />
            </div>
            <form>
              <Dropdown name="resource" label="Resource" value={resourceGroup} onChange={setResourceGroup}>
                <option value="plays">Plays</option>
                <option value="drills">Drills</option>
                <option value="practices">Practices</option>
              </Dropdown>
              <Dropdown name="type" label="Type" value={resourceType} onChange={setResourceType}>
                {types[resourceGroup].map(t => <option value={t.toLowerCase()}>{t}</option>)}
              </Dropdown>
              <Dropdown name="level" label="Level" value={level} onChange={setLevel}>
                <option value="elementary">Elementary</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </Dropdown>
              <Dropdown name="gender" label="Gender" value={gender} onChange={setGender}>
                <option value="co-ed">Co-ed</option>
                <option value="boys">Boys</option>
                <option value="girls">Girls</option>
              </Dropdown>
            </form>
          </div>
          <div className={classes.resultsPanel}>
            <div className={classes.panelHeader}>
              <h2 className={classes.panelHeading}>Results</h2>
              <div className={classes.headerLine} />
              <p className={classes.resultsCounter}>{results.length} result{results.length !== 1 ? "s" : ""}</p>
            </div>
            <div className={classes.resultsContainer}>
              {results.length > 0
                ? results.map(result => <ResourcePreview resource={result} />)
                : <div className={classes.emptyStateContainer}>
                  <span className={`material-icons ${classes.emptyStateIcon}`}>search</span>
                  <p className={classes.emptyStateMessage}>No Results Found</p>
                </div>
              }
            </div>
          </div>
        </div>
        <Footer />
      </Page>
    </>
  );
};

export default LibraryPage;