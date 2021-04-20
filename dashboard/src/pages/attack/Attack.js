import React from "react";
import {Grid} from "@material-ui/core";

// styles
import useStyles from "./styles";

// component
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";

function AttackPage() {
	let classes = useStyles();

	return (
		<>
			<PageTitle title="Attacks" />
		</>
	)
}

export default AttackPage;
