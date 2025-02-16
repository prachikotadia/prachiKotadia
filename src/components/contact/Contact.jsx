import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send email using EmailJS
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
            .then((response) => {
                alert(`Thank you for your message, ${formData.firstName}!`);
                setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' }); // Reset form
            })
            .catch((err) => {
                console.error('Failed to send message', err);
            });
    };

    return (
        <section id="contact" className="contact-section">
            <h2 className="contact-title">Contact Me</h2>
            <p className="contact-info">I'd love to hear from you! Please fill out the form below:</p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-input-group">
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="First Name" 
                        value={formData.firstName}
                        onChange={handleChange}
                        required 
                        className="contact-input" 
                    />
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder="Last Name" 
                        value={formData.lastName}
                        onChange={handleChange}
                        required 
                        className="contact-input" 
                    />
                </div>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="contact-input" 
                />
                <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Your Phone (Optional)" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact-input" 
                />
                <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    className="contact-textarea" 
                />
                <button type="submit" className="contact-button">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
