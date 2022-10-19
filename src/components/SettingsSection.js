import React from 'react';
import styled from 'styled-components';
import { ThemeButton } from '../features/theme'

export default function SettingsSection() {
    return(
        <SettingsStyle>
			<div className='title'>
				<h3>Settings</h3>
			</div>
            <ThemeButton />
        </SettingsStyle>
    );
}

const SettingsStyle = styled.div`
    display: flex;
    flex-direction: column;
`;
