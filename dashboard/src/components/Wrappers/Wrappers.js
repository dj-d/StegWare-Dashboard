import React from "react";
import {
	withStyles,
	Badge as BadgeBase,
	Typography as TypographyBase,
	Button as ButtonBase
} from "@material-ui/core";
import {useTheme} from "@material-ui/styles";
import classnames from "classnames"

// styles
import useStyles from "./styles"

/* ############################################################### */

function getColor(color, theme, brightness = "main") {
	if (color && theme.palette[color] && theme.palette[color][brightness]) {
		return theme.palette[color][brightness];
	}
}

function getFontWeight(style) {
	switch (style) {
		case "light":
			return 300;
		case "medium":
			return 500;
		case "bold":
			return 600;
		default:
			return 400;
	}
}

function getFontSize(size, variant = "", theme) {
	let multiplier;

	switch (size) {
		case "sm":
			multiplier = 0.8;
			break;
		case "md":
			multiplier = 1.5;
			break;
		case "xl":
			multiplier = 2;
			break;
		case "xxl":
			multiplier = 3;
			break;
		default:
			multiplier = 1;
			break;
	}

	let defaultSize =
		variant && theme.typography[variant]
			? theme.typography[variant].fontSize
			: theme.typography.fontSize + "px";

	return `calc(${defaultSize} * ${multiplier})`;
}

function createStyled(styles, options) {
	let Styled = function (props) {
		const {children, ...other} = props;

		return children(other);
	};

	return withStyles(styles, options)(Styled);
}

/* ############################################################### */

function Badge({ children, colorBrightness, color, ...props }) {
	let classes = useStyles();
	let theme = useTheme();
	let Styled = createStyled({
		badge: {
			backgroundColor: getColor(color, theme, colorBrightness),
		},
	});

	return (
		<Styled>
			{styledProps => (
				<BadgeBase
					classes={{
						badge: classnames(classes.badge, styledProps.class.badge),
					}}
					{...props}
				>
					{children}
				</BadgeBase>
			)}
		</Styled>
	);
}

function Typography({ children, weight, size, colorBrightness, color, ...props }) {
	let theme = useTheme();

	return (
		<TypographyBase
			style={{
				color: getColor(color, theme, colorBrightness),
				fontWeight: getFontWeight(weight),
				fontSize: getFontSize(size, props.variant, theme),
			}}
			{...props}
		>
			{children}
		</TypographyBase>
	)
}

function Button({ children, color, className, ...props }) {
	let theme = useTheme();

	let Styled = createStyled({
		root: {
			color: getColor(color, theme),
		},
		contained: {
			backgroundColor: getColor(color, theme),
			boxShadow: theme.customShadows.widget,
			color: `${color ? "white" : theme.palette.text.primary} !important`,
			"&:hover": {
				backgroundColor: getColor(color, theme, "light"),
				boxShadow: theme.customShadows.widgetWide,
			},
			"&:active": {
				boxShadow: theme.customShadows.widgetWide,
			},
		},
		outlined: {
			color: getColor(color, theme),
			borderColor: getColor(color, theme),
		},
		select: {
			backgroundColor: theme.palette.primary.main,
			color: "#fff",
		},
	});

	return (
		<Styled>
			{({ classes }) => (
				<ButtonBase
					classes={{
						contained: classes.contained,
						root: classes.root,
						outlined: classes.outlined,
					}}
					{...props}

					className={classnames(
						{
							[classes.select]: props.select,
						},
						className,
					)}
				>
					{children}
				</ButtonBase>
			)}
		</Styled>
	);
}

export { Badge, Typography, Button };
