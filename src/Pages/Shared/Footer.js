import { faDribbble, faFacebook, faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { faCalendar, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='py-8 px-3 md:px-16 bg-gradient-to-r from-black via-gray-600 to-black'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='text-center sm:text-left'>
                    <h2 style={{ fontFamily: 'Merienda' }} className='font-bold text-2xl text-secondary'>Contact Info.</h2>
                    <div className='py-3'>
                        <p className='text-gray-400'><FontAwesomeIcon className='text-secondary  pr-4' icon={faPhone}></FontAwesomeIcon> + 000 111 222 333</p>
                        <p className='text-gray-400 pl-9'>+ 000 222 333 444</p>
                        <p className='text-gray-400 py-2'><FontAwesomeIcon className='text-secondary  pr-4' icon={faEnvelope}></FontAwesomeIcon> rajebulalam27@gmail.com </p>
                        <p className='text-gray-400'> <FontAwesomeIcon className='text-secondary pr-4' icon={faLocation}></FontAwesomeIcon> Bangladesh, Hathazari, 4333 </p>
                        <p className='text-gray-400 py-1'> <FontAwesomeIcon className='text-secondary pr-4' icon={faCalendar}></FontAwesomeIcon> Monday-Sunday 9am - 5pm</p>
                    </div>
                </div>
                <div className='text-center sm:text-left'>
                    <h2 style={{ fontFamily: 'Merienda' }} className='font-bold text-2xl text-secondary'>Polices</h2>
                    <div className='text-gray-300'>
                        <p className='pt-2 pb-1'>Returns & Exchanges</p>
                        <p className='py-1'>Payment Terms</p>
                        <p className='py-1'>Delivery Terms</p>
                        <p className='py-1'>Privacy policy</p>
                        <p className='py-1'>Terms of Use</p>
                    </div>
                </div>
                <div className='text-center sm:text-left'>
                    <h2 style={{ fontFamily: 'Merienda' }} className='font-bold text-2xl text-secondary'>Information</h2>
                    <div className='text-gray-300'>
                        <p className='pt-2 pb-1'>About Us</p>
                        <p className='py-1'>Careers</p>
                        <p className='py-1'>Orders & Shipping</p>
                        <p className='py-1'>Office Supplies</p>
                        <p className='py-1'>Contact Us</p>
                    </div>
                </div>
                <div className='text-center sm:text-left'>
                    <h2 style={{ fontFamily: 'Merienda' }} className='font-bold text-2xl text-secondary'>Stay with Newsletter</h2>
                    <p className='text-gray-400 pt-2'>Subscribe to our newsletter to receive early discount offers, updates and new product info.</p>
                    <div className='flex items-center justify-center'>
                        <div class="form-control pt-4">
                            <div class="input-group">
                                <input className='pl-2' required type="email" name="email" id="email" placeholder='Your Email' />
                                <button type='submit' class="btn">Go</button>
                            </div>
                        </div>
                    </div>
                    <div className='pt-3'>
                        <Link className='px-2' to='/'>
                            <FontAwesomeIcon className='font-awesome text-black bg-white hover:bg-secondary p-2 rounded-full text-3xl' icon={faGithub}></FontAwesomeIcon>
                        </Link>
                        <Link className='px-2' to='/'>
                            <FontAwesomeIcon className='font-awesome text-black bg-white hover:bg-secondary p-2 rounded-full text-3xl' icon={faFacebook}></FontAwesomeIcon>
                        </Link>
                        <Link className='px-2' to='/'>
                            <FontAwesomeIcon className='font-awesome text-black bg-white hover:bg-secondary p-2 rounded-full text-3xl' icon={faLinkedin}></FontAwesomeIcon>
                        </Link>
                        <Link className='px-2' to='/'>
                            <FontAwesomeIcon className='font-awesome text-black bg-white hover:bg-secondary p-2 rounded-full text-3xl' icon={faDribbble}></FontAwesomeIcon>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;