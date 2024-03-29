import React from "react";
import "./Card.css";

const Card = props => (

			<div onClick={() => props.setClicked(props.id)} className="card col-xs-3">
				<div className="img">
					<img alt={props.name} src={props.image} />
				</div>
			</div>
);

export default Card;