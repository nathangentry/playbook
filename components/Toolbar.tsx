import Link from "next/link";
import { FC, ReactNode } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { AppTheme } from "../styles/theme";
import { Button } from "./Button";

const useStyles = createUseStyles((theme: AppTheme) => ({
	toolbar: {
		width: "100vw",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		padding: [50, 120, 0, 120],
		position: "absolute",
		top: 0,
		left: 0,
	},
	start: {
		marginRight: 24,
	},
	logoContainer: {
		flexGrow: 1,
	},
	logo: {
		height: 48,
	},
	end: {},
	toolbarLink: {
		marginLeft: 24,
	},
}));

export interface ToolbarProps {
	start?: ReactNode,
	title?: string,
	end?: ReactNode,
	active?: string,
}

export const Toolbar: FC<ToolbarProps> = (props) => {
	const theme = useTheme<AppTheme>();
	const classes = useStyles({ theme });

	return (
		<div className={classes.toolbar}>
			{props.start && <div className={classes.start}>{props.start}</div>}
			<Link href="/">
				<a className={classes.logoContainer}><img src="/assets/wordmark.svg" alt="Playbook Coaches Logo" className={classes.logo} /></a>
			</Link>
			<div className={classes.end}>
				<Button href="/library" text="Library" type="toolbar" className={`${classes.toolbarLink} ${props.active === "library" ? "active" : ""}`} />
				<Button href="/login" text="Log In" type="toolbar" className={`${classes.toolbarLink} ${props.active === "login" ? "active" : ""}`} />
				<Button href="/signup" text="Sign Up" type="primary" className={`${classes.toolbarLink} ${props.active === "signup" ? "active" : ""}`} />
			</div>
		</div>
	);
};

Toolbar.defaultProps = {
	title: "Playbook",
}