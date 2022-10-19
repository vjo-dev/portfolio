import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { BrightnessHigh, Moon } from 'react-bootstrap-icons';
import { themeUpdated } from '../redux/themeSlice';

export default function ThemeButton() {
    const dispatch = useDispatch()
    const darkMode = useSelector(state => state.theme.isDarkMode)

    const handleClick = () => {
        dispatch(themeUpdated(!darkMode))
    }

    return(
        <ThemeButtonStyle onClick={handleClick}>
            <div className="icon-container">
                {darkMode? <Moon /> : <BrightnessHigh />}
            </div>
            <div className="label-container"><h5>Color theme</h5></div>
        </ThemeButtonStyle>
    );
}

const ThemeButtonStyle = styled.button`
    all: unset;
    display: flex;
    flex-direction: row;
    align-items: start;
`;

