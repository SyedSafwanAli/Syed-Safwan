import React from 'react';
import { useForm, usePhoneFormatting } from '../hooks';

function ContactSection() {
    const formAction = "https://formspree.io/f/mqadjqqn";
    const { submitting, success, handleSubmit } = useForm(formAction);
    const [phone, handlePhoneChange, setPhoneValue] = usePhoneFormatting('');

    const handleFormSubmit = async (e) => {
        // We need to pass the event to the hook
        await handleSubmit(e);

        // If the form was successfully submitted, clear the phone input
        // Note: The useForm hook already handles form.reset()
        if (success) {
            setPhoneValue('');
        }
    };
    
    return (
        <section className="contact-section" id="contact">
            <div className="content-wrapper">
                <div className="section-label"><i className="fa-solid fa-asterisk"></i> Contact Us</div>

                <h2 className="main-heading">
                    let's Work <span className="highlight">Together</span><br />
                </h2>
                <p className="description">I’m available for freelance projects, collaborations, and full-time opportunities. Let’s
                    bring your ideas to life with modern, responsive, and interactive websites.</p>
                <h2>Details:</h2>
                <div className="contact-info">
                    <div className="contact-item">
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:syedsafwanali8802@gmail.com"> syedsafwanali8802@gmail.com</a>
                    </div>

                    <div className="contact-item">
                        <i className="fas fa-phone"></i>
                        <a href="tel:+92 (317) 0666 406"> +92 (317) 0666 406</a>
                    </div>

                    <div className="contact-item">
                        <i className="fas fa-location-dot"></i>
                        <a href="#"> Karachi, Pakistan</a>
                    </div>
                </div>


                {/* Social Links */}
                <div className="footer-social">
                    <h3>Follow Us:</h3>
                    <div className="social-links">
                        <a href="https://github.com/" target="_blank" aria-label="GitHub"><i className="fab fa-github"></i></a>
                        <a href="https://linkedin.com/" target="_blank" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://twitter.com/" target="_blank" aria-label="Twitter"><i className="fab fa-x-twitter"></i></a>
                        <a href="mailto:syedsafwanali8802@example.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
                    </div>
                </div>
            </div>

            <div className="form-container">
                {success ? (
                    <p id="contactSuccess" className="success-message" style={{ display: 'block' }}>
                        Thank you! Your message has been sent.
                    </p>
                ) : (
                    <form id="contactForm" action={formAction} method="POST" onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <input type="email" name="email" placeholder=" " required />
                            <label>Email Address</label>
                        </div>
                        <div className="form-group">
                            <input type="text" name="name" placeholder=" " required />
                            <label>Your Name</label>
                        </div>
                        <div className="form-group">
                            <input type="tel" name="contactno" id="contactPhone" placeholder=" " required value={phone} onChange={handlePhoneChange} />
                            <label>Your Contact</label>
                        </div>
                        <div className="form-group">
                            <textarea name="message" placeholder=" " rows="5" required></textarea>
                            <label>Your Message</label>
                        </div>
                        <button type="submit" className="submit-btn" disabled={submitting}>
                            {submitting ? (
                                <><i className="fas fa-spinner fa-spin"></i> <span>Sending...</span></>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}

export default ContactSection;