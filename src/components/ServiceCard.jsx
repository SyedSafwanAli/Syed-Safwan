import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

function ServiceCard({ icon, title, description, items }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
    });

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 150);
    };

    return (
        <div
            ref={ref}
            className={`service-card ${inView ? 'is-visible' : ''} ${isClicked ? 'is-clicked' : ''}`}
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="icon-container">{icon}</div>
            <div className="content-area">
                <div className="text-content">
                    <h2 className="service-title" dangerouslySetInnerHTML={{ __html: title }}></h2>
                </div>
                <div className="description-content">
                    <p className="service-description">{description}</p>
                </div>
                <div className="services-list">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`service-item ${isHovered ? 'is-hovered' : ''}`}
                            style={{
                                transitionDelay: isHovered ? `${index * 50}ms` : '0ms',
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div className="arrow-container">
                    <svg className="arrow" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" />
                        <path d="M7 7h10v10" stroke="currentColor" strokeWidth="2" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;
