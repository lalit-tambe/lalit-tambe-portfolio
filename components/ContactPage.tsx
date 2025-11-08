import React, { useState } from 'react';

const PREDEFINED_MESSAGES = [
    "Hello, I came across your portfolio and was very impressed with your work, particularly the 'mongo-aggregate' project. I'd love to connect and discuss a potential opportunity at my company.",
    "Hi Lalit, your experience in Full Stack Development with Laravel and React is highly relevant to a role we have open. Are you available for a brief chat this week to discuss it further?",
    "Great work on your portfolio! As a fellow developer, I found your projects insightful. I'd like to connect and discuss technology and potential collaborations.",
    "Hi, I'm a recruiter and your profile looks like an excellent fit for a Full Stack Engineer position I'm currently sourcing for. Please let me know if you're open to exploring new opportunities.",
    "Your portfolio is very well-structured. I'd be interested to learn more about your work on the multi-tenant data sync engine you mentioned in your experience.",
    "Hello Lalit, I manage a team of engineers and am always looking for talented developers like yourself. Would you be open to a discussion about your career goals?",
    "I was impressed by the ETL pipeline you developed. We're working on similar data challenges and I'd love to hear your insights. Let's connect.",
    "Your background in both PHP/Laravel and the React ecosystem is a powerful combination. We are hiring for a senior role that requires exactly this skill set."
];

export const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
    const [lastMessageIndex, setLastMessageIndex] = useState<number | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleGenerateRandomMessage = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * PREDEFINED_MESSAGES.length);
        } while (PREDEFINED_MESSAGES.length > 1 && randomIndex === lastMessageIndex);
        
        setLastMessageIndex(randomIndex);
        setFormData(prev => ({ ...prev, message: PREDEFINED_MESSAGES[randomIndex] }));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate an API call
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setStatus('success');
        }, 1500);
    };

    return (
        <div className="contact-page-container flex-1 overflow-auto">
            <div className="contact-page-left">
                <h1>Let's Connect</h1>
                <p className="contact-intro">I am currently open to new career opportunities and welcome inquiries from recruiters and hiring managers. If my skills and experience align with a position you're looking to fill, I'd be very interested in hearing from you. For fellow developers, I'm always up for a technical chat or discussing potential collaborations. The best ways to reach me are through the form on this page or the links below.</p>
                <ul className="contact-list">
                    <li>
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:lalittambe963@gmail.com" target="_blank" rel="noopener noreferrer">lalittambe963@gmail.com</a>
                    </li>
                    <li>
                    <i className="fa-brands fa-linkedin"></i>
                    <a href="https://www.linkedin.com/in/lalit-tambe/" target="_blank" rel="noopener noreferrer">linkedin.com/in/lalit-tambe</a>
                    </li>
                    <li>
                    <i className="fa-brands fa-github"></i>
                    <a href="https://github.com/Lalit-T" target="_blank" rel="noopener noreferrer">github.com/Lalit-T</a>
                    </li>
                </ul>
            </div>
            <div className="contact-page-right">
                {status === 'success' ? (
                    <div className="form-success-message">
                        <h3>Thank you!</h3>
                        <p>Your message has been sent. I'll get back to you shortly.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="form-input" required disabled={status === 'sending'} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="form-input" required disabled={status === 'sending'} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">
                                <span>Message</span>
                                <button type="button" onClick={handleGenerateRandomMessage} className="generate-random-button" disabled={status === 'sending'}>
                                    <i className="codicon codicon-sparkle mr-1"></i>
                                    Generate Random
                                </button>
                            </label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} className="form-textarea" required disabled={status === 'sending'} />
                        </div>
                        <button type="submit" className="submit-button" disabled={status === 'sending'}>
                            {status === 'sending' && <div className="spinner"></div>}
                            <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};