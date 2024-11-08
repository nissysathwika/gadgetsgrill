import React from 'react';
import './about.css'; // Import your CSS styles

const About = () => {
    return (
        <div className="about">
            <h2 className="about-title">About Us 🎉</h2>

            <section className="brand-story">
                <h3 className="section-heading">Our Story 📖</h3>
                <p>
                    Welcome to Gadgets Grill! Our journey began with a passion for technology and innovation. 
                    We set out to create a platform where everyone can find the latest gadgets at great prices. 
                    Our mission is to provide an exceptional shopping experience that makes technology accessible 
                    to all. 💻
                </p>
            </section>

            <section className="team-introduction">
                <h3 className="section-heading">Meet the Team 👩‍💻👨‍💻</h3>
                <div className="team-member">
                    <h4>K. Nissy Sathwika</h4>
                    
                </div>
                <div className="team-member">
                    <h4>K.Hemalatha</h4>
                    
                </div>
                <div className="team-member">
                    <h4>K.Poojithanjali</h4>
                    
                </div>
                <div className="team-member">
                    <h4>K.Hansika</h4>
                    
                </div>
            </section>

            <section className="core-values">
                <h3 className="section-heading">Our Core Values 🌟</h3>
                <ul>
                    <li>Customer Satisfaction: We prioritize our customers’ needs and feedback. 😊</li>
                    <li>Integrity: We are honest and transparent in all our dealings. 🤝</li>
                    <li>Innovation: We strive to incorporate the latest technologies in our offerings. 💡</li>
                </ul>
            </section>

            

            <section className="product-philosophy">
                <h3 className="section-heading">Our Product Philosophy 📦</h3>
                <p>
                    We are committed to sourcing the best gadgets while ensuring quality and affordability. 
                    Our aim is to empower customers to make informed decisions through detailed product descriptions and reviews. 🏷️
                </p>
            </section>

            <section className="community-engagement">
                <h3 className="section-heading">Community Engagement 🤗</h3>
                <p>
                    We believe in giving back. Our team actively participates in local community projects and 
                    initiatives aimed at promoting technology education. 🎓
                </p>
            </section>

            <section className="customer-testimonials">
                <h3 className="section-heading">What Our Customers Say 💬</h3>
                <blockquote>
                    <p>"Gadgets Grill offers an incredible selection of products! The service is fantastic, and I always find what I need." 🌟</p>
                    <cite>- Happy Customer</cite>
                </blockquote>
            </section>

            <section className="future-goals">
                <h3 className="section-heading">Our Future Goals 🎯</h3>
                <p>
                    We aspire to expand our product range and enhance our platform to provide an even better 
                    shopping experience for our customers. 🌈
                </p>
            </section>

            <div className="call-to-action">
                <p>Ready to explore our products? <a href="/shop">Shop Now 🛒</a>!</p>
            </div>
        </div>
    );
}

export default About;
