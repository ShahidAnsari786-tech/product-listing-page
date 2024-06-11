'use client'
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex see mt-10 w-full dark:bg-stone-900 py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold text-lime-400">Product Store</h2>
            <p className="text-gray-600 dark:text-gray-400">Do Shopping with awesome <span className='text-red-500 '>offers</span></p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-sm font-semibold text-pink-600">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-600 dark:text-gray-400 hover:text-primary-500">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-sm font-semibold text-pink-500">Follow Us</h3>
            <div className="mt-2 space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-100 dark:text-gray-400 hover:text-primary-500">
                Facebook
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-100 dark:text-gray-400 hover:text-primary-500">
                Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-100 dark:text-gray-400 hover:text-primary-500">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-600 dark:text-lime-600">
          &copy; {new Date().getFullYear()} Product Store All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
