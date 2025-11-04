import { useState, useEffect } from 'react';

export function useCounter(targetValue, inView) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!inView) {
            return;
        }

        if (typeof targetValue !== 'number') {
            setValue(0);
            return;
        }

        let current = 0;
        const duration = 2000;
        const stepTime = duration / 100;
        const increment = targetValue / 100;

        const timer = setInterval(() => {
            current += increment;
            if (current >= targetValue) {
                current = targetValue;
                clearInterval(timer);
            }
            setValue(Math.floor(current));
        }, stepTime);

        return () => {
            clearInterval(timer);
        };
    }, [inView, targetValue]);

    return value;
}

export function useForm(action) {
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setSuccess(false); // Reset success state on new submission

        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSuccess(true);
                form.reset();
            } else {
                response.json().then(data => {
                    // Log formspree errors if any
                    console.error('Form submission failed:', data);
                });
                setSuccess(false);
            }
        } catch (error) {
            console.error('An error occurred:', error);
            setSuccess(false);
        } finally {
            setSubmitting(false);
        }
    };

    return { submitting, success, handleSubmit, setSuccess };
}

export function usePhoneFormatting(initialValue = '') {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        // This is a simplified formatting example.
        // It allows only numbers and formats to (XXX) XXX-XXXX
        const x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        setValue(e.target.value);
    };

    return [value, handleChange, setValue];
}