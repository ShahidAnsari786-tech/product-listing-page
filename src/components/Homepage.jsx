'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { IoArrowBackCircle } from "react-icons/io5";
import Image from 'next/image';


// Homepage component
const Homepage = () => {
  // State to store fetched products
  const [products, setProducts] = useState([]);
  // State to control the view (categories or products)
  const [showCategories, setShowCategories] = useState(true);
  const [loading, setLoading] = useState(false);

  // Function to fetch products for women's clothing
  const fetchWomenClothingProducts = async () => {
    try {
      setLoading(true);
      setShowCategories(false); // Hide categories immediately
      const response = await axios.get(`https://fakestoreapi.com/products/category/women's clothing`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch products for men's clothing
  const fetchMenClothingProducts = async () => {
    try {
      setLoading(true);
      setShowCategories(false); // Hide categories immediately
      const response = await axios.get(`https://fakestoreapi.com/products/category/men's clothing`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch products for jewelry
  const fetchJeweleryProducts = async () => {
    try {
      setLoading(true);
      setShowCategories(false); // Hide categories immediately
      const response = await axios.get(`https://fakestoreapi.com/products/category/jewelery`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch products for electronics
  const fetchElectronicsProducts = async () => {
    try {
      setLoading(true);
      setShowCategories(false); // Hide categories immediately
      const response = await axios.get(`https://fakestoreapi.com/products/category/electronics`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to reset view to categories
  const showCategoriesView = () => {
    setShowCategories(true);
    setProducts([]);
    
  };

  return (
    <div className='bg-cover bg-center'style={{ backgroundImage: `url('/images/cover.jpg')`, }}>
    <div className="container mx-auto px-4 py-6 scroll-smooth">
      {showCategories ? (
        <>
          <h1 className="text-2xl font-semibold text-stone-700 mb-6">Collections</h1>
          <div className="flex flex-wrap mx-4">
            {/* Women's Clothing category */}
            <a
              href="#_women's_Product"
              onClick={fetchWomenClothingProducts}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-6"
            >
              <div className="block border-4 dark:border-stone-400 rounded-lg md:rounded-2xl hover:border-2 hover:border-stone-800 overflow-hidden shadow-xl transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <div className="p-2 dark:bg-stone-800">
                  <h2 className="text-base font-semibold dark:text-gray-100">Women&apos;s Clothing</h2>
                </div>
                <hr className=" dark:border-stone-800" />
                <Image 
                  src="/images/women.jpg"
                  alt="Women's Clothing"
                  className="w-full h-48 md:h-80 object-cover"
                />
              </div>
            </a>
            {/* Men's Clothing category */}
            <a
              href="#_Men's_Product"
              onClick={fetchMenClothingProducts}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-6"
            >
              <div className="block border-4 dark:border-stone-400 rounded-lg md:rounded-2xl overflow-hidden shadow-lg hover:border-2 hover:border-stone-800 transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <div className="p-2 dark:bg-stone-800">
                  <h2 className="text-base font-semibold  dark:text-gray-100">Men&apos;s Clothing</h2>
                </div>
                <hr className="border-stone-900" />
                <Image 
                  src="/images/men.jpg"
                  alt="Men's Clothing"
                  className="w-full h-48 md:h-80  object-cover"
                />
              </div>
            </a>
            {/* Jewelry category */}
            <a
              href="#_Jwelery_Product"
              onClick={fetchJeweleryProducts}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-6"
            >
              <div className="block border-4 dark:border-stone-400 hover:border-2 hover:border-stone-800 rounded-lg md:rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <div className="p-2 dark:bg-stone-800">
                  <h2 className="text-base font-semibold text-gray-800 dark:text-gray-100">Jewelery</h2>
                </div>
                <hr className=" dark:border-stone-800" />
                <Image 
                  src="/images/jwelery.jpg"
                  alt="Jewelry"
                  className="w-full h-48 md:h-80 object-cover"
                />
              </div>
            </a>
            {/* Electronics category */}
            <a
              href="#_Electronics_Product"
              onClick={fetchElectronicsProducts}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-6"
            >
              <div className="block border-4 dark:border-stone-400 hover:border-2 hover:border-stone-800 rounded-lg md:rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300">
                <div className="p-2 dark:bg-stone-800">
                  <h2 className="text-base font-semibold text-gray-800 dark:text-gray-100">Electronics</h2>
                </div>
                <hr className="dark:border-stone-800" />
                <Image 
                  src="/images/electronics.jpg"
                  alt="Electronics"
                  className="w-full h-48 md:h-80 object-cover"
                />
              </div>
            </a>
          </div>
        </>
      ) : (
        <div className="mt-8">
          
          <button
            onClick={showCategoriesView}
            className="bg-stone-700 flex text-gray-300 hover:bg-stone-800 drop-shadow-lg px-4 py-2 rounded-full mb-4"
          >
            <IoArrowBackCircle className="mr-2 animate-spin text-2xl text-lime-400" />
            Go Back
          </button>
          
          <h2 className="text-xl font-semibold text-stone-800 mb-4">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {loading ? (
              // Skeleton loader while loading
              Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className=" dark:bg-stone-600 p-1 md:rounded-2xl rounded-lg shadow-lg">
                  <div className="w-full h-60 bg-gray-300 animate-pulse mb-2"></div>
                  <div className="h-6 bg-gray-300 animate-pulse mb-2"></div>
                  <div className="h-6 bg-gray-300 animate-pulse"></div>
                </div>
              ))
            ) : (
              // Render products once data is fetched
              products.map((product, index) => (
                <div key={index} className="flex-col bg-gradient-to-b p-2 from-gray-100 cursor-pointer via-stone-200 to-gray-400 border-4 border-solid border-stone-300 hover:border-stone-400 rounded-lg md:rounded-2xl shadow-xl">
                  <Image 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-60 rounded-lg md:rounded-2xl object-fill"
                  />
                  
                  <h3 className="text-md font-semibold px-1 mt-4 mb-4">{product.title}</h3>
                  <h5 className='text-indigo-900 px-1 font-semibold text-base underline decoration-pink-600 mb-2'>Product Description</h5>
                  <p className="dark:text-blue-900 px-1 text-sm overflow-hidden display-inline ">{product.description}</p>
                  <p className="text-base text-pink-700 px-1 font-semibold mt-2"><span className='mr-1 font-semibold text-base text-stone-800'>Price </span>${product.price}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Homepage;
