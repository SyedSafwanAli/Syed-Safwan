import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useCounter } from '../hooks';

// === ASSET IMPORTS ===
import skillManImage from '../assets/images/skill-man.webp';
import skillArrowIcon from '../assets/icons/skill-arrow.webp';
import wordpressIcon from '../assets/icons/wordpress.webp';
import reactIcon from '../assets/icons/React.webp';
import skill1Icon from '../assets/icons/skill1.webp'; // Figma
import skill2Icon from '../assets/icons/skill2.webp'; // HTML & CSS
import skill3Icon from '../assets/icons/skill3.webp'; // Photoshop

// === SKILL DATA (Centralized Logic) ===
const skillData = [
    { name: 'Wordpress', icon: wordpressIcon, target: 84, targetValue: 95, class: 'wordpress-progress' },
    { name: 'React', icon: reactIcon, target: 65, targetValue: 80, class: 'angular-progress' },
    { name: 'Figma', icon: skill1Icon, target: 95, targetValue: 90, class: 'figma-progress' },
    { name: 'HTML & CSS', icon: skill2Icon, target: 83, targetValue: 98, class: 'framer-progress' },
    { name: 'Photoshop', icon: skill3Icon, target: 93, targetValue: 93, class: 'ps-progress' },
];

function SkillCard({ skill, inView, index }) {
    const [isHovered, setIsHovered] = useState(false);
    const value = useCounter(skill.targetValue, inView);

    return (
        <div
            className={`skill-card ${inView ? 'animate-in' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div className="icon"><img src={skill.icon} alt={skill.name} /></div>
            <div className="skill-name">{skill.name}</div>

            <div className="percentage">
                {value}%
            </div>

            <div className="progress-bar">
                <div
                    className={`progress-fill ${skill.class}`}
                    style={{
                        width: inView ? `${skill.target}%` : '0%',
                        transform: isHovered ? 'scaleY(1.2)' : 'scaleY(1)',
                    }}
                ></div>
            </div>
        </div>
    );
}

function SkillsSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section className="skill-section" id="skills">
            {/* Image Section */}
            <div className="image-section">
                <div className="section-label"><i className="fa-solid fa-asterisk"></i> Professional Skill of Me</div>
                <h2 className="main-heading">
                    Professional <span className="highlight">Skill</span><br />
                </h2>
                <img src={skillManImage} alt="skill-man" className="skill-image" />
                <img src={skillArrowIcon} alt="skill arrow" className="arrow-icon" />
            </div>

            {/* Content Section - Attach Ref here */}
            <div className="content-wrapper" ref={ref}>
                <div className="dashboard">

                    {skillData.map((skill, index) => (
                        <SkillCard key={index} skill={skill} inView={inView} index={index} />
                    ))}

                    {/* See More Card */}
                    <div className={`skill-card see-more-card ${inView ? 'animate-in' : ''}`}>
                        <div className="see-more-content">
                            <span>+</span>
                            <p>See More</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
