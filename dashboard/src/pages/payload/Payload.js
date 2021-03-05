import React, {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";

// styles
import useStyles from "./styles";

// component
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import PayloadService from "../../services/PayloadService";
import {Typography} from "../../components/Wrappers";

function PayloadPage() {
	let classes = useStyles();

	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	useEffect(() => {
		PayloadService.fetchPayloads()
			.then(
				(res) => {
					setIsLoaded(true);
					setItems(res.data);
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			)
	}, [])

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<>
				<PageTitle title="Payloads"/>

				<Grid container spacing={4}>
					{items.map(item => (
						<Grid item lg={3} md={4} sm={6} xs={12}>
							<Widget title={item.name} upperTitle bodyClass={classes.fullHeightBody} className={classes.card} resultType={item.resultType}>
								<div className={classes.visitsNumberContainer}>
									<Typography>
										{item.description}
									</Typography>
								</div>
							</Widget>
						</Grid>
					))}
				</Grid>
			</>
		);
	}
}

export default PayloadPage;
