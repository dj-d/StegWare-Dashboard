import React from "react";
import {Grid} from "@material-ui/core";

// styles
import useStyles from "./styles";

// component
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";

function PayloadPage() {
	let classes = useStyles();

	return (
		<>
			<PageTitle title="Payloads" />
		</>
	)
}

export default PayloadPage;
