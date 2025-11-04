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
        name: "Basic Website Package",
        tagline: "Starter Website Solution",
        price: "PKR 50,000",
        features: [
            { text: "Up to 3 Pages Website", active: true },
            { text: "Contact Form", active: true },
            { text: "Book A Call CTA", active: true },
            { text: "3 Stock Images", active: true },
            { text: "Admin Panel", active: false },
            { text: "Sliders & Animations", active: false },
            { text: "Google Friendly Sitemap", active: true },
            { text: "48–72 Hours Delivery", active: true },
            { text: "Complete Deployment", active: true },
        ]
    },
    {
        name: "Standard Website Package",
        tagline: "Growing Business Solution",
        price: "PKR 75,000",
        featured: true, // For the 'featured' class
        features: [
            { text: "Up to 6 Pages Website", active: true },
            { text: "Admin Panel / CMS", active: true },
            { text: "Contact Form", active: true },
            { text: "Appointment Scheduling Form", active: true },
            { text: "5 Stock Images", active: true },
            { text: "3 Banner Designs", active: true },
            { text: "Google Friendly Sitemap", active: true },
            { text: "W3C Certified HTML", active: true },
            { text: "Complete Deployment", active: true },
        ]
    },
    {
        name: "Premium Website Package",
        tagline: "Complete Business Solution",
        price: "PKR 105,000",
        features: [
            { text: "Up to 10 Pages Website", active: true },
            { text: "Advanced CMS / Admin Panel", active: true },
            { text: "Contact Form", active: true },
            { text: "Appointment Scheduling", active: true },
            { text: "10 Stock Images", active: true },
            { text: "5 Banner Designs", active: true },
            { text: "Advanced Sliders", active: true },
            { text: "Google Friendly Sitemap", active: true },
            { text: "Priority Support", active: true },
        ]
    },
    {
        name: "E-Commerce Website Package",
        tagline: "Online Store Solution",
        price: "PKR 100,000",
        features: [
            { text: "Product Catalog (50 Products)", active: true },
            { text: "Shopping Cart & Checkout", active: true },
            { text: "Payment Gateway Integration", active: true },
            { text: "User Registration & Login", active: true },
            { text: "Order Management System", active: true },
            { text: "Mobile Friendly Layout", active: true },
            { text: "Basic SEO Optimization", active: true },
            { text: "Advanced Marketing Tools", active: false },
            { text: "Custom Plugins", active: false },
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