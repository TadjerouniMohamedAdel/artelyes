import React from 'react'
import  './Contact.css'
import HeaderDeco from './HeaderDeco';
import TitleSection from './TitleSection';
import ContactSection from './ContactSection';

export default function Contacts() {
    return (
        <div className="contacts-menu">
                <HeaderDeco />
                <TitleSection title="Contacts" />
                <div className="contact-menu-content">
                    <ContactSection />
                </div>
            </div>
    )
}
