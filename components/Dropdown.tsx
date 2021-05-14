import { FC, ChangeEvent } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { AppTheme } from "../styles/theme";

const useStyles = createUseStyles((theme: AppTheme) => ({
  dropdownContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    marginTop: 18,
  },
  label: {
    ...theme.typography.small,
    color: `${theme.colors.ui[0].text.secondary}`,
    marginBottom: 6,
  },
  select: {
    ...theme.typography.body,
    border: `2px solid ${theme.colors.ui[1].base}`,
    borderRightWidth: 12,
    outline: "none",
    boxShadow: `0px 0px 3px ${theme.colors.primary.base.opacity(0)}`,
    padding: [8, 18, 7, 18],
    backgroundColor: `${theme.colors.ui[1].base}`,
    color: `${theme.colors.ui[1].text.primary}`,
    borderRadius: 4,
    cursor: "pointer",
    transition: "box-shadow 0.2s ease",
    "&:hover": {
      boxShadow: `0px 0px 3px ${theme.colors.primary.base}`,
    }
  },
}));

export interface DropdownProps {
  name: string,
  label?: string,
  value: string,
  onChange: (newValue: string) => void,
}

export const Dropdown: FC<DropdownProps> = (props) => {
  const theme = useTheme<AppTheme>();
  const classes = useStyles({ theme });

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    props.onChange(event.target.value);
  }

  return (
    <div className={classes.dropdownContainer}>
      {props.label && <label htmlFor={props.name} className={classes.label}>{props.label}</label>}
      <select id={props.name} className={classes.select} value={props.value} onChange={onChange}>
        {props.children}
      </select >
    </div>
  );
};