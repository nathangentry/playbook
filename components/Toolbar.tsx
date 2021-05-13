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
	title: {
		...theme.typography.heading,
		color: `${theme.colors.ui[2].text.primary}`,
		flexGrow: 1,
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
}

export const Toolbar: FC<ToolbarProps> = (props) => {
	const theme = useTheme<AppTheme>();
	const classes = useStyles({ theme });

	return (
		<div className={classes.toolbar}>
			{props.start && <div className={classes.start}>{props.start}</div>}
			<h1 className={classes.title}>{props.title}</h1>
			<div className={classes.end}>
				<Button href="/library" text="Library" type="toolbar" className={classes.toolbarLink} />
				<Button href="/login" text="Log In" type="toolbar" className={classes.toolbarLink} />
				<Button href="/signup" text="Sign Up" type="primary" className={classes.toolbarLink} />
			</div>
		</div>
	);
};

Toolbar.defaultProps = {
	title: "Playbook",
}