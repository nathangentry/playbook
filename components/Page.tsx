import React, { FC } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { AppTheme } from "../styles/theme";

const useStyles = createUseStyles((theme: AppTheme) => ({
	page: {
		width: "100vw",
		height: "100vh",
		position: "fixed",
		top: 0,
		left: 0,
		overflowX: "hidden",
		overflowY: "auto",
	}
}));

interface PageProps { }

export const Page: FC<PageProps> = React.forwardRef((props, ref: React.ForwardedRef<HTMLDivElement>) => {
	const theme = useTheme<AppTheme>();
	const classes = useStyles({ theme });

	return (
		<div ref={ref} className={classes.page}>
			{props.children}
		</div>
	);
});