import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer className="bg-body-tertiary text-center text-lg-start mt-5">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">About Us</h5>
                        <p>
                            We are an e-commerce platform dedicated to providing the best online shopping experience. 
                            Explore our wide range of products and enjoy seamless service.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Quick Links</h5>
                        <ul className="list-unstyled mb-0">
                            
                            <li className="nav-item">
                                <Link className='text-decoration-none nav-link text-dark' to='/home'>Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className='text-decoration-none nav-link text-dark' to='/about'>About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className='text-decoration-none nav-link text-dark' to='/contact'>Contact</Link>
                            </li>

                            <li className="nav-item">
                                <Link className='text-decoration-none nav-link text-dark' to='/Faqs'>FAQs</Link>
                            </li>

                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Contact Us</h5>
                        <p>
                            Email: support@ecommerce.com <br />
                            Phone: +234 704 403 2713 <br />
                            Address: 123 E-commerce St, Online City
                        </p>
                    </div>
                </div>
            </div>

           
            <div className="text-center p-3 bg-dark text-white">
                © {new Date().getFullYear()} E-Commerce Platform. All Rights Reserved.
            </div>
        </footer>
        </>
    );
};
export default Footer;