import React from "react";
import './Square.css';
const Reset=(props)=>
{
	return (
	<button className="extra" onClick={props.Restart}>
		Reset
	</button>);
}
export default Reset;