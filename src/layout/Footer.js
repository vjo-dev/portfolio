import React from 'react';
import ContactSection from '../components/ContactSection';
import SettingsSection from '../components/SettingsSection';

export default function Footer() {
    return(
		<div className="footer">
			<ContactSection />
            <SettingsSection />
		</div>
	);
}
