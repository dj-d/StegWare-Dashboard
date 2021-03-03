import React from "react";
import {Grid} from "@material-ui/core";

// styles
import useStyles from "./styles";

// component
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";

function InfectedDevicePage() {
	let classes = useStyles();

	return (
		<>
			<PageTitle title="Infected devices" />
		</>
	)
}

export default PayloadPage;
