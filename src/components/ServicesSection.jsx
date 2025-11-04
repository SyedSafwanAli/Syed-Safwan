import React from 'react';
import ServiceCard from './ServiceCard';

const servicesData = [
    {
        icon: (
            <svg className="icon" viewBox="0 0 24 24">
                <path d="M2 3h20v18H2z" />
                <path d="M8 21v-5" />
                <path d="M16 21v-5" />
                <circle cx="12" cy="7" r="1" />
            </svg>
        ),
        title: 'Responsive<br />Web Design',
        description: 'Building mobile-first, responsive websites that deliver seamless user experiences across all devices.',
        items: ['Mobile-First Layouts', 'Cross-Browser Support', 'SEO-Friendly Structure'],
    },
    {
        icon: (
            <svg className="icon" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        title: 'Frontend<br />Development',
        description: 'Turning UI designs into fast, clean, and interactive websites using modern frontend technologies.',
        items: ['HTML, CSS & JavaScript', 'Reusable Components', 'Performance Optimization'],
    },
    {
        icon: (
            <svg className="icon" viewBox="0 0 24 24">
                <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
                <path d="M12 22V12" />
                <path d="M22 8.5L12 15L2 8.5" />
            </svg>
        ),
        title: 'React<br />Development',
        description: 'Creating dynamic and scalable web applications with React, ensuring smooth performance and reusability.',
        items: ['React Components', 'State Management', 'Single Page Applications'],
    },
    {
        icon: (
            <svg className="icon" viewBox="0 0 24 24">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                <path d="M8 7h8" />
                <path d="M8 11h8" />
                <path d="M8 15h5" />
            </svg>
        ),
        title: 'API<br />Integration',
        description: 'Connecting websites with third-party services and APIs to deliver real-time, interactive experiences.',
        items: ['REST APIs', 'Third-Party Integration', 'Dynamic Data Handling'],
    },
    {
        icon: (
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <path d="M8 14s1.5-2 4-2 4 2 4 2" />
                <path d="M9 9h.01M15 9h.01" />
            </svg>
        ),
        title: 'SEO<br />Optimization',
        description: 'Optimizing websites for speed, structure, and accessibility to improve search rankings and user experience.',
        items: ['On-Page SEO', 'Core Web Vitals', 'Mobile-Friendly SEO'],
    },
];

function ServicesSection() {
    return (
        <section className="services-section">
            <div className="section-label center"><i className="fa-solid fa-asterisk"></i> MY SERVICES AREA</div>
            <h2 className="main-heading center">
                My <span className="highlight">Frontend Services </span>For Your Business Growth
            </h2>

            {servicesData.map((service, index) => (
                <ServiceCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    items={service.items}
                />
            ))}

            {/* Button Section */}
            <div style={{ textAlign: 'center', padding: '30px 0' }}>
                <button className="btn-primary">Get More Service</button>
            </div>
        </section>
    );
}

export default ServicesSection;