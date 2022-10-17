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
            <h5>Color theme</h5>
        </ThemeButtonStyle>
    );
}

const ThemeButtonStyle = styled.button`
    outline: none;
    border: none;
    background: none;
    display: flex;
    flex-direction: row;
    align-items: start;
    .icon-container {
        width: 20px;
        margin-right: 0.5rem;
        margin-left: 1rem;
    }
`;

