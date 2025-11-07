// src/components/PlansSection.jsx

import React from 'react';
// 🌟 1. Import Swiper components and required modules 🌟
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
// 🌟 You must also import Swiper's core and module styles 🌟
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Define the plan data centrally to use .map()
const plansData = [
    {
        name: "Basic WordPress Website Package",
        tagline: "Starter Brand Presence",
        price: "PKR 65,000",
        features: [
            { text: "WordPress Setup & Configuration", active: true },
            { text: "Custom Brand-Aligned Layout (Elementor / Divi / Beaver)", active: true },
            { text: "Up to 4 Pages (Home, About, Services, Contact)", active: true },
            { text: "Contact Form + WhatsApp CTA", active: true },
            { text: "Mobile & Tablet Responsive", active: true },
            { text: "Basic On-Page SEO", active: true },
            { text: "Security & Performance Plugins", active: true },
            { text: "Stock Imagery Included", active: true },
            { text: "Delivery in 4–6 Days", active: true },
        ]
    },
    {
        name: "Standard WordPress Website Package",
        tagline: "Business Growth Campaign",
        price: "PKR 95,000",
        featured: true,
        features: [
            { text: "WordPress CMS + Dashboard Training", active: true },
            { text: "Premium Design Customization (Elementor Pro / Divi)", active: true },
            { text: "Up to 8 Pages + Blog Setup", active: true },
            { text: "Appointment / Booking / Inquiry Forms", active: true },
            { text: "Brand Campaign Strategy + Visual Identity", active: true },
            { text: "Speed Optimization + SEO Ready Structure", active: true },
            { text: "Security / Backup / Anti-Spam Setup", active: true },
            { text: "Google Analytics & Search Console Integration", active: true },
            { text: "14 Days Post-Launch Support", active: true },
        ]
    },
    {
        name: "Premium WordPress Website Package",
        tagline: "Complete Brand Experience",
        price: "PKR 140,000",
        features: [
            { text: "Advanced WordPress Customization & Page Templates", active: true },
            { text: "Full Brand Development Campaign Strategy", active: true },
            { text: "Custom Graphics, Icons, and Web Assets", active: true },
            { text: "Up to 15 Pages (Including Landing Pages)", active: true },
            { text: "Advanced Animations & Visual Interactions", active: true },
            { text: "Lead Generation Funnels Setup", active: true },
            { text: "SEO Optimized + Speed Score 90+ Guaranteed", active: true },
            { text: "Dedicated Support & Maintenance for 1 Month", active: true },
            { text: "Deployment + Training Included", active: true },
        ]
    },
    {
        name: "WordPress E-Commerce Store",
        tagline: "Online Store with Conversion Strategy",
        price: "PKR 160,000",
        features: [
            { text: "WooCommerce Store Setup", active: true },
            { text: "Up to 100 Products Upload", active: true },
            { text: "Custom Storefront (Elementor / Divi Builder)", active: true },
            { text: "Checkout, Cart & Customer Accounts", active: true },
            { text: "Payment Gateway Integration (JazzCash / Stripe / PayPal)", active: true },
            { text: "Sales & Abandoned Cart Email Automation", active: true },
            { text: "Coupon System + Inventory Management", active: true },
            { text: "SEO + Speed Optimization", active: true },
            { text: "Store Management Training + 1 Month Support", active: true },
        ]
    }
];


// Accepts the modal handler function from Home.jsx
function PlansSection({ openQuoteModal }) {
    
    // The settings reflect your old <script> logic
    const swiperParams = {
        modules: [Pagination, Navigation],
        slidesPerView: 1, // Default for mobile
        spaceBetween: 20,
        loop: true,
        pagination: { clickable: true, el: ".swiper-pagination" },
        // Navigation buttons need to be added if you want them
        // navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        breakpoints: {
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            100: { slidesPerView: 1 },
        }
    };

    return (
        <section className="plans-section">
            <div className="section-label center">
                <i className="fa-solid fa-asterisk"></i> WEBSITE PACKAGES
            </div>

            <h2 className="main-heading center">
                Choose The <span className="highlight">Right Website Package</span> For Your Business Needs
            </h2>

            {/* 🌟 2. Replace static DIVs with the Swiper Component 🌟 */}
            <Swiper {...swiperParams} className="plans-slider">
                
                {/* 3. Map over the data array to create SwiperSlides */}
                {plansData.map((plan, index) => (
                    <SwiperSlide key={index}>
                        <div className={`plan-card ${plan.featured ? 'featured' : ''}`}>
                            <div className="plan-header-box">
                                <div className="plan-head">
                                    <h2 className="plan-name">{plan.name}</h2>
                                    <p className="plan-tagline">{plan.tagline}</p>
                                </div>
                                <div className="plan-price-box">
                                    <span className="plan-price">{plan.price}</span>
                                    <span className="plan-period">/one-time</span>
                                </div>
                            </div>

                            <div className="plan-body">
                                <p className="plan-desc">
                                    {plan.name === 'Basic Website Package' ? "Perfect for personal websites and small startups." :
                                     plan.name === 'Standard Website Package' ? "Ideal for small to medium businesses with advanced needs." :
                                     plan.name === 'Premium Website Package' ? "A full package for enterprises with premium features." :
                                     "Best for businesses looking to sell products online."}
                                </p>
                                <ul className="plan-features">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className={`plan-feature ${feature.active ? 'active' : 'inactive'}`}>
                                            <span className={`tick ${feature.active ? 'active' : 'inactive'}`}></span>
                                            <span>{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            {/* 4. Replace hardcoded onclick with the React prop function */}
                            <button 
                                className="plan-btn" 
                                onClick={() => openQuoteModal(plan.name)} // Passes name to parent
                            >
                                Choose Package
                            </button>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

            {/* Swiper Pagination is automatically rendered by the Swiper component */}
            <div className="swiper-pagination"></div> 
        </section>
    );
}

export default PlansSection;