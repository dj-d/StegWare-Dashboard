import React, {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";

// styles
import useStyles from "./styles";

// component
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import PayloadService from "../../services/PayloadService";

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
			<ul>
				{items.map(item => (
					<li key={item._id}>
						{item.name}
					</li>
				))}
			</ul>
		);
	}
}

export default PayloadPage;
