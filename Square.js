import React from 'react';
import './Square.css';
const Square=(props)=>
{
	return(
	<div className="Square">
		<button className="buttun" onClick={props.Onclick}>
			{props.value}
		</button>
	</div>
	);
}
export default Square;