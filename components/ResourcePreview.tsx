import { FC } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { AppTheme } from "../styles/theme";
import { IResource } from "../models/Resource";

const useStyles = createUseStyles((theme: AppTheme) => ({
  resourcePreview: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: [24, 32],
    marginTop: 18,
    backgroundColor: `${theme.colors.ui[1].base}`,
    borderRadius: 4,
  },
  resourceIdentifiers: {

  },
  resourceStats: {
    textAlign: "right",
  },
  name: {
    ...theme.typography.subheading,
    color: `${theme.colors.ui[1].text.primary}`,
  },
  previewDetail: {
    ...theme.typography.body,
    color: `${theme.colors.ui[1].text.secondary}`,
    marginBottom: 6,
    "& > span": {
      fontSize: 18,
      marginLeft: 6,
      verticalAlign: "middle",
    },
  },
}));

export interface ResourcePreviewProps {
  resource: IResource,
}

export const ResourcePreview: FC<ResourcePreviewProps> = (props) => {
  const theme = useTheme<AppTheme>();
  const classes = useStyles({ theme });

  return (
    <div className={classes.resourcePreview}>
      <div className={classes.resourceIdentifiers}>
        <h3 className={classes.name}>{props.resource.name}</h3>
        <p className={classes.previewDetail}>{props.resource.coach}</p>
      </div>
      <div className={classes.resourceStats}>
        <p className={classes.previewDetail}>{props.resource.rating} / 5 <span className="material-icons">star</span></p>
        <p className={classes.previewDetail}>{props.resource.numDownloads} downloads <span className="material-icons">download</span></p>
      </div>
    </div>
  );
};