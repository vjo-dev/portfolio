import React from 'react';
import styled from 'styled-components';
import { ThemeButton } from '../features/theme'

const SettingsStyle = styled.div`
    margin-left: 2rem;
    margin-top: 1rem;
    text-align: left;
`

export default function SettingsSection() {
    return(
        <SettingsStyle>
			<div className='contact-title'>
				<h3>Settings</h3>
			</div>
            <ThemeButton />
        </SettingsStyle>
    );
}
