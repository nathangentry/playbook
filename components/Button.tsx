import { FC, ReactNode, MouseEvent } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { AppTheme } from "../styles/theme";

const useStyles = createUseStyles((theme: AppTheme) => ({
  button: {
    ...theme.typography.button,
    padding: [8, 16, 8, 16],
    borderRadius: 2,
    border: "none",
    outline: "none",
    textDecoration: "none",
    cursor: "pointer",
    transition: "background-color 0.2s ease, color 0.2s ease, border 0.2s ease",
    "&.primary": {
      color: `${theme.colors.primary.text.primary}`,
      backgroundColor: `${theme.colors.primary.base}`,
      "&:hover": {
        backgroundColor: `${theme.colors.primary.active}`,
      }
    },
    "&.secondary": {
      color: `${theme.colors.primary.text.primary}`,
      backgroundColor: `${theme.colors.secondary.base}`,
      "&:hover": {
        backgroundColor: `${theme.colors.secondary.active}`,
      }
    },
    "&.toolbar": {
      color: `${theme.colors.ui[0].text.primary}`,
      backgroundColor: `${theme.colors.ui[0].base.opacity(0)}`,
      borderBottom: `2px solid ${theme.colors.primary.base.opacity(0)}`,
      "&:hover": {
        color: `${theme.colors.primary.base}`,
        borderBottom: `2px solid ${theme.colors.primary.base}`,
      }
    },
  },
}));

export interface ButtonProps {
  type: string,
  text: string,
  start?: ReactNode,
  end?: ReactNode,
  onClick?: (ev: MouseEvent<HTMLButtonElement>) => void,
  href?: string,
  className?: string,
}

export const Button: FC<ButtonProps> = (props) => {
  const theme = useTheme<AppTheme>();
  const classes = useStyles({ theme });

  return (
    <>
      {
        props.onClick
          ? <ClickableButton {...props} />
          : <LinkButton {...props} />
      }
    </>
  );
}

const ClickableButton: FC<ButtonProps> = (props) => {
  const theme = useTheme<AppTheme>();
  const classes = useStyles({ theme });

  return (
    <button className={`${classes.button} ${props.type} ${props.className}`} onClick={props.onClick}>
      {props.start}{props.text}{props.end}
    </button>
  );
};

const LinkButton: FC<ButtonProps> = (props) => {
  const theme = useTheme<AppTheme>();
  const classes = useStyles({ theme });

  return (
    <a href={props.href}>
      <button className={`${classes.button} ${props.type} ${props.className}`}>
        {props.start}{props.text}{props.end}
      </button>
    </a>
  );
};