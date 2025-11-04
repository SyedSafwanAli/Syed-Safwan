// src/components/QuoteModal.jsx

import React, { useEffect, useState } from 'react';
import { useForm, usePhoneFormatting } from '../hooks';

function QuoteModal({ show, onClose, selectedPackage }) {
  const formAction = "https://formspree.io/f/yourFormID";
  const { submitting, success, handleSubmit, setSuccess } = useForm(formAction);
  const [phone, handlePhoneChange, setPhoneValue] = usePhoneFormatting('');
  const [currentPackage, setCurrentPackage] = useState(selectedPackage || '');
  
  useEffect(() => {
    if (selectedPackage) {
      setCurrentPackage(selectedPackage);
    }
  }, [selectedPackage]);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]); // Re-run when show prop changes

  const handleFormSubmit = async (e) => {
    await handleSubmit(e);
    if (success) {
        setPhoneValue('');
        setCurrentPackage('');
    }
  };

  useEffect(() => {
    if (!show) {
        setTimeout(() => {
            setSuccess(false);
        }, 300);
    }
  }, [show, setSuccess]);

  if (!show) {
    return null;
  }

  return (
    <div 
      className={`modal-overlay ${show ? 'active' : ''}`} 
      id="quoteModal" 
      onClick={(e) => {
        // Close modal if overlay is clicked
        if (e.target.id === 'quoteModal') {
          onClose();
        }
      }}
    >
      <div className="modal-container">
        <div className="form-container-popup">
          <button className="close-btn" onClick={onClose}>&times;</button>
          <div className="form-header">
            <h2>Request Quote</h2>
            <p>Let's connect and discuss your needs</p>
          </div>

          {success ? (
            <p id="quoteSuccess" className="success-message" style={{ display: 'block' }}>
                Thank you! Your message has been sent.
            </p>
          ) : (
            <form action={formAction} method="POST" id="quoteForm" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <input type="email" name="email" required />
                <label>Email Address</label>
              </div>
              
              <div className="form-group">
                  <input type="text" name="name" required />
                  <label>Full Name</label>
              </div>

              <div className="form-group">
                  <input type="tel" name="contactno" required value={phone} onChange={handlePhoneChange} />
                  <label>Contact Number</label>
              </div>

              <div className="form-group">
                  <input type="text" name="company" />
                  <label>Company (Optional)</label>
              </div>
              
              <div className="form-group">
                <label htmlFor="quotePackage">Package</label>
                <select 
                  id="quotePackage" 
                  name="package" 
                  required 
                  value={currentPackage}
                  onChange={(e) => setCurrentPackage(e.target.value)}
                >
                  <option value="">-- Select Package --</option>
                  <option value="Basic Website Package">Basic Website Package</option>
                  <option value="Standard Website Package">Standard Website Package</option>
                  <option value="Premium Website Package">Premium Website Package</option>
                  <option value="E-Commerce Website Package">E-Commerce Website Package</option>
                </select>
              </div>

              <div className="form-group message-group">
                <textarea name="message" rows="5" required></textarea>
                <label>Additional Requirements/Questions</label>
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

export default QuoteModal;
