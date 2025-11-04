import React, { useEffect } from 'react';
import { useForm, usePhoneFormatting } from '../hooks';

function AppointmentModal({ show, onClose }) {
    const formAction = "https://formspree.io/f/mqadjqqn";
    const { submitting, success, handleSubmit, setSuccess } = useForm(formAction);
    const [phone, handlePhoneChange, setPhoneValue] = usePhoneFormatting('');

    // Effect for handling body scroll and escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (show) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEsc);
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [show, onClose]);

    const handleOverlayClick = (e) => {
        if (e.target.id === 'appointmentModal') {
            onClose();
        }
    };

    const handleFormSubmit = async (e) => {
        await handleSubmit(e);
        // The useForm hook now resets the form, so we just need to clear the controlled phone input
        if (success) {
            setPhoneValue('');
        }
    };
    
    // When the modal is closed, reset the success state of the form
    useEffect(() => {
        if (!show) {
            // Delay the reset to allow for fade-out animations
            setTimeout(() => {
                setSuccess(false);
            }, 300);
        }
    }, [show, setSuccess]);

    // Don't render the modal if it's not supposed to be shown
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay active" id="appointmentModal" onClick={handleOverlayClick}>
            <div className="modal-container">
                <button className="close-btn" onClick={onClose}>&times;</button>
                <div className="form-container-popup">
                    <h2>Get Appointment</h2>
                    {success ? (
                        <p id="appointmentSuccess" className="success-message" style={{ display: 'block' }}>
                            Thank you! Your message has been sent.
                        </p>
                    ) : (
                        <form id="appointmentForm" action={formAction} method="POST" onSubmit={handleFormSubmit}>
                            <div className="form-group">
                                <input type="email" name="email" placeholder=" " required />
                                <label>Email Address</label>
                            </div>
                            <div className="form-group">
                                <input type="text" name="name" placeholder=" " required />
                                <label>Your Name</label>
                            </div>
                            <div className="form-group">
                                <input type="tel" name="contactno" id="appointmentContact" placeholder=" " required value={phone} onChange={handlePhoneChange} />
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
            </div>
        </div>
    );
}

export default AppointmentModal;