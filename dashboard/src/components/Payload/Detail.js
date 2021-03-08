import React from "react";

// styles
import useStyles from "./styles";

export default function Detail(...props) {
	return (
		<div className="modal">
			<div className="modal_content">
				<span className="close" onClick={() => !props.toggle}>&times;</span>
				<p>I'm a Pop up</p>
			</div>
		</div>
	);
}
