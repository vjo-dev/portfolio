import React from 'react';
import styled from 'styled-components';
import Hexagon from './Hexagon';

export default function LogoHexagon() {
	return(
		<LogoHexagonStyle>
		<div className='container-hexagons'>
			<div className='svg-container hex-1'><Hexagon color="green" opacity="0.4"/></div>
			<div className='svg-container hex-2'><Hexagon color="blue"/></div>
			<div className='svg-container hex-3'><Hexagon color="blue" opacity="0.6"/></div>
		</div>
		</LogoHexagonStyle>
	);
}

const LogoHexagonStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 200px;
	.container-hexagons{
		position: relative
	}
	.svg-container {
		position: absolute;
		width: 80px;
		height: 80px;
	}
	.svg-container.hex-1{
		top: 0;
		left: 20px;
	}
	.svg-container.hex-2{
		top: 35px;
		left: 0;
	}
	.svg-container.hex-3{
		top: 35px;
		left: 40px;
	}
`;
