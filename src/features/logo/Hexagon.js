import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/hexagon.svg'

export default function Hexagon({
	color="#ff0000",
	opacity="1.0"
}) {

	return(
		<Logo fill={color} opacity={opacity}/>
	);
}
