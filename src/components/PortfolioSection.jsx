// src/components/PortfolioSection.jsx

import React, { useState, useCallback, useMemo } from 'react';

// 🌟 STEP 1: DYNAMIC ASSET IMPORT SETUP (For Vite/Modern React) 🌟
const imageModules = import.meta.glob('../assets/Portfolio/*.{png,jpg,jpeg,webp}', { eager: true, as: 'url' });

// Helper function to get the actual URL from the filename string
const getAssetUrl = (fileName) => {
    const key = `../assets/Portfolio/${fileName}`;

    if (imageModules[key]) {
        return imageModules[key];
    }

    console.error(`Asset not found for: ${fileName}. Check filename and path.`);
    return 'https://via.placeholder.com/400x300?text=Image+Missing';
};

// === STEP 2: PROJECT DATA WITH FILENAMES ===
const rawPortfolioData = [
    {
        category: 'Blog Website',
        title: 'Exclusive Pro Cleaning',
        client: 'Cleaning Service',
        tech: 'Wordpress Divi',
        id: 1,
        images: ['exclusiveprocleaning-featured.webp', 'exclusive-pro-cleaning.webp',]
    },
    {
        category: 'Blog Website',
        title: 'The Tech IO',
        client: 'Tech Startup',
        tech: 'Wordpress Divi',
        id: 2,
        images: ['thetechio-feature-image.webp', 'thetechio.webp', 'sandra-featured-image.webp']
    },
    {
        category: 'E-Commerce Website',
        title: 'GenZ Jewellery',
        client: 'Jewellery Brand',
        tech: 'Wordpress WooCommerce Beaver Builder',
        id: 3,
        images: ['genzjewellery-featured-image.webp', 'genzjewellery.webp',]
    },
    {
        category: 'E-Commerce Website',
        title: 'Zodiac Printing',
        client: 'Card Printing Startup',
        tech: 'Wordpress WooCommerce Divi Builder',
        id: 7,
        images: ['zodiac-feature-image.webp', 'zodiac.webp',]
    },
    {
        category: 'E-Commerce Website',
        title: 'Imported Vitamins',
        client: 'Consultancy Firm',
        tech: 'wordpress WooCommerce Divi Builder',
        id: 8,
        images: ['importedvitamins-featured-image.webp', 'importedvitamins.webp',]
    },
    {
        category: 'Blog Website',
        title: 'Sandras Maid Service',
        client: 'Cleaning Service',
        tech: 'Wordpress Divi Builder',
        id: 9,
        images: ['sandra-featured-image.webp', 'sandras.webp',]
    },
    {
        category: 'Blog Website',
        title: 'Arly Cleaning Service',
        client: 'Cleaning Service',
        tech: 'Wordpress Divi Builder',
        id: 9,
        images: ['arly-featured-image.webp', 'arly.webp',]
    },
    {
        category: 'Blog Website',
        title: 'Freelancer in Pakistan',
        client: 'Tech Startup',
        tech: 'Wordpress Divi Builder',
        id: 9,
        images: ['freelancer-in-pakistanfeatured-image.webp', 'freelancerinpakistan.webp',]
    },
    {
        category: 'Blog Website',
        title: 'Down To The Details',
        client: 'Cleaning Service',
        tech: 'Wordpress Divi Builder',
        id: 9,
        images: ['downtothedetails-featured.webp', 'downtothedetails.webp',]
    },
];

const ITEMS_TO_SHOW = 9;
// Final data array: Filenames are replaced by actual URLs
const projectsToShow = rawPortfolioData.slice(0, ITEMS_TO_SHOW).map(project => ({
    ...project,
    images: project.images.map(getAssetUrl)
}));

// --- 3. Image Modal Component (Cleaned: Gallery Only) ---
const ImageModal = ({ project, onClose }) => {
    // ❌ Zoom states removed (isZoomed, position)
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Reset index when modal opens for a different project
    useMemo(() => {
        setCurrentImageIndex(0);
    }, [project]);

    if (!project || !project.images || project.images.length === 0) return null;

    const { title, client, tech, images } = project;
    const totalImages = images.length;
    const currentImageSrc = images[currentImageIndex];

    // Navigation logic (Simplified: no zoom reset needed)
    const goToPrev = (e) => {
        e.stopPropagation();
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
    };
    const goToNext = (e) => {
        e.stopPropagation();
        setCurrentImageIndex(prevIndex => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
    };

    // ❌ Panning logic (handleMouseMove) removed

    // --- Inline Styles (Zoom related styles removed) ---
    const modalStyle = {
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.95)', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px', boxSizing: 'border-box',
    };

    const imageWrapperStyle = {
        position: 'relative', maxWidth: '90%', maxHeight: '90%', display: 'flex',
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', zIndex: 10,
        cursor: 'default', // Cursor reset
    };

    const imageStyle = {
        display: 'block', maxWidth: '100%',
        maxHeight: '80vh', objectFit: 'contain',
        borderRadius: '8px', boxShadow: '0 0 30px rgba(0, 0, 0, 0.7)',
        transition: 'none', // Transition removed
        transform: 'scale(1) translate(0, 0)', // Transform reset
        cursor: 'default'
    };

    const infoStyle = {
        marginTop: '15px', textAlign: 'center', color: '#fff',
        opacity: 1, zIndex: 5,
    };
    const closeButtonStyle = {
        position: 'absolute', top: '20px', right: '30px',
        backgroundColor: 'transparent', border: 'none', color: '#fff',
        fontSize: '2.5rem', cursor: 'pointer', zIndex: 1010, opacity: '0.8'
    };

    const navButtonStyle = {
        position: 'fixed', top: '50%', transform: 'translateY(-50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', color: '#fff', border: 'none',
        padding: '10px 15px', cursor: 'pointer', fontSize: '1.8rem',
        zIndex: 1005, borderRadius: '5px',
        opacity: 0.8, // Always visible if totalImages > 1
        pointerEvents: 'auto',
        transition: 'opacity 0.3s'
    };
    const prevButtonStyle = { ...navButtonStyle, left: '30px' };
    const nextButtonStyle = { ...navButtonStyle, right: '30px' };
    const indexInfoText = { fontSize: '0.8rem', color: '#ccc', marginTop: '5px' };


    return (
        <div style={modalStyle} onClick={onClose}>
            <button style={closeButtonStyle} onClick={onClose}>&times;</button>

            {/* Navigation Buttons (Always visible if multiple images exist) */}
            {totalImages > 1 && (
                <>
                    <button style={prevButtonStyle} onClick={goToPrev}>&#10094;</button>
                    <button style={nextButtonStyle} onClick={goToNext}>&#10095;</button>
                </>
            )}

            {/* Image Wrapper */}
            <div
                style={imageWrapperStyle}
                onClick={e => e.stopPropagation()} // Stop modal from closing on image click
            // ❌ onMouseMove removed
            >
                <img src={currentImageSrc} alt={`${title} - View ${currentImageIndex + 1}`} style={imageStyle} />
            </div>

            {/* Project Info */}
            <div style={infoStyle}>
                <h2>{title}</h2>
                <p>Client: **{client}** | Tech: **{tech}**</p>
                {totalImages > 1 && (
                    <p style={indexInfoText}>View {currentImageIndex + 1} of {totalImages}</p>
                )}
            </div>
        </div>
    );
};

// --- 4. Portfolio Item Component (Unchanged) ---
const PortfolioItem = React.memo(({ item, index, onImageClick }) => (
    <div
        key={item.id}
        className="pf-gallery-item pf-show"
        style={{ animationDelay: `${index * 0.1}s` }}
        onClick={() => onImageClick(item)}
    >
        <img
            src={item.images[0]}
            alt={item.title}
            loading="lazy"
        />
        <div className="pf-overlay">
            <h3>{item.title}</h3>
            <p>{item.client}</p>
            <p>{item.tech}</p>
        </div>
    </div>
));


// --- 5. Main PortfolioSection Component (Unchanged) ---
function PortfolioSection() {
    const [modalProject, setModalProject] = useState(null);

    const openModal = useCallback((project) => {
        setModalProject(project);
        document.body.style.overflow = 'hidden';
    }, []);

    const closeModal = useCallback(() => {
        setModalProject(null);
        document.body.style.overflow = 'unset';
    }, []);

    return (
        <div className="pf-container center" id="projects">
            <div className="section-label"><i className="fa-solid fa-asterisk"></i> Portfolio</div>
            <h2 className="main-heading center">
                Explore My <span className="highlight">Popular Projects</span><br />
            </h2>

            <div className="pf-gallery" id="pf-gallery">
                {projectsToShow.length === 0 ? (
                    <p style={{ textAlign: 'center', color: '#666', padding: '50px', gridColumn: '1 / -1' }}>No projects found.</p>
                ) : (
                    projectsToShow.map((item, index) => (
                        <PortfolioItem
                            key={item.id}
                            item={item}
                            index={index}
                            onImageClick={openModal}
                        />
                    ))
                )}
            </div>

            {/* Image Modal Component Call */}
            {modalProject && (
                <ImageModal
                    project={modalProject}
                    onClose={closeModal}
                />
            )}
        </div>
    );
}

export default PortfolioSection;