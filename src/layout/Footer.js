import React from 'react';
import styled from 'styled-components';
import ContactSection from '../components/ContactSection';
import SettingsSection from '../components/SettingsSection';

export default function Footer() {
    return(
		<FooterStyle>
			<ContactSection />
      <SettingsSection />
		</FooterStyle>
	);
}

const FooterStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;

    .title {
        color: var(--text-color);
        margin-bottom: 0.5rem;
    }

    .icon-container {
        width: 30px;
        height: 30px;
        margin-right: 0.4rem;
        svg {
            height: 100%;
            width: 100%;
        }
    }
`;
